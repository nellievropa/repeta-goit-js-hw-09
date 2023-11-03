import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  createPromiseBtn: document.querySelector('button[type="submit"]'),
  firstDelayField: document.querySelector('.js-delay'),
  delayStepField: document.querySelector('.js-step'),
  amountField: document.querySelector('.js-number'),
}


let position = 0;
let delay = 0;

refs.createPromiseBtn.addEventListener('click', run)

function run(){
  console.log(refs.amountField.value)
}



// function run (amount) {
  const promises = new Promise((resolve, reject) => {
      const currentAmount = refs.amountField.value;
      const firstDelay = refs.firstDelayField.value;
      // const step = refs.delayStepField.textContent;

      // Promise.resolve('3').then(value => console.log(value))
      // console.log(currentAmount)
      // console.log(firstDelay)
      // console.log(step)
  
      setTimeout(() => {
          // повертаємо об'єкт зі значеннями наприклад {"horse": "Mango","time": 2329 }
          resolve({firstDelay, currentAmount})
          // Promise.resolve('firstDelay').then(value => console.log(value))
          
      }, firstDelay);
  
  });
  
  // };
// const promises = horses.map(run)
promises.then(value => {console.log(value)});




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });