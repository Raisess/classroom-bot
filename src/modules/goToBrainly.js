// https://brainly.com.br/app/ask?entry=hero&q=${ args }
const goToBrainly = async (page, args) => {
  const navigationPromise = page.waitForNavigation();

  // ir para a pagina no brainly
  await page.goto(`https://brainly.com.br/app/ask?entry=hero&q=${ args }`);

  await navigationPromise;
  // sg-text

  await page.waitForSelector('div[class="sg-text"]');
  await page.click('class[class="sg-text"]');

  await navigationPromise;

}

module.exports = goToBrainly;