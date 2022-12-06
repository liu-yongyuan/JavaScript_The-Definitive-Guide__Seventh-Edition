/* ES8 之后, 对象字面量中使用 "扩展操作符"  */

let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
console.log(rect.x + rect.y + rect.width + rect.height); // => 175
console.log("\n====== XXX ======\n");

/* 扩展对象会产生覆盖 */
let o = { x: 1 };
let p = { x: 0, ...o };
console.log(p.x); // => 1
let q = { ...o, x: 2 };
console.log(q); // =>2
console.log("\n====== XXX ======\n");

/* 只扩展对象属性,原型属性不扩展 */
let o1 = Object.create({ x: 1 });
let p1 = { ...o1 };
console.log(p1.x); // => undefined
