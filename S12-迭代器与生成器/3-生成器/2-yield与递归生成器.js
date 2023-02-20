const { next, log } = require("../../utils/log");

function* sequence(...iterables) {
  for (let iterable of iterables) {
    for (let item of iterable) {
      yield item;
    }
  }
}
log([...sequence("abc", [0, 2, 5])]); // => [ 'a', 'b', 'c', 0, 2, 5 ]
next();

function* sequence1(...iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}
log([...sequence1("abc", [0, 2, 5])]); // => [ 'a', 'b', 'c', 0, 2, 5 ]
next();

