let x = 1,
  y = 2;

/* ES6 前, 使用基本的对象字面量语法, 需要把每个标识符重复两次 */
let o = {
  x: x,
  y: y,
};
console.log(o.x + o.y);
console.log("\n====== XXX ======\n");

/* ES6 及之后, 可以删掉其中的分号和一份标识符, 得到非常简洁的代码 */
let o2 = { x, y };
console.log(o2.x + o2.y);
