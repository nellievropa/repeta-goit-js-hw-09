

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    datePicker: document.querySelector('#datetime-picker'),
    daysValue: document.querySelector('span[data-days]'),
    hoursValue: document.querySelector('span[data-hours]'),
    minsValue: document.querySelector('span[data-minutes]'),
    secsValue: document.querySelector('span[data-seconds]'),
}

const finalTime = chooseDate();

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if(isActive) {
            return;
        }

        this.isActive = true;

this.intervalId = setInterval(() => {
    const currentTime = Date.now();
    const dateTime = startTime- currentTime;
    // const { days, hours, mins, secs } = getTimeComponents(deltaTime);
    // деструктуризацію змінюємо на змінну time
    // const time = getTimeComponents(deltaTime);
    // і викликаємо функцію updateClockFace
    // updateClockFace(time);
    
    console.log(`${days}:${hours}:${mins}:${secs}`);
}, 1000);
    },
stop() {
    clearInterval(this.intervalId);
},

};

refs.startBtn.addEventListener('click', () => {
    timer.start();
})


refs.stopBtn.addEventListener('click', () => {
    timer.stop();
})



function updateClockFace ({days, hours, mins, secs}) {
    requestAnimationFrame.clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
}

//  для того, щоб зробити числа завжди двозначними (01 або 25) використовуємо метод pad
// ми в нього обернемо наші значення hours, mins, secs
function pad(value) {
    // цей запис означає : візьми число, зроби з нього строку і на старті(ЗЛІВА!!) додай '0'
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time % (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad( Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

            return { days, hours, mins, secs};
}

setInterval(() =>{
    const currentDate = new Date();
    const targetDate = new Date('12/31/2023');
    console.log(convertMs(targetDate - currentDate)) 
}, 1000)

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  