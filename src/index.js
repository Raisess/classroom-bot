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
  await page.goto(classroom_url);

  // AÇÕES DO BOT

  // LOGIN
  await navigationPromise;

  await page.waitForSelector('input[type="email"]');
  await page.click('input[type="email"]');

  await navigationPromise;

  // o bot escreve o email no campo e dps aperta no botão "Próxima"
  await page.type('input[type="email"]', yourEmail);

  await page.waitForSelector('#identifierNext');
  await page.click('#identifierNext');

  await navigationPromise;

  await page.waitForSelector('input[name="password"]');
  await page.click('input[name="password"]');

  await navigationPromise;

  // escrever senha
  await page.type('input[name="password"]', yourPassword);

  await page.waitForSelector('#passwordNext');
  await page.click('#passwordNext');

  // ENTRAR NA SALA E ESCOLHER A MATERIA
  

  // await browser.close();

  console.log('terminei!');
})();
