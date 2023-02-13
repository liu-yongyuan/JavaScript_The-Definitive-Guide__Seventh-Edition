// 一个新的, 空集合
let s = new Set();
// 有两个成员的新集合
let t = new Set([1, s]);

// 可迭代对象
let t1 = new Set(t);
console.log(t1); // => Set(2) { 1, Set(0) {} }
let unique = new Set("Mississippi");
console.log(unique); // => Set(4) { 'M', 'i', 's', 'p' }
console.log("\n====== XXX ======\n");

let s1 = new Set();
console.log(s1.size); // => 0
console.log(s1.add(1)); // => Set(1) { 1 }
console.log(s1.size); // => 1
console.log(s1.add(2)); // => Set(2) { 1, 2 }
console.log(s1.size); // => 2
console.log(s1.add(true)); // => Set(3) { 1, 2, true }
console.log(s1.size); // => 3
console.log(s1.add([1, 2, 3])); // => Set(4) { 1, 2, true, [ 1, 2, 3 ] }
console.log(s1.size); // => 4
console.log(s1.delete(1)); // => true
console.log(s1.size); // => 3
console.log(s1.delete("test")); // => false
console.log(s1.delete(true)); // => true
console.log(s1.delete([1, 2, 3])); // => false
console.log(s1.size); // => 2
console.log(s1.clear()); // => undefined
console.log(s1.size); // => 0

s1.add(1).add(2).add([2, 2, 3, 3]); // => add 返回自身
console.log(s1); // => Set(3) { 1, 2, [ 2, 2, 3, 3 ] }
console.log("\n====== XXX ======\n");

/* 实践中, 使用集合时最重要的不是添加和删除元素, 而是检查某个值不是集合的成员
无论集合有多少成员, has() 方法都非常快. 数组的 includes() 方法速度与数组大小成反比
使用数组作为集合比使用真正的 Set 对象要慢得多
 */
let oneDigitPrimes = new Set([2, 3, 5, 7]);
console.log(oneDigitPrimes.has(2)); // => true
console.log(oneDigitPrimes.has(3)); // => true
console.log(oneDigitPrimes.has(4)); // => false
console.log(oneDigitPrimes.has("5")); // => false
console.log("\n====== XXX ======\n");

let sum = 0;
for (let p of oneDigitPrimes) {
  sum += p;
}
console.log(sum); // => 17
console.log("\n====== XXX ======\n");

console.log([...oneDigitPrimes]); // => [ 2, 3, 5, 7 ]
console.log(Math.max(...oneDigitPrimes)); // => 7

console.log("\n====== XXX ======\n");

let product = 1;
oneDigitPrimes.forEach((n) => {
  product *= n;
});
console.log(product); // => 210;
