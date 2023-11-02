// Мікропроцеси мають більший пріоритет ніж макро

// Мікропроцеси: 
// 1 Проміс -Promise
// 2 Observer

// Макро процеси
// 1 setTimeout
// 2 setInterval
// 3 setImmediate
// 4 requestAnimationFrame

console.log('1');

setTimeout(() => console.log('2'), 10)

Promise.resolve('3').then(value => console.log(value))
Promise.reject('4').then(value => console.log(value)).catch(error => console.log(error))
Promise.resolve('5').then(value => console.log(value))
setTimeout(() => console.log('6'), 5)
setTimeout(() => {
    console.log('7');
    Promise.resolve('8').then(value => console.log(value))
}, 0)
console.log('9');


