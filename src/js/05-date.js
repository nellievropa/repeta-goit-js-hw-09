

// date-fns.org -для роботи з часом, часовими поясами та датами 

// создание времени - вбудований конструктор - це цілий об'єкт!!!
// const date = new Date(60000);
// 1000 мілісекунд з 10.10.1970 00:00 - це буде Thu Jan 01 1970 03:00:01

// console.log(date);
//  у нього є багато методів 
// узнати день - покаже цифру 0- неділя 3- середа, 4 -четвер і тд
// console.log(date.getDay());
// Жовтень буде 9, бо рахуються з 0
// console.log(date.getMonth());

// ЮНІКС ЧАС (время)
// console.log(date.getTime());
//отримаємо кількість мілісекунд, які пройшли з 01.01.1970 року 00:00- оце і є юнікс время

// порахувати різницю в часі

const date1 = new Date();
console.log(date1);
console.log(`hello world`);


setTimeout(() => {
const date2 = new Date().getTime();
console.log(date1);
console.log(date2);

console.log(date2 - date1);

}, 3000);

// щоб не створювати зайві об'єкти використовуємо
// але отримати значення часу як число
// використовуємо статичний метод і отримуємо просто дату як число в мілісекундах

const date3 = Date.now();
console.log('date3',date3);


const a = "0";
const b = a ?? "b";
const c = a || "c";


console.log(b, c);




