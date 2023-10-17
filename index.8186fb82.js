const i={notification:document.querySelector(".js-alert")};let t=null;function e(){i.notification.classList.remove("is-visible")}i.notification.addEventListener("click",(function(){e(),clearTimeout(t)})),i.notification.classList.add("is-visible"),t=setTimeout((()=>{console.log("Закриваємо алерт, щоб не висів!"),e()}),3e3);
//# sourceMappingURL=index.8186fb82.js.map
