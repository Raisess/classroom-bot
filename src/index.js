const puppeteer = require('puppeteer');
const {
  question
} = require('readline-sync');
const showTitle = require('./showTitle')();

// importando o arquivo de configuração
const {
  classroom_url,
  room_url,
  exercise_url
} = require('./config.json');

let yourEmail, yourPassword, yourExercise;

// importando o arquivo de credenciais
if (require('./credencials.json')) {
  const {
    email,
    password
  } = require('./credencials.json');

  yourEmail = email;
  yourPassword = password;
} else if (require('./credencials.template.json')) {
  const {
    email,
    password
  } = require('./credencials.template.json');

  yourEmail = email;
  yourPassword = password;
} else {
  yourEmail = question('> informe o seu email: ');
  yourPassword = question('> informe sua senha: ', {
    hideEchoBack: true
  });
}

// checando se existe um exercicio predefinido
if (!exercise_url || exercise_url === null || exercise_url === undefined) {
  console.log('');
  yourExercise = question('> link do exercicio para ser resolvido: ');
} else {
  yourExercise = exercise_url;
}

// modulos do bot
const login = require('./modules/login');
const selectExercise = require('./modules/selectExercise');
const {
  getExerciseText
} = require('./modules/getExerciseText');
const goToScholar = require('./modules/goToScholar');
const postResolution = require('./modules/postResolution');

// modulos de resolução de exercicios
// const googleSearchFetch = require('./services/googleSearchFetch');

(async () => {
  // criar a instancia do navegador
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--window-size=250,720']
  });

  // ir para página do classroom
  const page = await browser.newPage();

  console.log('comecei!');

  // AÇÕES DO BOT
  // login
  await login(page, classroom_url, yourEmail, yourPassword);
  // selecionar exercicio
  await selectExercise(page, room_url);
  await getExerciseText(page, yourExercise, async searchText => {
    await goToScholar(page, searchText, async (text, bool) => {
      await postResolution(browser, page, yourExercise, text, bool, async () => await browser.close());
    });
  });

  console.log('');
  console.log('terminei, tchauzinho!');
  console.log('by Danilo XD');
})();