const t=document.querySelector("button");function n(){setInterval((()=>{console.log("Змінюємо колір!"),document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)}t.addEventListener("data-start",n),t.addEventListener("data-stop",(function(){})),n();
//# sourceMappingURL=01-color-switcher.ed97d9ed.js.map
