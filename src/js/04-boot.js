import '../css/common.css';
import BSN from 'bootstrap.native';

// Працюємо з БУТСТРАП
// достукуємось до кнопки Підписатися
const subscribeBtn = document.querySelector('button[data-subscribe]')
// переносимо її до refs

const refs = {
    myModal: document.querySelector('#myModal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
  };
  const PROMPT_DELAY = 3000;
  const MAX_PROMPT_ATTEMPTS = 3;
//   рахуємо повторення
  let promtCounter = 0;
//   створюємо змінну на випадок, якщо натиснули кнопку Підписатися
let hasSubcribed = false;
const myModal = new BSN.Modal('#myModal');
// console.log(myModal);

// запускаємо її при відкритті сторінки
openModal ();

// refs.myModal.addEventListener('hide.bs.modal', () => {
//     // і повторюємо при закритті
//     openModal ();
//     console.log('закриваємо надоедалку')
// });
// функцію, що вище можна переписати так

refs.myModal.addEventListener('hide.bs.modal', openModal);

// refs.subscribeBtn.addEventListener('click', () => {
//     // змінюємо значення на тру, бо людина підписалася
//     hasSubcribed = true;
//     // є вбудований метод прховати модалку
//     myModal.hide();
// })
// винесемо виконання коду зверху в функцію і перепишемо той запис так 
refs.subscribeBtn.addEventListener('click', subscribeCloseModal );

function subscribeCloseModal () {
    hasSubcribed = true;
    myModal.hide();
}

// цей код відкриває модалку, його можна винести в функцію
// setTimeout(() => {
//     console.log( 'Вікриваємо модалку ')
//     myModal.show();
// }, PROMPT_DELAY);

function openModal () {
    if (promtCounter === MAX_PROMPT_ATTEMPTS || hasSubcribed) {
        console.log('максимальна кількість набриданій або людина підписалася');
        return;
    }
    // планувальник планую наступний визов однієї і тієї ж функції
    setTimeout(() => {
        console.log( 'Вікриваємо модалку ')
        myModal.show();
        // рахуємо кількість відкривань
        promtCounter += 1;
    }, PROMPT_DELAY);
}

