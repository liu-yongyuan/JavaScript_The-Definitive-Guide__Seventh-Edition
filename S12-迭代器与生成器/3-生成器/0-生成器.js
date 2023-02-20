const { next, log } = require("../../utils/log");

function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}
let primes = oneDigitPrimes();
log(primes.next().value); // => 2
log(primes.next().value); // => 3
log(primes.next().value); // => 5
log(primes.next().value); // => 7
log(primes.next().done); // => true
next();

log(primes[Symbol.iterator]()); // => Object [Generator] {}
next();

log([...oneDigitPrimes()]); // => [ 2, 3, 5, 7 ]
next();

let sum = 0;
for (let primes of oneDigitPrimes()) sum += primes;
log(sum); // => 17
next();

const seq = function* (from, to) {
  for (let i = from; i <= to; i++) yield i;
};
log([...seq(3, 5)]); // => [ 3, 4, 5 ]
next();

let o = {
  x: 1,
  y: 2,
  z: 3,
  *g() {
    for (let key of Object.keys(this)) {
      yield key;
    }
  },
};
log([...o.g()]); // => [ 'x', 'y', 'z', 'g' ]
next();
