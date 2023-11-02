import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  createPromiseBtn: document.querySelector('button[type="submit"]'),
  firstDelayField: document.querySelector('input[name="delay"]'),
  delayStepField: document.querySelector('iput[name="step"]'),
  amountField: document.querySelector('input[name="amount"]'),
}

let position = 0;
let delay = 0;

refs.createPromiseBtn.addEventListener('click', run)

function run (amount) {
  return new Promise((resolve, reject) => {
      const currentAmount = refs.amountField.value;
      const firstDelay = refs.firstDelayField.value;
      const step = refs.delayStepField.value;
      console.log(currentAmount)
      console.log(firstDelay)
      console.log(step)
  
      // setTimeout(() => {
      //     // повертаємо об'єкт зі значеннями наприклад {"horse": "Mango","time": 2329 }
      //     resolve({firstDelay, step, amount})
      // }, firstDelay);
  
  });
  
  };





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