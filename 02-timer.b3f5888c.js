const e={startBtn:document.querySelector("button[data-start]"),datePicker:document.querySelector("#datetime-picker"),daysValue:document.querySelector("span[data-days]"),hoursValue:document.querySelector("span[data-hours]"),minsValue:document.querySelector("span[data-minutes]"),secsValue:document.querySelector("span[data-seconds]")},t=(chooseDate(),{intervalId:null,isActive:!1,start(){isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{Date.now();console.log(`${days}:${hours}:${mins}:${secs}`)}),1e3))},stop(){clearInterval(this.intervalId)}});e.startBtn.addEventListener("click",(()=>{t.start()})),e.stopBtn.addEventListener("click",(()=>{t.stop()}));
//# sourceMappingURL=02-timer.b3f5888c.js.map
