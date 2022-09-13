/**
 * ES6 及之后, 变量是通过 let 关键字声明的
 */
let i;
let sum;

/**
 * 一条 let 语句声明多个变量
 */
let a, b;

/**
 * 声明变量同事也为其赋予一个初始值
 */
let message = "hello";
let i1 = 0,
  j = 0,
  k = 0;
let x = 2,
  y = x * x;

/**
 * let 可以不为变量声明初始化值, 也会被声明, 其值为 undefined
 * const 为声明常量, 必须要在声明式初始其值
 */
// const xa;//没有初始化值会报错
const H0 = 74;
const C = 299792.458;
const AU = 1.496e8;

/**
 * 常量的值不能改变, 尝试改变常量值会抛出 TypeError.
 *
 * 声明常量的一个约定是全部字母大写, 如 H0, 或 HTTP_NOT_FOUND,以
 * 区别变量.
 */

/**
 * JavaScript 中的 for, for/in 和 for/of 循环语句.
 * 其中每种循环都包含一个循环变量, 在循环的每次迭代中都会取得一个新值.
 * JavaScript 中允许在循环语法中声明这个变量, 这也是 let 的常见使用场景
 * 之一
 */
const data = [1, 2, 3, 4, 5];
for (let i = 0, len = data.length; i < len; i++) console.log(data[i]);

console.log("\n====== XXX ======\n");

for (let datum of data) console.log(datum);

console.log("\n====== XXX ======\n");

for (let property in data) console.log(property);

console.log("\n====== XXX ======\n");

for (const datum of data) console.log(datum);

console.log("\n====== XXX ======\n");

for (const property in data) console.log(property);
