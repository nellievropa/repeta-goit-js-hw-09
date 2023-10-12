// import '../common.css';

// метод window.setTimeout{callback, delat, arg}

// const logMessage = () => {
//     console.log('Лог при визові caalback-функції через 3 секунди');
// };
// ця функція визветься пізніше , бо на 2 секунди відкладена
// console.log('До визову setTimeout');
// setTimeout((x) => {
//     console.log(x);
//     console.log(`1-Внутри callback-функції для setTimeout`)
// }, 
// 2000, 
// 5);

// console.log('Після визову setTimeout');
// ця функція визветься раніше, бо в планувальнику 1 секунда енаступить раніше, ніж 2
// setTimeout((y) => {
//     console.log(y);
//     console.log(`2-Внутри callback-функції для setTimeout`)
// }, 
// 1000, 
// 65);

// for (let index = 0; index < 10000; index++) {
//     console.log(index);
// }


// очистка таймоутов

// const logger = time => {
//     console.log(`Лог через ${time}ms, тому що не відмінили таймаут`)
// };
// setTimeout(logger, 2000, 2000);

// як знайти ідентифікатор таймаута- щоб потім його почистити!!!
// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//     // сюди передаємо ідентифікатор таймаута timerId
//     clearTimeout(timerId);
// }

// якщо потрібно викликати функцію декілька разів

const logger1 = time => console.log(`Лог кожні ${time}ms - ${Date.now()} `);

// console.log('До виклика setInterval');
// setInterval(logger1, 2000, 2000);
// console.log('Після виклика setInterval')


// Щоб очистити чи зупинити інтервал clearInterval через ID

const intervalId = setInterval(logger1, 2000, 2000);
const shouldCancelInterval = Math.random() > 0.3;

console.log(shouldCancelInterval);

if (shouldCancelInterval) {
    clearInterval(intervalId);
}

