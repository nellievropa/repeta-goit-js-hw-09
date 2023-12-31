import '../css/common.css';
// import '../css/01-color-switcher.css';

// пишемо интерфейс секундоміра
const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
    reversStartBtn: document.querySelector('button[data-action-revers-start]'),
    reversStopBtn: document.querySelector('button[data-action-revers-stop]'),
    reversClockface: document.querySelector('.js-revers-clockface'),
};


// Таймер для ДЗ
class Timer {
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;

        this.init();
    }

// метод  init() створить нам інтерфес з нулевими значеннями
init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
}

start() {
    if (this.isActive) {
        return;
    }
    const startTime = Date.now();
this.isActive = true;

this.intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime;
    const time = this.getTimeComponents(deltaTime);

 this.onTick(time);
}, 1000);
}
stop () {
    clearInterval(this.intervalId);
    // тут знову кажемо, що кнопка неактивна повинна бути
    this.isActive = false;
    // щоб обнулити таймер: викликаємо функцію і передаємо їй 0 секунд
    const time = this.getTimeComponents(0);
    this.onTick(time);
}
 getTimeComponents(time) {
    const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 *24)) / (1000 * 60 * 60)),
        );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

            return { hours, mins, secs };
}

pad(value) {
    // цей запис означає : візьми число, зроби з нього строку і на старті(ЗЛІВА!!) додай '0'
    return String(value).padStart(2, '0');
}
}

const timer = new Timer({
    onTick: updateClockface,
});



// const timer = {
//     // щоб знайти ID інтервалу 
//     intervalId: null,
//     // щоб відстежувати кнопку старт, що вона активн
//     isActive: false,
// start() {
//     // щоб зробити кнопку неактивною під час виконання коду
//     // перевіряємо її і якщо- да то перериваємо виконання коду подальшого
//     if (this.isActive) {
//         return;
//     }
//     // в локальну зміну помістимо час, який є на момент старту
//     const startTime = Date.now();

//     // а в цій чаті коду пишемо,що вона активна
//     this.isActive = true;

//     // і запускаємо інтервал, який буде викликати цю функцію кожну секунду(або інший заданий проміжок часу)
//     this.intervalId = setInterval(() => {
//         // створимо стартовий час на момент запуску - він буде різний кожного разу!
//         const currentTime = Date.now();
//         // створимо змінну з різницею цих часів
//         const deltaTime = currentTime - startTime;
//         // cтворимо змінну, яка буде переводити мілісекунди в потрібний формат за допомогою функції
//         const time = getTimeComponents(deltaTime); 
//     // деструктуризацію змінюємо на змінну time
//     // const times = getTimeComponents(deltaTime);

//      updateClockface(time);

//         // console.log('start-> currentTime', currentTime)
//         // час старту startTime буде незмінний!
//         // console.log('start => startTime', startTime);

//         // знайдемо різницю між часом старту та поточним часом
//         // console.log( currentTime - startTime);
//         // отримали наш рахівник секунд
//         // console.log(`${hours}:${mins}:${secs}`);

//         // при використанні цього формату максимальна кількість годин- 24, а якщо на распродажу відведено більше годи-- то це вже проблема при використанні таких форматів часу
// // console.log(`${pad(new Date(deltaTime).getUTCHours())}:${pad(new Date(deltaTime).getMinutes())}:${pad(new Date(deltaTime).getSeconds())}`);

//     }, 1000);
// },
// // щоб зупинити секундомер використовуємо метод clearInterval для якого потрібен ідентифікатор ID інтервала, який визваний в другому методі старт!
// stop () {
//     clearInterval(this.intervalId);
//     // тут знову кажемо, що кнопка неактивна повинна бути
//     this.isActive = false;
// }
// }

// timer.start();

// refs.startBtn.addEventListener('click', () => {
//     timer.start();
// });
// якщо функцію переписуємо як МЕТОД то додаємо до чого вона прив'язана bind(timer)
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// refs.stopBtn.addEventListener('click', () => {
//     timer.stop();
// });

// малюємо ІНТЕРФЕЙС!! 
// приймає мілісекунди
// вираховує скільки в них годин, минут і секунд
// малює інтерфейс

function updateClockface({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

//  для того, щоб зробити числа завжди двозначними (01 або 25) використовуємо метод pad
// ми в нього обернемо наші значення hours, mins, secs
// function pad(value) {
//     // цей запис означає : візьми число, зроби з нього строку і на старті(ЗЛІВА!!) додай '0'
//     return String(value).padStart(2, '0');
// }

// Для того щоб перевести мілісекунди в поточний час є функція, якф
// приймає час в мілісекундах
//  вираховує скільки в цих мілісекундах вміщується годин, хвилин, секунд
// повертає об'єкт з властивостями hours, mins, secs
// зразки можно шукати в інеті!

// function getTimeComponents(time) {
//     const hours = pad(
//         Math.floor((time % (1000 * 60 * 60 *24)) / (1000 * 60 * 60)),
//         );
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//             return { hours, mins, secs };
// }







// поточна дата
const currentDate = new Date();
// дата від якої будемо рахувати відлік

const targetDate = new Date('12/31/2023');

console.log(currentDate)
console.log(targetDate)
console.log(targetDate - currentDate)

// = 5817375901 мілісекунд потім по формулам вираховуємо скільки днів годин і хвилин 
// потрібно робит все в setInterval(() =>{}, 1000)

setInterval(() =>{
    const currentDate = new Date();
    const targetDate = new Date('12/31/2023');
    console.log(convertMs(targetDate - currentDate))
}, 1000)

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); 

class reversTimer {
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;

        this.init();
    }

    init() {
        const time = this.convertMs(0);
        this.onTick(time);
    }

start1() {
    if (this.isActive) {
        return;
    }
    const targetTime = new Date('10/26/2023');
this.isActive = true;

this.intervalId = setInterval(() => {
    const currentTime = Date.now();
    console.log(currentTime)
    const deltaTime = targetTime - currentTime;
    const time = this.convertMs(deltaTime);

 this.onTick(time);
}, 1000);
}

stop1 () {
    clearInterval(this.intervalId);
    // тут знову кажемо, що кнопка неактивна повинна бути
    this.isActive = false;
    // щоб обнулити таймер: викликаємо функцію і передаємо їй 0 секунд
    
    const time = this.convertMs(0);
    this.onTick(time);
}
// getTimeComponents(time) {
//     const hours = this.pad(
//         Math.floor((time % (1000 * 60 * 60 *24)) / (1000 * 60 * 60)),
//         );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//             return { hours, mins, secs };
// }

// pad(value) {
//     // цей запис означає : візьми число, зроби з нього строку і на старті(ЗЛІВА!!) додай '0'
//     return String(value).padStart(2, '0');
// }


 convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = this.pad(Math.floor(ms / day));
    // Remaining hours
    const hours = this.pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  pad(value) {
    // цей запис означає : візьми число, зроби з нього строку і на старті(ЗЛІВА!!) додай '0'
    return String(value).padStart(2, '0');
}


}

const revTimer = new reversTimer({
    onTick: updateReversClockface,
});

function updateReversClockface({ days, hours, minutes, seconds }) {
    refs.reversClockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

refs.reversStartBtn.addEventListener('click', revTimer.start1.bind(revTimer));
refs.reversStopBtn.addEventListener('click', revTimer.stop1.bind(revTimer));