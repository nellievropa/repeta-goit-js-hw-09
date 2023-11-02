import '../css/common.css';

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Saebiscuit',
];
// створимо змінну, яка рахуватиме кількість забігів

let raceCounter = 0;

const refs = {
    startBtn: document.querySelector('.js-race-btn'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-result-table > tbody'),
}

// запускаємо коней по кліку на кнопку старт
// refs.startBtn.addEventListener('click', () => {
    // const promises = horses.map(run);
    // refs.winnerField.textContent = '';-замінюємо на створену функцію!
    // updateWinnerField('');
    // і напишемо , що заїзд почався
    // refs.progressField.textContent = 'Заезд начался, ставки не принимаются!'-замінюємо на створену функцію!
    // updateProgressField('Заезд начался, ставки не принимаются!')
    
// винесли визначення переможця в окрему функцію, а сюди передали тільки звернення до неї через проміс
// determineWinner(promises);
    // Promise.race(promises).then(({ horse, time }) => {
    //     // refs.winnerField.textContent = `%c Победил ${ horse} финишировал за ${time} времени`; -замінюємо на створену функцію
    //     updateWinnerField(`Победил ${ horse} финишировал за ${time} времени`);
    //     updateResultTable({ horse, time });
     
    // });
    // waitForAll(promises);
    // Promise.all(promises).then(x => {
    //     // refs.progressField.textContent = '%c Заезд окончен, принимаются ставки!'-замінюємо на створену функцію!
    //     updateProgressField('%c Заезд окончен, принимаются ставки!')
             
  
    // })
// });


// і тоді refs.startBtn.addEventListener буде виглядати так 
refs.startBtn.addEventListener('click', onStart);

// потім взагалі всі const i функції виносимо в одну функцію onStart

function onStart() {
    raceCounter +=1;
    const promises = horses.map(run);

    updateWinnerField('');
    updateProgressField('Заезд начался, ставки не принимаются!')
    determineWinner(promises);
    waitForAll(promises);
}



// виносимо в функцію визначення переможця, аргумент можемо назвати як хочемо horseP
function determineWinner(horseP) {
    Promise.race(horseP).then(({ horse, time }) => {
        // refs.winnerField.textContent = `%c Победил ${ horse} финишировал за ${time} времени`; -замінюємо на створену функцію
        updateWinnerField(`В заїзді № ${raceCounter} переміг ${ horse} финишировал за ${time} времени`);
        updateResultTable({ raceCounter, horse, time });
     
    });
}
// винесемо функцію, яка визначає загальний список і передамо їй той же аргумент horseP
function waitForAll(horseP) {
    Promise.all(horseP).then(x => {
        // refs.progressField.textContent = '%c Заезд окончен, принимаются ставки!'-замінюємо на створену функцію!
        updateProgressField('%c Заезд окончен, принимаются ставки!')
             
  
    })
}
// коли багато повторюваних полів -виносимо їх в функції!

function updateWinnerField (message) {
    refs.winnerField.textContent = message;
};

function updateProgressField(message) {
    refs.progressField.textContent = message;
};

function updateResultTable({raceCounter, horse, time }) {
// робимо шаблонну строку
const tr =`<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
// додаємо в таблицю
refs.tableBody.insertAdjacentHTML('beforeend', tr);
}


// функція для забігу одного коня
function run (horse) {
return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
        // повертаємо об'єкт зі значеннями наприклад {"horse": "Mango","time": 2329 }
        resolve({raceCounter, horse, time})
    }, time);

});

};
// console.log(
//     '%c Заезд начался, ставки не принимаются',
//     'color: brown; font-size: 14px;'
// );

// run('Mango').then(x => console.log(x))
// .catch(e => console.log(e));

// якщо треба відстежити КОЛЕКЦІЮ (всіх коней) промісів - ми створюємо МАСИВ промісів

// const promises = horses.map(horse => run(horse))
// цей запис можна скоротити до цього
// const promises = horses.map(run)
// console.log(promises)

// статиний метод Promise.race() приймає масив промісів, чекаэ виконання самого швидкого промису і повертає його через then(x => console.log(x))
// тобто так ми можемо отримати саму швидку
// Promise.race(promises).then(({ horse, time }) => {
//     console.log(
//         `%c Победил ${ horse} финишировал за ${time} времени`,
//         'color: green; font-size: 14px;'
//     );
// })

// статиний метод Promise.all() приймає масив промісів, чекаэ виконання всіх промісів і повертає їх масив через then(x => console.log(x))

// Promise.all(promises).then(x => {
//     console.log(x)
    
// console.log(
//     '%c Заезд окончен, принимаются ставки!',
//     'color: blue; font-size: 14px;'
// );
// })




// сколько будет бегать лошадь 

function getRandomTime (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}