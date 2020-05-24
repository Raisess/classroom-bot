const puppeteer = require('puppeteer');

// importando o arquivo de configuração
const {
  classroom_url
} = require('./config.json');

console.log('comecei!');

let yourEmail, yourPassword, yourRoom;

// importando o arquivo de credenciais
if (require('./credencials.json')) {
  const {
    email,
    password,
    room_url
  } = require('./credencials.json');

  yourEmail = email;
  yourPassword = password;
  yourRoom = room_url;
} else {
  const {
    email,
    password,
    room_url
  } = require('./credencials.template.json');

  yourEmail = email;
  yourPassword = password;
  yourRoom = room_url;
}

// modulos do bot
const login = require('./modules/login');
const selectExercise = require('./modules/selectExercise');

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
  await selectExercise(page, yourRoom);

  // await browser.close();

  console.log('terminei!');
})();