let ScoreElement = document.querySelector(".game__score");
let StageElement = document.querySelector(".game__stage");
let TimerElement = document.querySelector(".timer");
let Score = 0;
let Stage = 0;
let Timer = 50;
let Interval = 1000;
let Elements = [
  {
    element: ScoreElement,
    text: "Score ",
    variable: Score,
  },
  {
    element: StageElement,
    text: "Stage ",
    variable: Stage,
  },
];

Application();
StartTimer();

function Application() {
  Elements.map((item) => {
    const { element, text, variable } = item;
    element.innerHTML = text + variable;
  });
}

function timerSetting() {
  Timer--;
  TimerElement.innerHTML = Timer + "s";
}

function StartTimer() {
  setInterval(timerSetting, Interval);
}
