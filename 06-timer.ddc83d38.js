!function(){var t={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockface:document.querySelector(".js-clockface")},n={intervalId:null,isActive:!1,start:function(){var t=Date.now();this.intervalId=setInterval((function(){var n=function(t){var n=e(Math.floor(t%864e5/36e5)),o=e(Math.floor(t%36e5/6e4)),c=e(Math.floor(t%6e4/1e3));return{hours:n,mins:o,secs:c}}(Date.now()-t),o=n.hours,c=n.mins,a=n.secs;console.log("".concat(o,":").concat(c,":").concat(a))}),1e3)},stop:function(){clearInterval(this.intervalId)}};function e(t){return String(t).padStart(2,"0")}t.startBtn.addEventListener("click",(function(){n.start()})),t.stopBtn.addEventListener("click",(function(){n.stop()}))}();
//# sourceMappingURL=06-timer.ddc83d38.js.map