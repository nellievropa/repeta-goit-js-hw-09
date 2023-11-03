
const start = document.querySelector('.js-start');
const container = document.querySelector('.js-container');

start.addEventListener('click', onStart);

function onStart(){
    // розпилюэмо псевдомасив children, перебираємо його ForEach. на кожній ітерації отримаємо box
    [...container.children].forEach(box => box.textContent = '@')
    // в цьому випадку з'являються всі зразу
    // а ми хочемо, щоб по черзі через секунду і різні
    
    // console.dir(container);
}
