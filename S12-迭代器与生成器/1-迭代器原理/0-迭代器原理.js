const { next, log } = require("../../utils/log");

let iterable = [99, 100, 200];
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  log(result.value); /* =>99
  100
  200 */
}
next();

let list = [1, 2, 3, 4, 5];
let iter = list[Symbol.iterator]();
let head = iter.next().value;
log(head); // => 1
let tail = [...iter];
log(tail); // => [ 2, 3, 4, 5 ]
