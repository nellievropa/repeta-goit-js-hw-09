
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
const nameOfMonths = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень','Серпень', 'Вересень', 'Жовтень', 'Листопад','Грудень'];
const nameOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];



const currentTime = new Date();
// достаємо наш день по ІНДЕКСУ, який ми берем з currentTime
currentDay = nameOfDay[currentTime.getDay()];
// цей метод повертає число поточне і беремо його просто з currentTime
currentDate = currentTime.getDate();
currentMonth = nameOfMonths[currentTime.getMonth()];
currentYear = currentTime.getFullYear();

// підставимо наші значення в наші діви
day.textContent = currentDay;
date.textContent = currentDate;
month.textContent = currentMonth;
year.textContent = currentYear;
console.log(currentYear );