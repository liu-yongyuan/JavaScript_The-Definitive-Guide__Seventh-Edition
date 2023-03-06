async function getHighScore() {
  let response = await fetch("/api/user/profile");
  let profile = await response.json();
  return profile.highScore;
}


displayHighScore(await getHighScore());

getHighScore().then(displayHighScore).catch(console.error)