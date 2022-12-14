/**
 * for/of 和 for 循环是完全不同的两种循环
 *
 * for/of 循环专门用于可迭代对象.
 * 数组,字符串,集合和映射都是可迭代的
 *
 */

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum = 0;
for (const element of data) {
  sum += element;
}
console.log(sum); // => 45
console.log("\n====== XXX ======\n");

/**
 * 数组迭代是实时的,即迭代过程中的变化可能会影响迭代的输出.
 * 如果修改前面的代码, 在循环内添加一行 data.push(sum);,
 * 则会创建一个无穷循环. 因为迭代永远不会触及数组的最后一个元素
 */
let data1 = data.slice();
let sum1 = 0;
for (const element of data1) {
  sum1 += element;
  data1.push(sum1);

  if (sum1 > 1000) {
    break;
  }
}
console.log(sum1, data1); // =>
/* 1110 [
  1,   2,   3,   4,   5,   6,   7,
  8,   9,   1,   3,   6,  10,  15,
 21,  28,  36,  45,  46,  49,  55,
 65,  80, 101, 129, 165, 210, 256,
305, 360, 425, 505, 606, 735, 900,
1110
]
 */
console.log("\n====== XXX ======\n");

let o = { x: 1, y: 2, z: 3 };
try {
  for (let element of o) {
    console.log(element);
  }
} catch (e) {
  console.error(e); // => TypeError: o is not iterable
}
console.log("\n====== XXX ======\n");

let keys = "";
for (let k of Object.keys(o)) {
  keys += k;
}
console.log(keys); // => xyz
console.log("\n====== XXX ======\n");

let sum2 = 0;
for (let v of Object.values(o)) {
  sum2 += v;
}
console.log(sum2); // => 6

let pairs = "";
for (let [k, v] of Object.entries(o)) {
  pairs += k + v;
}
console.log(pairs); // => x1y2z3
console.log("\n====== XXX ======\n");

/**
 * for/of 与字符串
 */
let frequency = {};
for (let letter of "mississippi") {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}
console.log(frequency); // => { m: 1, i: 4, s: 4, p: 2 }
console.log("\n====== XXX ======\n");


/**
 * for/of 与 Set 和 Map
 */
let text = "Na na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet){
  unique.push(word)
};
console.log(unique); // => [ 'Na', 'na', 'Batman!' ]

let m = new Map([[1, "one"]]);
for(let [key, value] of m){
  console.log(`${key} : ${value}`); // => 1 : one
}
console.log("\n====== XXX ======\n");

async function printSteam(stream){
  for await (let chunk of stream){
    console.log(chunk)
  }
}

console.log("\n====== XXX ======\n");