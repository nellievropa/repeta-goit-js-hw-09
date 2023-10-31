

// створити проміс (як аргумент приймає кол-бек функцію)

const promise = new Promise((resolve, reject) => {
    const canFullfill = Math.random() > 0.5;

setTimeout(() => {
    if(canFullfill) {
        resolve('Promise was made with FULLFILL')
    }
    reject ('Promise was made with result REJECTED')

}, 2000);

});
// console.log(promise)

// method THEN(() => {})

// promise.then(result => {
//     console.log(result);
// },
// error => {
//     console.log(error);
// });

// можна записати по-іншому
// promise.then(onFulfilled, onRejected);

function onFulfilled (result) {
    console.log(result);
}

function onRejected (error) {
    console.log(error);
}

// Цепочки промісів (chaining)
// .then це виклик функції з положительним результатом
promise.then(result => {
    console.log(result);
    // цей ретерн побачить наступний then
    // якщо нічого не передати, то повернеться underfinded
    return 5;
    // можна повернути result
    // return result;
})
.then(x => {
    console.log(x);
    return 2335522;
})
.then(y => {
    console.log(y)
    // викинути помилку 
    throw new Error ('це помилка в другому then')
}).catch(error => console.log(error))
.finally(() => {console.log('Я буду виконаний ЗАВЖДИ (в любому випадку)')})
// після всіх then ставимо .catch(error щоб зловити помилку
// щоб опрацювати помилку використовуємо метод .catch
// щоб підчистити результати попередніх функцій використовуємо метод .finally()
// наприклад : щоб зняти іконку, що крутиться поки очікується результата
// але зняти її потрібно і коли + і коли -(помилка) - в обох випадках


