const selectExercise = async (page, room_url) => {
  const navigationPromise = page.waitForNavigation();
  // ir para tela de exercicios
  await navigationPromise;
  await page.goto(room_url);

  await navigationPromise;
}

module.exports = selectExercise;