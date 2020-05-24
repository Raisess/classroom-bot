const {
  question
} = require('readline-sync');

const {
  exercise_url
} = require('../config.json');

const postResolution = async (browser, page, text, callback) => {
  const navigationPromise = page.waitForNavigation();

  const arr = text.split('.');

  console.log('');
  console.log('SELECAO PARA RESPOSTA: ');
  console.log('');
  // console.log(arr);
  for (let i = 0; i < (arr.length - 1); i++) {
    console.log(`indice: ${ i }`, '|', `resposta: ${ arr[i] }`);
    console.log('');
  }

  console.log('');
  // escolher o item para resposta
  const index = parseInt(question('escolha o indice para resposta: '));

  // voltar para pagina do exercicio
  await page.goto(exercise_url);

  await navigationPromise;

  // clicar no campo de comentario
  await page.waitForSelector('div[id=":1.t"]');
  await page.click('div[id=":1.t"]');

  await navigationPromise;

  // o bot escreve o comentario
  await page.keyboard.type(arr[index]);

  console.log('');
  console.log('vc pode editar a resposta diretamente no navegador.');

  const send = parseInt(question('[1] para enviar / [0] para cancelar: '));

  await navigationPromise;

  // XuQwKc
  // clicar em enviar
  if (send === 1) {
    await page.waitForSelector('div[class="XuQwKc"]');
    await page.click('div[class="XuQwKc"]');

    await browser.close();
  } else {
    return callback();
  }
}

module.exports = postResolution;