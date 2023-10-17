!function(){var i={notification:document.querySelector(".js-alert")},t=null;function n(){i.notification.classList.remove("is-visible")}i.notification.addEventListener("click",(function(){n(),clearTimeout(t)})),i.notification.classList.add("is-visible"),t=setTimeout((function(){console.log("Закриваємо алерт, щоб не висів!"),n()}),3e3)}();
//# sourceMappingURL=index.d630caea.js.map
