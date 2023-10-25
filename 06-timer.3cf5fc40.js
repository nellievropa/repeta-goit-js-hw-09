!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&o(t.prototype,e);n&&o(t,n);return t};var i={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockface:document.querySelector(".js-clockface"),reversStartBtn:document.querySelector("button[data-action-revers-start]"),reversStopBtn:document.querySelector("button[data-action-revers-stop]"),reversClockface:document.querySelector(".js-revers-clockface")},r=new(function(){"use strict";function o(n){var i=n.onTick;t(e)(this,o),this.intervalId=null,this.isActive=!1,this.onTick=i,this.init()}return t(n)(o,[{key:"init",value:function(){var t=this.getTimeComponents(0);this.onTick(t)}},{key:"start",value:function(){var t=this;if(!this.isActive){var e=Date.now();this.isActive=!0,this.intervalId=setInterval((function(){var n=Date.now()-e,o=t.getTimeComponents(n);t.onTick(o)}),1e3)}}},{key:"stop",value:function(){clearInterval(this.intervalId),this.isActive=!1;var t=this.getTimeComponents(0);this.onTick(t)}},{key:"getTimeComponents",value:function(t){return{hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}},{key:"pad",value:function(t){return String(t).padStart(2,"0")}}]),o}())({onTick:function(t){var e=t.hours,n=t.mins,o=t.secs;i.clockface.textContent="".concat(e,":").concat(n,":").concat(o)}});i.startBtn.addEventListener("click",r.start.bind(r)),i.stopBtn.addEventListener("click",r.stop.bind(r));var a=new Date,c=new Date("12/31/2023");console.log(a),console.log(c),console.log(c-a),setInterval((function(){var t,e,n,o,i,r,a,c,s,u=new Date,l=new Date("12/31/2023");console.log((t=l-u,i=24*(o=60*(n=60*(e=1e3))),r=Math.floor(t/i),a=Math.floor(t%i/o),c=Math.floor(t%i%o/n),s=Math.floor(t%i%o%n/e),{days:r,hours:a,minutes:c,seconds:s}))}),1e3);var s=new(function(){"use strict";function o(n){var i=n.onTick;t(e)(this,o),this.intervalId=null,this.isActive=!1,this.onTick=i,this.init()}return t(n)(o,[{key:"init",value:function(){var t=this.convertMs(0);this.onTick(t)}},{key:"start1",value:function(){var t=this;if(!this.isActive){var e=new Date("10/26/2023");this.isActive=!0,this.intervalId=setInterval((function(){var n=Date.now(),o=e-n,i=t.convertMs(o);t.onTick(i)}),1e3)}}},{key:"stop1",value:function(){clearInterval(this.intervalId),this.isActive=!1}},{key:"convertMs",value:function(t){var e=6e4,n=36e5,o=24*n;return{days:Math.floor(t/o),hours:Math.floor(t%o/n),minutes:Math.floor(t%o%n/e),seconds:Math.floor(t%o%n%e/1e3)}}}]),o}())({onTick:function(t){var e=t.days,n=t.hours,o=t.minutes,r=t.seconds;i.reversClockface.textContent="".concat(e,":").concat(n,":").concat(o,":").concat(r)}});i.reversStartBtn.addEventListener("click",s.start1.bind(s)),i.reversStopBtn.addEventListener("click",s.stop1.bind(s))}();
//# sourceMappingURL=06-timer.3cf5fc40.js.map
