//1 Мікропроцеси мають більший пріоритет ніж макро

// Мікропроцеси: 
// 1 Проміс -Promise
// 2 Observer

// Макро процеси
// 1 setTimeout
// 2 setInterval
// 3 setImmediate
// 4 requestAnimationFrame
// Приклади, в якій черзі вони виконуються в браузері 

// console.log('1');

// setTimeout(() => console.log('2'), 10)

// Promise.resolve('3').then(value => console.log(value))
// Promise.reject('4').then(value => console.log(value)).catch(error => console.log(error))
// Promise.resolve('5').then(value => console.log(value))
// setTimeout(() => console.log('6'), 5)
// setTimeout(() => {
//     console.log('7');
//     Promise.resolve('8').then(value => console.log(value))
// }, 0)
// console.log('9');

//2 ПРИКЛАД як записати проміси і в якій послідовності вони працюють

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         const value = Math.random()

//         if(value > 0.5){
//         res('YEEEES')
//         }else{
//         rej('NOOOOO')
//         }
//     }, 3000); 
// });

// console.log(promise)
// // console.log(promise) -показую тільки, що об'єкт в стані pending

// // щоб отримати якісь занні, застосовуємо методи promise.then(), promise.catch(), promise.finally()
// // .then може приймати 2 колбек функції: 1-ша для успішного вконання, 2-га для неуспішного, але другу не принято опрацьовувати тут, бо її треба опрацьовувати в .catch()
// promise
// .then(value=>{
//     return value + 'ADD'
// })
// // якщо потрібно передати щось з першого зен у другий
// .then(value =>{console.log(value)})
// .catch(error=>{console.log(error)})
// .finally(()=>{console.log('after')})


// 3 Приклад з fetch -запит на бекенд

// const promise = fetch('https://pokeapi.co/api/v2/pokemon/2')

// console.log(promise)

// promise
// .then(resp =>resp.json())
// // обробляємо отримані дані в наступному зені
// .then(data =>{console.log(data)})
// .catch(error =>{console.log(error)})


