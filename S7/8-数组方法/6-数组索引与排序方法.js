/* indexOf 和 lastIndexOf()
indexOf 从头到尾, 搜索不到返回 -1
lastIndexOf 从尾到头, 搜索不到返回 -1
 */
let a = [0, 1, 2, 1, 0];
console.log(a.indexOf(1)); // => 1
console.log(a.lastIndexOf(1)); // => 3
console.log(a.indexOf(3)); // => -1
console.log("\n====== XXX ======\n");

function findall(a, x) {
  let results = [],
    len = a.length,
    pos = 0;
  while (pos < len) {
    pos = a.indexOf(x, pos);
    if (pos === -1) break;
    results.push(pos);
    pos = pos + 1;
  }
  return results;
}
console.log(findall(a, 1)); // => [1,3]
console.log("\n====== XXX ======\n");

/* includes()
ES2016 includes() 接收一个参数, 数组包含该值则返回 true
否则返回 false
 */
let a1 = [1, true, 3, NaN];
console.log(a1.includes(true)); // => true
console.log(a1.includes(2)); // => false
console.log(a1.includes(NaN)); // => true
console.log(a1.indexOf(NaN)); // => -1
console.log("\n====== XXX ======\n");

/* sort() */
let a2 = ["banana", "cherry", "apple"];
a2.sort();
console.log(a2); // => [ 'apple', 'banana', 'cherry' ]
console.log("\n====== XXX ======\n");

let a3 = [33, 4, 1111, 222];
a3.sort();
console.log(a3); // => [ 1111, 222, 33, 4 ]
a3.sort(function (a, b) {
  return a - b;
});
console.log(a3); // => [ 4, 33, 222, 1111 ]
a3.sort((a, b) => b - a);
console.log(a3); // => [ 1111, 222, 33, 4 ]
console.log("\n====== XXX ======\n");

let a4 = ["ant", "Bug", "cat", "Dog"];
a4.sort();
console.log(a4); // => [ 'Bug', 'Dog', 'ant', 'cat' ]
a4.sort(function (s, t) {
  let a = s.toLowerCase();
  let b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
console.log(a4); // => [ 'ant', 'Bug', 'cat', 'Dog' ]
console.log("\n====== XXX ======\n");

/* reverse() */
let a5 = [1, 2, 3];
a5.reverse();
console.log(a5); // =>[ 3, 2, 1 ]
