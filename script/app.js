let ScoreElement = document.querySelector(".game__score");
let Score = 0;
let Stage = 0;
let Timer = 50;

Application();

function Application() {
  ScoreElement.innerHTML = Score;
}
