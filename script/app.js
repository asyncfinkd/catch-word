let ScoreElement = document.querySelector(".game__score");
let StageElement = document.querySelector(".game__stage");
let TimerElement = document.querySelector(".timer");
let WordsElement = document.querySelector(".word__container");
let InputElement = document.querySelector("input");
let ContainerElement = document.querySelector(".modal__container");
let ButtonElement = document.getElementById("OK");
let BoxElement = document.querySelector(".modal__container .modal__box");
let Score = 0;
let Stage = 0;
let Timer = 50;
let Interval = 1000;
let addTimeNumber = 3;
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
  if (InputElement.value.trim().toLocaleLowerCase() === randomWord) {
    InputElement.value = "";
    setRandomWord();
    Score++;
    Timer += addTimeNumber;
    TimerElement.innerHTML = Timer + "s";
    TimerElement.classList.add("green");
    ScoreElement.innerHTML = "Score " + Score;
    setTimeout(() => {
      TimerElement.classList.remove("green");
    }, 500);
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
  ContainerElement.style.display = "flex";
  setTimeout(() => {
    BoxElement.style.opacity = "1";
  }, 500);
}

ButtonElement.addEventListener("click", () => {
  window.location.reload();
});
