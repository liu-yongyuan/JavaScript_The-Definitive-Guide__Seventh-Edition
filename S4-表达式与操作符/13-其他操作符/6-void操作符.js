let counter = 0;
const increment = () => void counter++;
console.log(increment()); // => undefined
console.log(counter); // => 1

const x1 = () => ++counter;
console.log(x1()); // => 2

const x2 = () => counter++;
console.log(x2()); // => 2
console.log(counter); // =>3
