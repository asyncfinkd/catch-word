let ScoreElement = document.querySelector(".game__score");
let StageElement = document.querySelector(".game__stage");
let TimerElement = document.querySelector(".timer");
let WordsElement = document.querySelector(".word__container");
let InputElement = document.querySelector("input");
let Score = 0;
let Stage = 0;
let Timer = 50;
let Interval = 1000;
let Words = [
  "book",
  "apple",
  "microsoft",
  "wine",
  "production",
  "left",
  "right",
  "bottom",
  "top",
  "sweet",
  "facebook",
  "google",
];
let randomWord = null;
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

InputElement.addEventListener("keyup", () => {
  if (InputElement.value === randomWord) {
    setRandomWord();
    InputElement.value = "";
  }
});

function Application() {
  Elements.map((item) => {
    const { element, text, variable } = item;
    element.innerHTML = text + variable;
  });
  setRandomWord();
}

function setRandomWord() {
  randomWord = Words[Math.floor(Math.random() * Words.length)];
  WordsElement.innerHTML = randomWord;
}

function timerSetting() {
  if (Timer <= 0) {
    return gameOver();
  } else {
    Timer--;
    TimerElement.innerHTML = Timer + "s";
  }
}

function StartTimer() {
  setInterval(timerSetting, Interval);
}

function gameOver() {
  clearInterval(StartTimer);
  //   return alert("Oops, Time out");
}
