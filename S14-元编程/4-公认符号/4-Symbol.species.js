const { next, log } = require("../../utils/log");

class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}
let e = new EZArray(1, 2, 3);
let f = e.map((x) => x * x);
log(e.last); // => 3
log(f.last); // => 9
next();