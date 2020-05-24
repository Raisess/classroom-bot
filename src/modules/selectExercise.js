const {
  question
} = require('readline-sync');
const {
  exercise_url
} = require('../config.json');

const selectExercise = async (page, room_url) => {
  const navigationPromise = page.waitForNavigation();
  // ir para tela de exercicios
  await navigationPromise;
  await page.goto(room_url);

  await navigationPromise;

  // escolher o exercicio
  if (!exercise_url || exercise_url === null || exercise_url === undefined) {
    const exerciseLink = question('link do exercicio: ');
    await page.goto(exerciseLink);
  } else {
    const exerciseLink = exercise_url;
    await page.goto(exerciseLink);

    console.log('o exercicio predefinido foi:', exercise_url);
  }

  await navigationPromise;

}

module.exports = selectExercise;