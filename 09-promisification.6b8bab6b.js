const o=o=>{fetch(`https://pokeapi.co/api/v2/pokemon/${o}`).then((o=>o.json())).then((o=>{console.log(o)})).catch((o=>{console.log("єто в блоке catch"),console.log(o)}))};o(1),o(3);
//# sourceMappingURL=09-promisification.6b8bab6b.js.map
