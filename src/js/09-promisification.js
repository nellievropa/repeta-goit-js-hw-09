

// const makeOrder = dish => {
//     const DELAY = 1000;
//     // пошук блюда займає якийсь час тому використовуємо іуеЕшьущге і DELAY


// return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
    
//     setTimeout(() =>{
// if (passed) {
//     resolve(`Ось наше блюдо: ${dish}`)
// } else {
//     reject('Вибачте, продукти скінчилися')
// }
//     }, DELAY);
// })
// };
// // щоб проміс можна було використовувати в зовнішньому коді, пишемо return
// return promise;
// і заминяємо їм const щоб код став чистіше
// зовсім коротко можна записати
// return Promise.resolve(`Ось наше блюдо: ${dish}`) - і вона буде працювати

// без промісів дістати данні з асинхронного коду не можливо!!!
// можливо, але важко з колбек функціями
// связанность кода- це коли одна функція знає про багато інших у зовнішньому коді- тобто вона зв'язана з ними дуже тісно- це пагано
// const p = makeOrder('пиріжок');
// console.log(p);
// p також зайва змінна, тому прибираємо її нижче
// makeOrder('пиріжок').then(x => console.log('x'))
// і тепер до р ми можемо додати .then i .catch
// після того, як ми прибрали зайву const р, звертаємось одразу до функції
// makeOrder('пиріжок').then(onMakeOrderSuccess).catch(onMakeOrderError).finally(console.log('I got it!'))

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);

// }

// function onMakeOrderError(error) {
// console.log('onMakeOrderError');
// console.log(error);
// }

// ЖИВИЙ ПРИКЛАД
// запрос на сервіс- це асинхронна операція- вона поверне чи код чи помилку
// тому використовуємо fetch()
// https://pokeapi.co


const fetchPokemonById = id => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(r => r.json())
.then(pokemon => {
    console.log(pokemon);
})
.catch(error => {
    console.log('єто в блоке catch');
    console.log(error);
});

};

fetchPokemonById(1);
fetchPokemonById(3);