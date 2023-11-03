
const start = document.querySelector('.js-start');
const container = document.querySelector('.js-container');

start.addEventListener('click', onStart);

function onStart(){
    // розпилюэмо псевдомасив children, перебираємо його ForEach. на кожній ітерації отримаємо box
    [...container.children].forEach((box, i)=> {
        createPromise(i)
        .then((smile)=> {
            box.textContent = smile;
        })
        .catch((smile) => (box.textContent = smile))
    })
    // в цьому випадку з'являються всі зразу
    
    // console.dir(container);
}
// а ми хочемо, щоб по черзі через секунду і різні

function createPromise(delay) {
return new Promise ((res, rej) =>{
const random = Math.random();

setTimeout(() => {
    if(random > 0.7) {
        res('G')
    }else {
        rej('F')
    }
}, 1000 * delay)


});
}