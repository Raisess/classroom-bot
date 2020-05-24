const puppeteer = require('puppeteer');
const {
  question
} = require('readline-sync');

// importando o arquivo de configuração
const {
  classroom_url,
  room_url,
  exercise_url
} = require('./config.json');

console.log('comecei!');

let yourEmail, yourPassword;

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
  yourEmail = question('informe o seu email: ');
  yourPassword = question('informe sua senha: ', {
    hideEchoBack: true
  });
}

// modulos do bot
const login = require('./modules/login');
const selectExercise = require('./modules/selectExercise');
const getExerciseText = require('./modules/getExerciseText');
const goToScholar = require('./modules/goToScholar');

// modulos de resolução de exercicios
// const googleSearchFetch = require('./services/googleSearchFetch');

(async () => {
  // criar a instancia do navegador
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--window-size=1000,700']
  });

  // ir para página do classroom
  const page = await browser.newPage();

  // AÇÕES DO BOT
  // login
  await login(page, classroom_url, yourEmail, yourPassword);
  // selecionar exercicio
  await selectExercise(page, room_url);
  await getExerciseText(page, async searchText => {
    await goToScholar(page, searchText);
  });

  // await browser.close();

  console.log('terminei!');
})();