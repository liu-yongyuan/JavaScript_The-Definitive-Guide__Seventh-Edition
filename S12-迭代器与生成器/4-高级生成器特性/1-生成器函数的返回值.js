const { next, log } = require("../../utils/log");

function* oneAndDone() {
  yield 1;
  return "done";
}
log(...oneAndDone()); // => 1
next();

let generator = oneAndDone();
log(generator.next()); // => { value: 1, done: false }
log(generator.next()); // => { value: 'done', done: true }
log(generator.next()); // => { value: undefined, done: true }
