/**
 * for/in 循环的 in 后面可以是任意对象.
 * for/of 循环是 ES6 新增的, 而 for/in 是 JavaScript 从一开始就有的
 *
 * for/in 语句循环指定对象的属性名,语法类似如下:
 *
 *  for(variable in object)
 *    statement
 *
 * variable 通常是一个变量名, 但也可能是变量声明或任何可以作为赋值表达式左值
 * 的东西. object 是一个求值为对象的表达式. 跟以前意义, statement 是作为循环体
 * 的语句或语句块
 */
let o = { x: 1, y: 3 };
/**
 * 执行 for/in 语句时, JavaScript 解释器首先求值 object 表达式.
 * 如果它求值为 null 或 undefined, 解释器会跳过循环并转义到下一个语句.
 * 否则, 解释器会对每个可枚举的对象属性执行一次循环体. 但在每次迭代前, 解释器
 * 都会求值 variable 表达式, 并将属性名字(字符串值)赋值给它.
 */
// let o = null;
for (const key in o) {
  console.log(o[key]);
}

console.log("\n====== XXX ======\n");

let a = [],
  i = 0;
for (a[i++] in o); /* 空循环体 */
console.log(a);
console.log("\n====== XXX ======\n");


for(const i in a){
  console.log(i);
}
console.log("\n====== XXX ======\n");