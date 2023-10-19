import '../css/common.css';

// пишемо интерфейс секундоміра
const refs ={
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
};


const timer = {
    // щоб знайти ID інтервалу 
    intervalId: null,
    // щоб відстежувати кнопку старт, що вона активн
    isActive: false,
start() {
    // в локальну зміну помістимо час, який є на момент старту
    const startTime = Date.now();

    // і запускаємо інтервал, який буде викликати цю функцію кожну секунду(або інший заданий проміжок часу)
    this.intervalId = setInterval(() => {
        // створимо стартовий час на момент запуску - він буде різний кожного разу!
        const currentTime = Date.now();
        // створимо змінну з різницею цих часів
        const deltaTime = currentTime -startTime;
        // cтворимо змінну, яка буде переводити мілісекунди в потрібний формат за допомогою функції
        const {hours, mins, secs} = getTimeComponents(deltaTime)
        // console.log('start-> currentTime', currentTime)
        // час старту startTime буде незмінний!
        // console.log('start => startTime', startTime);

        // знайдемо різницю між часом старту та поточним часом
        // console.log( currentTime - startTime);
        // отримали наш рахівник секунд
        console.log(`${hours}:${mins}:${secs}`);

        // при використанні цього формату максимальна кількість годин- 24, а якщо на распродажу відведено більше годи-- то це вже проблема при використанні таких форматів часу
// console.log(`${pad(new Date(deltaTime).getUTCHours())}:${pad(new Date(deltaTime).getMinutes())}:${pad(new Date(deltaTime).getSeconds())}`);

    }, 1000);
},
// щоб зупинити секундомер використовуємо метод clearInterval для якого потрібен ідентифікатор ID інтервала, який визваний в другому методі старт!
stop () {
    clearInterval(this.intervalId);
}
}

// timer.start();

refs.startBtn.addEventListener('click', () => {
    timer.start();
})

refs.stopBtn.addEventListener('click', () => {
    timer.stop();
})
function updateClockFace ({hours, mins, secs}) {
    requestAnimationFrame.clockface.textContent = `${hours}:${mins}:${secs}`;
}

//  для того, щоб зробити числа завжди двозначними (01 або 25) використовуємо метод pad
// ми в нього обернемо наші значення hours, mins, secs
function pad(value) {
    // цей запис означає : візьми число, зроби з нього строку і на старті(ЗЛІВА!!) додай '0'
    return String(value).padStart(2, '0')
}

// Для того щоб перевести мілісекунди в поточний час є функція, якф
// приймає час в мілісекундах
//  вираховує скільки в цих мілісекундах вміщується годин, хвилин, секунд
// повертає об'єкт з властивостями hours, mins, secs
// зразки можно шукати в інеті!

function getTimeComponents(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 *24)) / (1000 * 60 * 60)));
    const mins = pad( Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

            return { hours, mins, secs};
}
