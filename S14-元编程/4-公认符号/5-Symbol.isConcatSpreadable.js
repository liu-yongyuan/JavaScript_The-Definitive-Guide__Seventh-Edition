const { next, log } = require("../../utils/log");

let arralike = {
  length: 1,
  0: 1,
  [Symbol.isConcatSpreadable]: true,
};
log([].concat(arralike)); // => [1]
next();

class NonSpreadableArray extends Array {
  get [Symbol.isConcatSpreadable]() {
    return false;
  }
}
let a = new NonSpreadableArray(1, 2, 3);
log([].concat(a).length); // => 1
