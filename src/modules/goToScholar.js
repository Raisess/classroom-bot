const {
  question
} = require('readline-sync');

const goToScholar = async (page, args, callback) => {
  const navigationPromise = page.waitForNavigation();

  const str = args.split('+').join(' ');
  const otherStr = str.split('\n').join('');
  const arr = otherStr.split('.');

  console.log('');
  console.log('SELECAO PARA PESQUISA: ');
  // console.log(arr);
  for (let i = 0; i < (arr.length - 1); i++) {
    console.log(`indice: ${ i }`, '|', `texto: ${ arr[i] }`);
  }

  console.log('');
  // escolher o item para pesquisar
  const index = parseInt(question('escolha o indice para pesquisar: '));

  // fazer a pesquisa
  await page.goto(`https://www.google.com/search?q=${ arr[index] }&aqs=chrome..69i57j69i60.550j0j1&sourceid=chrome&ie=UTF-8`);

  await navigationPromise;

  // selecionar texto da resposta
  await page.waitForSelector('span[class="e24Kjd"]');

  const element = await page.$('span[class="e24Kjd"]');
  const text = await page.evaluate(elem => elem.innerText, element);

  await navigationPromise;

  console.log(text);
  console.log('');

  if (callback) {
    return callback(text);
  }

}

module.exports = goToScholar;