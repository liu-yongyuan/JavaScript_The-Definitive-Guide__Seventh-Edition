/**
 *
 * in 操作符可以测试某个熟悉是否存在.
 *
 * delete 操作符期待它的操作数是个左值. 如果操作数不是左值, delete 什么也不做,
 * 且返回 true. 否则, delete 尝试删除指定的左值. 如果删除成功则返回 true. 但是并非
 * 所有熟悉都是可以删除的: 不可配置属性就无法删除
 *
 */

let o = { x: 1, y: 2 };
delete o.x;
console.log("x" in o); // => false

let a = [1, 2, 3];
delete a[2];
console.log(2 in a); // => false
console.log(a.length); // => 3
console.log(a); // => [ 1, 2, <1 empty item> ]

console.log("\n====== XXX ======\n");

let o1 = { x: 1, y: 2 };
console.log(delete o1.x); // => true: 删除对象的一个属性
console.log(typeof o1.x); // => undefined: 属性不存在
console.log(delete o1.x); // => true: 删除不存在的属性
console.log(delete 1); // => true: 毫无意义,但是会返回 true
console.log(delete o1); // => false: 不能删除变量, 严格模式会报错 SyntaxError
console.log(delete Object.prototype); // => false: 不可删除属性, 严格模式会报错 TypeError
