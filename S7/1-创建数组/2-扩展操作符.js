/* ES6 版本之后, 可以使用扩展操作符 ... 
在一个数组字面量中包含另一个数组的元素 */
let a = [1, 2, 3];
let b = [0, ...a, 4]; // => [ 0, 1, 2, 3, 4 ]
console.log(b);
console.log("\n====== XXX ======\n");

/* 扩展操作符是创建数组(浅)副本的一种便捷方式 */
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0;
console.log(original); // => [ 1, 2, 3 ]
console.log(copy); //=> [ 0, 2, 3 ]


/* 扩展操作符适用于任何可迭代对象(可迭代对象可以使用 for/of 循环遍历)
字符串是可迭代对象, 因此可以使用扩展操作符把任意字符串转换成单个字符的数组 */
let digits = [..."0123456789ABCDEF"];
console.log(digits); 
// => [
//   '0', '1', '2', '3',
//   '4', '5', '6', '7',
//   '8', '9', 'A', 'B',
//   'C', 'D', 'E', 'F'
// ]


/* 集合对象是可迭代的 */
let letters = [..."hello world"];
console.log([...new Set(letters)]);
// => [
//   'h', 'e', 'l',
//   'o', ' ', 'w',
//   'r', 'd'
// ]