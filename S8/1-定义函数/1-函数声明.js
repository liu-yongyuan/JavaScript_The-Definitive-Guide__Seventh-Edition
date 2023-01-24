/**
 * 打印对象 o 的每个属性的名字和值. 返回 undefined
 * @param {*} o
 */
function printprops(o) {
  for (let p in o) {
    console.log(`${p}: ${o[p]}\n`);
  }
}
const o1 = { name: "mat", hello: "World" };
printprops(o1);
console.log("\n====== XXX ======\n");

/**
 * 计算笛卡儿坐标点(x1,y1) 和 (x2,y2) 之间的距离
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 */
function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
console.log(distance(10, 10, 20, 20));
console.log("\n====== XXX ======\n");

/**
 * 计算阶乘的递归函数(调用自身的函数)
 * 回忆一下: x! 是 x 与所有小于它的正整数的积
 * @param {*} x 
 * @returns 
 */
function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(10))