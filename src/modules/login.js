const login = async (page, classroom_url, yourEmail, yourPassword) => {
  const navigationPromise = page.waitForNavigation();
  await page.goto(classroom_url);

  console.log('');
  console.log('fazendo login...');

  await navigationPromise;

  // clicar no campo de email
  await page.waitForSelector('input[type="email"]');
  await page.click('input[type="email"]');

  await navigationPromise;

  // o bot escreve o email no campo e dps aperta no botão "Próxima"
  await page.type('input[type="email"]', yourEmail);

  await page.waitForSelector('#identifierNext');
  await page.click('#identifierNext');

  await navigationPromise;

  // clicar no campo de senha
  await page.waitForSelector('input[name="password"]');
  await page.click('input[name="password"]');

  await navigationPromise;
  await navigationPromise;

  // escrever senha
  await page.type('input[name="password"]', yourPassword);

  await page.waitForSelector('#passwordNext');
  await page.click('#passwordNext');

  console.log('login realizado com sucesso!');
}

module.exports = login;