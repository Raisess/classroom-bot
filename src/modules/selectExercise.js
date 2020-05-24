const selectExercise = async (page, room_url) => {
  const navigationPromise = page.waitForNavigation();
  // ir para tela de exercicios
  await navigationPromise;
  await page.goto(room_url);

  await navigationPromise;

  console.log('');
  console.log('entrando na sala...');
}

module.exports = selectExercise;