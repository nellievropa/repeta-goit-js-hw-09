// ЖИВИЙ ПРИКЛАД
// запрос на сервіс- це асинхронна операція- вона поверне чи код чи помилку
// тому використовуємо fetch() -который возвращает нам готовый Промис
// function fetch (url) {
//     return new Promise (...)
// }
// https://pokeapi.co

const fetchPokemonById = id => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(r => r.json())
// .then(pokemon => {
//     onSuccess(pokemon);
// })
// .catch(error => {
//     console.log('єто в блоке catch');
//     onError(error);
// });

};

// fetchPokemonById(1);
// fetchPokemonById(3);
// fetchPokemonById(2);
// fetchPokemonById(1, onFetchSuccess, onFetchError)
// нужно чтобы было от так для вызова функции во внешнем коде
fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError) 
// поетому в const  добавляем return і убираем (onSuccess, onError)
fetchPokemonById(7).then(onFetchSuccess).catch(onFetchError) 
fetchPokemonById(1000).then(onFetchSuccess).catch(onFetchError)
// fetchPokemonById(90000).then(onFetchSuccess).catch(onFetchError)

// разделяем обязанности по отдельным маленьким функцыям Single Responsibility Principe
function onFetchSuccess(pokemon) {
    console.log('onFetchSuccess -> onFetchSuccess');
    console.log(pokemon);
}

function onFetchError(error) {
    console.log('onFetchError -> onFetchError');
    console.log('єто в блоке catch');
    console.log(error);
}


// новій Промис -пример!
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;

        setTimeout(() => {
            if(passed) {
                resolve('Куку це RESOLVE');
            }
                reject('Все пропало!!! бо це reject')    
                })  
        }, 1000);

};
// НЕ ЗАБІВАЕМ про return 

makePromise()
.then(result => console.log(result))
.catch(error => console.log(error));

