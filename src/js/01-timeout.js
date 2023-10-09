// import '../common.css';

// метод window.setTimeout{callback, delat, arg}

const logMessage = () => {
    console.log('Лог при визові caalback-функції через 3 секунди');
};

console.log('До визову setTimeout');
setTimeout(() => {
    console.log(`Внутри caalback-функції для setTimeout`)
}, 2000);

console.log('Після визову setTimeout');

for (let index = 0; index < 10000; index++) {
    console.log(index);
}