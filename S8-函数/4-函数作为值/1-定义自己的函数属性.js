uniqueInteger.counter = 0;

function uniqueInteger() {
  return uniqueInteger.counter++;
}

console.log(uniqueInteger()); // => 0
console.log(uniqueInteger()); // => 1
console.log("\n====== XXX ======\n");

/**
 * 函数使用了自身的属性来缓存之前计算的结果
 * 函数将自身作为一个数组
 * @param {*} n 
 * @returns 
 */
function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    if (!(n in factorial)) {
      factorial[n] = n * factorial(n - 1);
    }
    return factorial[n];
  } else {
    return NaN;
  }
}

console.log(factorial[1] = 1); // => 1
console.log(factorial(6)); // => 720
console.log(factorial[5]); // => 120
