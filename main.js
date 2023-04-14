const box = document.getElementById("box");

let positionX = 0;
let positionY = 0;
let positionR = 0;
let positionB = 0;

const move = () => {
  if (positionX <= 449) {
    positionX++;
    box.style.right = `${positionX}px`;
    setTimeout(move, 1);
  } else if (positionX >= 449 && positionY <= 449) {
    positionY++;
    box.style.top = `${positionY}px`;
    setTimeout(move, 1);
  } else if (positionX >= 449 && positionY >= 449 && positionR <= 449) {
    positionR++;
    box.style.left = `${positionR}px`;
    setTimeout(move, 1);
  } else if (
    positionX >= 449 &&
    positionY >= 449 &&
    positionR >= 449 &&
    positionB <= 449
  ) {
    positionB++;
    box.style.bottom = `${positionB}px`;
    setTimeout(move, 1);
  }
};

move();

// ///////////////////////

let seconds = 00;
let minutes = 00;
let Interval;
const timeSeconds = document.getElementById("second");
const timeMinutes = document.getElementById("minutes");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");

btnStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(TimeFunc, 90);
});

btnStop.addEventListener("click", () => {
  clearInterval(Interval);
});

btnReset.addEventListener("click", () => {
  clearInterval(Interval);
  minutes = "00";
  seconds = "00";
  timeSeconds.innerHTML = seconds;
  timeMinutes.innerHTML = minutes;
});

const TimeFunc = () => {
  seconds++;
  if (seconds <= 9) {
    timeSeconds.innerHTML = "0" + seconds;
  }
  if (seconds > 9) {
    timeSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    timeMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    timeSeconds.innerHTML = "0" + seconds;
  }
  if (seconds > 9) {
    timeSeconds.innerHTML = seconds;
  }
};

// TimeFunc();
