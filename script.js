function incrementScore(scoreId) {
  const scoreElement = document.getElementById(scoreId);
  let score = parseInt(scoreElement.innerText);
  score++;
  scoreElement.innerText = score;
}
function incrementFoul(foulId) {
  const foulElement = document.getElementById(foulId);
  let fouls = parseInt(foulElement.innerText);
  fouls++;
  foulElement.innerText = fouls;
}
function resetScores() {
  document.getElementById('score1').innerText = '0';
  document.getElementById('score2').innerText = '0';
  document.getElementById('foul1').innerText = '0';
  document.getElementById('foul2').innerText = '0';
}