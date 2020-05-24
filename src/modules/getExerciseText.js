// trocar os espaços por cocatenação em query string
const textReplace = text => text.split(' ').join('+');

const getExerciseText = async (page, exercise_url, callback) => {
  const navigationPromise = page.waitForNavigation();

  console.log('');
  console.log('o exercicio predefinido foi:', exercise_url);

  // ir para pagina do exercicio
  await page.goto(exercise_url);

  await navigationPromise;

  // pegar o texto de um elemento
  await page.waitForSelector('div[guidedhelpid="assignmentInstructionsGH"]');

  const element = await page.$('div[guidedhelpid="assignmentInstructionsGH"]');
  const text = await page.evaluate(elem => elem.innerText, element);

  await navigationPromise;

  // console.log(element);
  // console.log(text);
  const searchText = textReplace(text);

  // console.log(searchText);

  if (callback) {
    // retorna um callback com texto para tratamento
    return callback(searchText);
  }
}

module.exports = {
  getExerciseText: getExerciseText,
  textReplace: textReplace
};