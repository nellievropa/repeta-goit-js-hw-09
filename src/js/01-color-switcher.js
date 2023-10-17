

const CHANGE_COLOR = 1000;

const button = document.querySelector('button');

button.addEventListener('data-start', onStart);
button.addEventListener('data-stop', onStop);



function onStart() {

    setInterval(() => {
        console.log('Змінюємо колір!');
        getRandomHexColor();
            }, CHANGE_COLOR);
    


}

onStart();


function onStop() {

}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }