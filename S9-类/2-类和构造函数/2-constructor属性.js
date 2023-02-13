let fnc = function () {};
let fnc_p = fnc.prototype;
let fnc_c = fnc_p.constructor;
console.log(fnc_c === fnc); // => true
console.log("\n====== XXX ======\n");