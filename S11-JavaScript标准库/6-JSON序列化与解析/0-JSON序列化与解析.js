const { next, log } = require("../../utils/log");

let o = { s: "", n: 0, a: [true, false, null] };
let s = JSON.stringify(o);
let copy = JSON.parse(s);

log(s); // => {"s":"","n":0,"a":[true,false,null]}
log(copy); // => { s: '', n: 0, a: [ true, false, null ] }
log(copy === o); // => false
