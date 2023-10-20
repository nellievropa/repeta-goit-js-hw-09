import throttle from "lodash.throttle";

const CHANGE_COLOR = 2000;

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]')


startBtn.addEventListener('click', throttle(onStart, 500));
stopBtn.addEventListener('click', onStop);

// const PROMT_DELAY = 1000;

function onStart(evt) {
  if (!evt) {
    return;
  }
        console.log('Змінюємо колір!');
        setInterval(changeColors,CHANGE_COLOR);
 }
    
// // changeColors();
// setInterval(changeColors,CHANGE_COLOR);
// 

function onStop(evt) {
    const timerId = setInterval(changeColors,CHANGE_COLOR);
    if(evt){
        console.log('Зупиняємо інтервал!');
        clearInterval(timerId);
    }
             

}

function changeColors() {
    console.log('Змінюємо колір!');
    document.body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }