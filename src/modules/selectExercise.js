const {
  question
} = require('readline-sync');

const selectExercise = async (page, room_url) => {
  const navigationPromise = page.waitForNavigation();
  // ir para tela de exercicios
  await navigationPromise;
  await page.goto(room_url);

  await navigationPromise;

  // escolher o exercicio
  const exerciseLink = question('link do exercicio: ');
  await page.goto(exerciseLink);

  await navigationPromise;

}

module.exports = selectExercise;