function not(f) {
  return function (...args) {
    let result = f.apply(this, args);
    return !result;
  };
}
const event = (x) => x % 2 === 0;
const odd = not(event);
console.log([1, 1, 3, 5, 5].every(odd)); // => true
console.log("\n====== XXX ======\n");

function compose(f, g) {
  return function (...args) {
    return f.call(this, g.apply(this, args));
  };
}

const sum = (x, y) => x + y;
const square = (x) => x * x;
console.log(compose(square, sum)(2, 3)); // => 25
