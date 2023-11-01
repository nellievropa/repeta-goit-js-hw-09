var o,c;o=function(o){console.log("onFetchSuccess -> onFetchSuccess"),console.log(o)},c=function(o){console.log("onFetchError -> onFetchError"),console.log("єто в блоке catch"),console.log(o)},fetch(`https://pokeapi.co/api/v2/pokemon/${1}`).then((o=>o.json())).then((c=>{o(c)})).catch((o=>{console.log("єто в блоке catch"),c(o)}));
//# sourceMappingURL=09-promisification.27a4237e.js.map
