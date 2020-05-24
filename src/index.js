const puppeteer = require('puppeteer');

// importando o arquivo de configuração
const { classroom_url } = require('./config.json');

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
  // create a browser instace
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--window-size=1200,700"],
  });

  console.log('comecei!');

  const page = await browser.newPage();
  await page.goto(classroom_url);

  await page.click('input[clss="whsOnd zHQkBf"]');
  await page.keyboard.type(yourEmail);

  // await page.waitForNavigation();

  // await page.click('div[class="_2S1VP copyable-text selectable-text"]');
  // await page.keyboard.type('oii');

  // await browser.close();

  console.log('terminei!');
})();