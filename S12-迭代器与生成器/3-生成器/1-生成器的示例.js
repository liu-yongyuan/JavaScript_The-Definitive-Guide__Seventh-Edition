const { next, log } = require("../../utils/log");

function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}

function fibonacci(n) {
  for (let f of fibonacciSequence()) {
    if (n-- <= 0) return f;
  }
}
log(fibonacci(20)); // => 10946
next();

function* take(n, iterable) {
  let it = iterable[Symbol.iterator]();
  while (n-- > 0) {
    let next = it.next();
    if (next.done) return;
    else yield next.value;
  }
}
log([...take(5, fibonacciSequence())]); // => [ 1, 1, 2, 3, 5 ]
next();

function* zip(...iterables) {
  let iterators = iterables.map((i) => i[Symbol.iterator]());
  let index = 0;
  while (iterators.length > 0) {
    if (index >= iterators.length) {
      index = 0;
    }
    let item = iterators[index].next();
    if (item.done) {
      iterators.splice(index, 1);
    } else {
      yield item.value;
      index++;
    }
  }
}
log([...zip("ab", [2, 3])]); // => [ 'a', 2, 'b', 3 ]
