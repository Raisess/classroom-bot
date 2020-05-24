const puppeteer = require('puppeteer');

// importando o arquivo de configuração
const { classroom_url } = require('./config.json');

console.log('comecei!');

let yourEmail, yourPassword;

// importando o arquivo de credenciais
if(require('./credencials.json')) {
  const { email, password } = require('./credencials.json');
  
  yourEmail = email;
  yourPassword = password;
} else {
  const { email, password } = require('./credencials.template.json');

  yourEmail = email;
  yourPassword = password;
}

// modulos do bot
const login = require('./modules/login');

(async () => {
  // criar a instancia do navegador
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport:{
      width: 800,
      height: 600
    }
  });

  // ir para página do classroom
  const page = await browser.newPage();
  
  // AÇÕES DO BOT
  // login
  await login(page, classroom_url, yourEmail, yourPassword);

  // await browser.close();

  console.log('terminei!');
})();
