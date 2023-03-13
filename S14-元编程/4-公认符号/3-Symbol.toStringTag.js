const { next, log } = require("../../utils/log");

log({}.toString());
next();

log(Object.prototype.toString.call([])); // => [object Array]
log(Object.prototype.toString.call(/./)); // => [object RegExp]
log(Object.prototype.toString.call(() => {})); // =>[object Function]
log(Object.prototype.toString.call("")); // => [object String]
log(Object.prototype.toString.call(0)); // => [object Number]
log(Object.prototype.toString.call(false)); // => [object Boolean]
next();

function classof(o) {
  return Object.prototype.toString.call(o).slice(8, -1);
}
log(classof(null));
log(classof(undefined));
log(classof(1));
log(classof(10n ** 100n));
log(classof(""));
log(classof(false));
log(classof(Symbol()));
log(classof({}));
log(classof([]));
log(classof(/./));
log(classof(() => {}));
log(classof(new Map()));
log(classof(new Set()));
log(classof(new Date()));
/* =>
Null
Undefined
Number
BigInt
String
Boolean
Symbol
Object
Array
RegExp
Function
Map
Set
Date */
next();

class Range {
  get [Symbol.toStringTag]() {
    return "Range";
  }
}
let r = new Range(1, 10);
log(Object.prototype.toString.call(r)); // => [object Range]
log(classof(r)); // => Range
