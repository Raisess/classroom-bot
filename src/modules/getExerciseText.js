const {
  question
} = require('readline-sync');
const {
  exercise_url
} = require('../config.json');

const getExerciseText = async (page, callback) => {
  const navigationPromise = page.waitForNavigation();

  // escolher o exercicio
  if (!exercise_url || exercise_url === null || exercise_url === undefined) {
    // exercicio não definido
    const exerciseLink = question('link do exercicio: ');
    await page.goto(exerciseLink);
  } else {
    // exercicio prédefinido
    const exerciseLink = exercise_url;
    await page.goto(exerciseLink);

    console.log('o exercicio predefinido foi:', exercise_url);
  }

  await navigationPromise;

  // pegar o texto de um elemento
  await page.waitForSelector('div[guidedhelpid="assignmentInstructionsGH"]');

  const element = await page.$('div[guidedhelpid="assignmentInstructionsGH"]');
  const text = await page.evaluate(elem => elem.innerText, element);

  await navigationPromise;

  // console.log(element);
  // console.log(text);

  if (callback) {
    // retorna um callback com texto para tratamento
    return callback(text);
  }
}

module.exports = getExerciseText;