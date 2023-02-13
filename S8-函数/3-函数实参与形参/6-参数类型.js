function sum(a) {
  let total = 0;
  for (let element of a) {
    if (typeof element !== "number") {
      throw new TypeError("sum(): element must be numbers");
    }
    total += element;
  }
  return total;
}
console.log(sum([1, 2, 3])); // => 6
try {
  sum(1, 2, 3); // => a is not iterable
} catch (e) {
  console.error(e.message);
}

try {
  sum([1, 2, "3"]); // => sum(): element must be numbers
} catch (e) {
  console.error(e.message);
}
