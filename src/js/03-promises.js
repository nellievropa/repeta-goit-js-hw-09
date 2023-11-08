import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formFild: document.querySelector('.form'),
  createPromiseBtn: document.querySelector('button[type="submit"]'),
  firstDelayField: document.querySelector('.js-delay'),
  delayStepField: document.querySelector('.js-step'),
  amountField: document.querySelector('.js-number'),
}

// console.dir(formFild)

let position = 0;
let delay = 0;
let step = 0;

refs.createPromiseBtn.addEventListener('click', run)



function run(position){
  let i = 0;
  position = refs.amountField.value;
  console.log(position)
for (i = 0; i <= position; i =+ 1) {
createPromise(i)
.then(() => {
  console.log(`✅ Fulfilled promise ${i} in ${delay + step}ms`)
})
.catch(() => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`)
})
}

 console.dir(refs.formFild);
// createPromise()
}


function createPromise(position, delay) {

  position = refs.amountField.value;
  delay = refs.firstDelayField.value;
  step = refs.delayStepField.value;
  return new Promise ((res, rej) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        res(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        rej(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    },delay + step )

    });
  


}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


// function run (amount) {
//   const promises = new Promise((resolve, reject) => {
//       const currentAmount = refs.amountField.value;
//       const firstDelay = refs.firstDelayField.value;
//       // const step = refs.delayStepField.textContent;

//       // Promise.resolve('3').then(value => console.log(value))
//       // console.log(currentAmount)
//       // console.log(firstDelay)
//       // console.log(step)
  
//       setTimeout(() => {
//           // повертаємо об'єкт зі значеннями наприклад {"horse": "Mango","time": 2329 }
//           resolve({firstDelay, currentAmount})
//           // Promise.resolve('firstDelay').then(value => console.log(value))
          
//       }, firstDelay);
  
//   });
  
//   // };
// // const promises = horses.map(run)
// promises.then(value => {console.log(value)});




