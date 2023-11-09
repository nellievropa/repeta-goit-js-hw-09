import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formFild: document.querySelector('.form'),
  createPromiseBtn: document.querySelector('button[type="submit"]'),
  firstDelayField: document.querySelector('.js-delay'),
  delayStepField: document.querySelector('.js-step'),
  amountField: document.querySelector('.js-number'),
}

let i = 0;
// const promises = [];
// const delay = refs.firstDelayField.value;
// const step = refs.delayStepField.value;

// refs.createPromiseBtn.addEventListener('click', onStart)

refs.formFild.addEventListener('submit', onRun)

function onRun(event) {
  event.preventDefault()
  const delay = refs.firstDelayField.value;
const step = refs.delayStepField.value;
const position = refs.amountField.value;

if (delay <= 0 || step < 0 || position < 0) {
  alert('fill fields!')
}
for (let i = 0; i <= position; i +=1) {
  
  createPromise(i, delay + step * i)
  .then(({position, delay}) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({position, delay}) => {
    console.log(`❌ Rejected promise ${position} in ${delay + step}ms`)
   
  })
  event.currentTarget.reset();
}
}
// function run(){
//   let i = 0;
//  const result = [];
//   position = refs.amountField.value;
//   delay = refs.firstDelayField.value;
//   // step = refs.delayStepField.value;
//   // console.log(position)
//   // console.log(delay)
//   // console.log(step)
//   // console.dir(refs.formFild);
//   // refs.formFild.forEach((delay, position) => {
//   //   createPromise(position)
//   //   .then((prom) => {
//   //     console.log(`✅ Fulfilled promise ${position} in ${delay + step}ms`)
//   //   })
//   //   .catch((prom) => {
//   //     console.log(`❌ Rejected promise ${position} in ${delay + step}ms`)
//   //   })
//   // })
// for (i = 0; i <= position; i =+ 1) {
//   createPromise(position, delay )
//   .then(({ position, delay }) => {
//     prom.position = position;
//     prom.delay = delay + step;
//     result.push()

//   })
//   .catch(({ position, delay }) => {
//     prom.position = position;
//     prom.delay = delay + step;
//     result.push()
//   })
//   .finally(() => {

//   })
// }
// }

// function onStart() {
//   const position = refs.amountField.value;
 
//   for (i = 0; i <= position; i =+ 1){

//     // promises = promises.push(createPromise(i))
//     const promises = promises.push(promise)
//     .then(({position, delay, step}) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay + step}ms`)
//     })
//     .catch(({position, delay, step}) => {
//       console.log(`❌ Rejected promise ${position} in ${delay + step}ms`);
//     })
//   }
// }

// console.log(promises)

function createPromise(position, delay) {
  return new Promise ((res, rej) => {
    const shouldResolve = Math.random() > 0.3;

setTimeout(() => {
  if (shouldResolve) {
    res({position, delay});
  } else {
    rej({position, delay});
  }
}, delay)
  });

}

// function createPromise(position, delay) {
//   const position = refs.amountField.value;
//   const delay = refs.firstDelayField.value;
//   const step = refs.delayStepField.textContent;
//   // step = refs.delayStepField.value;
//   return new Promise ((res, rej) => {
//     const shouldResolve = Math.random() > 0.3;

// // console.log(step)
//     setTimeout(() => {
//       if (shouldResolve) {
//         res(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
//       } else {
//         rej(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
//       }
//     }, delay + step )

//     });
// }





// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


// function run () {}

//   const promise = new Promise((resolve, reject) => {
//       const position= refs.amountField.value;
//       const delay = refs.firstDelayField.value;
//       const step = refs.delayStepField.textContent;

//       // Promise.resolve('3').then(value => console.log(value))
//       // console.log(currentAmount)
//       // console.log(firstDelay)
//       // console.log(step)
  
//       setTimeout(() => {
//           // повертаємо об'єкт зі значеннями наприклад {"horse": "Mango","time": 2329 }
//           resolve({delay, position, step})
//           // Promise.resolve('firstDelay').then(value => console.log(value))
          
//       }, delay);
  
//   });
//   console.log(promise)



// // const promises = horses.map(run)
// promises.then(value => {console.log(value)});




