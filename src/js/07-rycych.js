
//1 як достукатися до днів правильно!!!

// const date = new Date();
// console.log(date)
// // щоб узнати місяц поточний викликаємо метод date.getMonth()
// // але місяця повертаються в цифровому значенні з 0 та до 11 = 12
// // дні тижні від 0 до 6

// console.log(date.getMonth());

// // щоб задати назви місяців на будь-якій мові, треба будае задавати масиви типу цього

// const nameOfMonths = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень','Серпень', 'Вересень', 'Жовтень', 'Листопад','Грудень'];

// // щоб потім отримати назву місяця робимо наступний запис , де date.getMonth() - виступає як індекс потрібного місяця
// console.log(nameOfMonths[date.getMonth()]);

// // дні починаються з 0= неділя, тому 1= понеділок
// const nameOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота']
// console.log(date.getDay());
// // метод також стане індексом ПОТОЧНОГО дня

// console.log(nameOfDay[date.getDay()]);

// 2 ПРИКЛАД коутнтера назад

// const box = document.querySelector('.js-box');
// const titleTimer = document.querySelector('.js-timer')
// let counter = 11;
// // встановлюєм інтервал через якия з'явиться наша реклама через setTimeout
// setTimeout(() => {
//     // зробили дисплей видимим
//     box.style.display = "block";
//     // щоб зробити звротній відлік робимо setInterval з інтервалом 1000 мс і в titleTimer робимо textContent, де будемо малювати зворотній відлік
//     const intervalId = setInterval(() => {
//         console.log(intervalId);
//         //  counter -= 1 повинен стояти вище, щоб відмальовувались всі значення до 0
//         counter -= 1;
//         // це сам відлік!!! секунди
//         titleTimer.textContent = counter;
//         // якщо counter === 0 (тобто НЕ counter)
//         if(!counter) {
//             clearInterval(intervalId);
//             // 2 варіант : якщо хочемо закрити натисканням на Х
//             titleTimer.textContent = 'X';
//             titleTimer.addEventListener('click', onClick)


//             // 1 варіант без Х : прибираєм дисплей з екрану
//             // box.style.display = "none";

//         }
//     },1000);
// }, 5000);

// function onClick() {
//     box.style.display = "none";
   
// }

// 3 ЧАСИ з датою 

const day = document.querySelector('.date-day');
const date = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
// робимо електронний годинник
const digitalClock = document.querySelector('.digital-clock');

const arrowSeconds = document.querySelector('.clock-seconds_arrow');
const arrowMinutes = document.querySelector('.clock-minutes_arrow');
const arrowHours = document.querySelector('.clock-hours_arrow');


const nameOfMonths = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень','Серпень', 'Вересень', 'Жовтень', 'Листопад','Грудень'];
const nameOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];

//  з датами завжди використовуємо setInterval(), щоб оновлювалась дата при переході з одного дня на інший
// в цьому випадку new Date() буде оновлюватися щосекунди (1000)
setInterval(() => {
    const currentTime = new Date();
    const currentDay = nameOfDay[currentTime.getDay()];
    const currentDate = currentTime.getDate();
    const currentMonth = nameOfMonths[currentTime.getMonth()];
    const currentYear = currentTime.getFullYear();
// отримуємо данні, яка зараз година, хвилина і секунда
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();


    // розраховуємо поточне положення секундної стрілки 
// це значення currentSecond * changeSeconds
    const changeSeconds = 360 / 60 * currentSecond;
    const cahngeMinutes = 360 / 60 * currentMinute;
const changeHours = (360 / 12) * currentHour + (360 / 12 / 60) * currentMinute;
// console.log(changeHours)

// секунди треба форматувати до виду 00, бо після 59 буде просто 1
// будем використовувати метод padStart(2, '0'), де 2 - це скільки цифр нам потрібно, а 0 - чим заповнити пусте місце! , але він працює тільки з рядками, 
// тому спочатку число приводим до рядка .toString, а потім рядок передаємо в textContent(тому до числа знову не приводимо)!
const formatTime = `${currentHour.toString().padStart(2, '0')} : 
${currentMinute.toString().padStart(2, '0')} 
: ${currentSecond.toString().padStart(2, '0')}`

    // console.log(formatTime);

    day.textContent = currentDay;
    date.textContent = currentDate;
    month.textContent = currentMonth;
    year.textContent = currentYear;

    digitalClock.textContent = `Current time: ${formatTime}`;


    // щоб змінити положення стрілки на екрані використовуємо метод CSS

arrowSeconds.style.transform = `rotate(${changeSeconds}deg)`;
arrowMinutes.style.transform = `rotate(${cahngeMinutes}deg)`;
arrowHours.style.transform = `rotate(${changeHours}deg)`;
}, 1000)

// const currentTime = new Date();
// // достаємо наш день по ІНДЕКСУ, який ми берем з currentTime
// const currentDay = nameOfDay[currentTime.getDay()];
// // цей метод повертає число поточне і беремо його просто з currentTime
// const currentDate = currentTime.getDate();
// const currentMonth = nameOfMonths[currentTime.getMonth()];
// const currentYear = currentTime.getFullYear();

// // підставимо наші значення в наші діви
// day.textContent = currentDay;
// date.textContent = currentDate;
// month.textContent = currentMonth;
// year.textContent = currentYear;
// console.log(currentYear);

// робимо електронний годинник
//  задаємо картинку годинника https://i.ibb.co/dBGxSK1/hiclipart-com-3.png
//  вираховуємо на скільки градусів повинна відхилятися секундна стрілка за один ход : 360 : 60 секунд = на 6 градусів повиина здигатися секундна стрілка
//  все це записуємо в setInterval в змінній changeSeconds