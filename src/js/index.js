import '../css/common.css';
import BSN from 'bootstrap.native';

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

// const logger1 = time => console.log(`Лог кожні ${time}ms - ${Date.now()} `);

// console.log('До виклика setInterval');
// setInterval(logger1, 2000, 2000);
// console.log('Після виклика setInterval')


// Щоб очистити чи зупинити інтервал clearInterval через ID

// const intervalId = setInterval(logger1, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;

// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//     clearInterval(intervalId);
// }


// №3 ОПОВІЩЕННЯ Notification
// const NOTIFICATION_DELAY = 3000;

// const refs = {
//     notification: document.querySelector('.js-alert'),
// };
// let timeoutID = null;

// refs.notification.addEventListener('click', onNotificationClick);

// showNotification();

// function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timeoutID);
// }

// function showNotification() {
//     refs.notification.classList.add('is-visible');

//     timeoutID = setTimeout(() => {
// console.log('Закриваємо алерт, щоб не висів!');
// hideNotification();
//     }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//     refs.notification.classList.remove('is-visible');
// }


// 4 ПІДПИСКА SUBSCRIPTION
// проміжок часу, через який будуть відбуватися повтори
// const PROMT_DELAY = 1000;
// // кількість разів повторів
// const MAX_PROMT_ATTEMPTS = 3;
// // створюємо змінну, яка буде рахувати скільки разів ми вже попросили підписатися
// let promtCounter = 0;
// let hasSubscribed = false;

// // запускаємо повторення інтервалів
// const intervalID = setInterval(() => {
//     if(promtCounter === MAX_PROMT_ATTEMPTS || hasSubscribed) {
//         console.log('Зупиняємо інтервал!');
//         clearInterval(intervalID)
//         return;
//     }
// console.log('Підпишися на розсилку! - ' + Date.now());
// promtCounter += 1;
// }, PROMT_DELAY);

// Працюємо з БУТСТРАП

const modal = new BSN.Modal('#exampleModal');
console.log(modal);

modal.show();
modal.hide();
