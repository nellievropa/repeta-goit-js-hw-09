!function(){var o=function(o){return fetch("https://pokeapi.co/api/v2/pokemon/".concat(o)).then((function(o){return o.json()}))};function n(o){console.log("onFetchSuccess -> onFetchSuccess"),console.log(o)}function c(o){console.log("onFetchError -> onFetchError"),console.log("єто в блоке catch"),console.log(o)}o(3).then(n).catch(c),o(7).then(n).catch(c),o(1e3).then(n).catch(c);new Promise((function(o,n){var c=Math.random()>.5;setTimeout((function(){c&&o("Куку це RESOLVE"),n("Все пропало!!! бо це reject")}))}),1e3).then((function(o){return console.log(o)})).catch((function(o){return console.log(o)}))}();
//# sourceMappingURL=10-exeample.def1ffac.js.map