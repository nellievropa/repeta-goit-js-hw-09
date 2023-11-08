
const start = document.querySelector('.js-start');
const container = document.querySelector('.js-container');

start.addEventListener('click', onStart);

function onStart(){
    // створюємо масив, щоб перевірити на виграшний результата
    const result = [];
    // очищуємо кожен бокс після кожної гри 
    [...container.children].forEach((box) => box.textContent = '');
    // розпилюэмо псевдомасив children, перебираємо його ForEach. на кожній ітерації отримаємо box
    [...container.children].forEach((box, i)=> {
        createPromise(i)
        .then((smile)=> {
            box.textContent = smile;
            result.push('1');
        })
        .catch((smile) => (box.textContent = smile))
        .finally(() => {
setTimeout(() => {
    if (i === container.children.length - 1) {
        if(!result.length || result.length === 3) {
            alert('Winner!')
        }else{
            alert('Lost money!')
        }
    }
}, 1000)
        })
    })
    // в цьому випадку з'являються всі зразу
    
    // console.dir(container);
}
// а ми хочемо, щоб по черзі через секунду і різні
// створюємо цю функцію, щоб описати тут всі її властивості!!!

function createPromise(delay) {
return new Promise ((res, rej) =>{
const random = Math.random();
// const first = Math.floor(Math.random()*10);
// const arr = ['✅','❌','😀' ]
setTimeout(() => {
    if(random > 0.7) {
        res('😊')
    }else {
        rej('🤑')
    }
}, 1000 * delay)


});
}