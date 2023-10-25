import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refs = {
   
    startBtn: document.querySelector('button[data-start]'),
    // datePicker: document.querySelector('#datetime-picker'),
    daysValue: document.querySelector('span[data-days]'),
    hoursValue: document.querySelector('span[data-hours]'),
    minsValue: document.querySelector('span[data-minutes]'),
    secsValue: document.querySelector('span[data-seconds]'),
}

const Calendars = flatpickr("input#datetime-picker", 

     options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          console.log(selectedDates[0]);
     
        },
      }
    
);
// // поточна дата
// const currentDate = new Date();
// // дата від якої рахуємо відлік
// const targetDate = Calendars.choosenDate;
// const targetDate = new Date(choosenDate);
// console.log(targetDate);

// console.log(targetDate - currentDate);

const timer = {
    intervalId: null,
    isActive: false,

    start() {

        // const currentDate = Date.now();
        // console.log(currentDate);
        // дата від якої рахуємо відлік

        const targetDate = new Date(Calendars.selectedDates[0]);
console.log(targetDate);
        // const targetDate = new Date(Calendars.selectedDates[0]).getTime();
        
        // console.log(targetDate);
        // console.log(targetDate - currentDate);


  
    const reversDate = new Date(targetDate).getTime();
    console.log(reversDate);

    refs.startBtn.isActive = true;

    intervalId = setInterval(() => {
        const currentDate = new Date().getTime();
//         console.log(currentDate);
// console.log(reversDate - currentDate);

    const deltaTime = reversDate - currentDate;
    console.log(deltaTime);
    // const { days, hours, minutes, seconds } = convertMs(deltaTime);
    // деструктуризацію змінюємо на змінну time
    const time = convertMs(deltaTime);
    console.log(time)
    // і викликаємо функцію updateClockFace
    updateClockFace(time);
    
    // console.log(`${days}:${hours}:${mins}:${secs}`);
}, 1000);
    },
stop() {

    clearInterval(intervalId);
},

};

refs.startBtn.addEventListener('click', () => {
    timer.start();
})


// refs.stopBtn.addEventListener('click', () => {
//     timer.stop();
// })



function updateClockFace ({days, hours, minutes, seconds}) {
    refs.daysValue.textContent = `${days}`;
    refs.hoursValue.textContent = `${hours}`;
    refs.minsValue.textContent = `${minutes}`;
    refs.secsValue.textContent = `${seconds}`;

    // requestAnimationFrame.clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
}

//  для того, щоб зробити числа завжди двозначними (01 або 25) використовуємо метод pad
// ми в нього обернемо наші значення hours, mins, secs
function pad(value) {
    // цей запис означає : візьми число, зроби з нього строку і на старті(ЗЛІВА!!) додай '0'
    return String(value).padStart(2, '0');
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
