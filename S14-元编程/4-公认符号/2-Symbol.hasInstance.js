const { next, log } = require("../../utils/log");

let uint8 = {
  [Symbol.hasInstance](x) {
    return Number.isInteger(x) && x >= 0 && x <= 255;
  },
};
log(128 instanceof uint8); // => true
log(256 instanceof uint8); // => false
log(Math.PI instanceof uint8); // => false
