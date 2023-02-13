function max(x) {
  let maxValue = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i];
  }
  return maxValue;
}
console.log(max(1, 10, 20, 30, 1000, 2, 5, 180)); // => 1000
