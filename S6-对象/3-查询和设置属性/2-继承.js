/**
 * JavaScript 对象有一组"自有属性", 同时也从它们的原型对象继承一组属性.
 * 这里通过 Object.create 函数以指定原型来创建对象.
 */
let o = {};
o.x = 1;
let p = Object.create(o); // => p 从 o 和 Object.prototype 继承属性
p.y = 2;
let q = Object.create(p); // => q 从 p, o 和 Object.prototype 继承属性
q.z = 3;
console.log(q.x + q.y); // => 3: x 和 y 分别继承自 o 和 p

let f = q.toString(); // => toString 继承自 Object.prototype
console.log(JSON.stringify(q)); // => {"z":3}

/**
 * 如果 o 继承了一个名为 x 的只读属性, 则不允许赋值.
 * 不过, 如果允许赋值则只会在原始对象上创建或设置属性, 而不会修改原型链中的对象.
 * 设置属性时不会影响原型链是一个重要的 JavaScript 特性, 利用这点可以选择性地
 * 覆盖继承的属性
 */
let unitcircle = { r: 1 };
let c = Object.create(unitcircle);
c.x = 1;
c.y = 2;
c.r = 2;
console.log(c); // => { x: 1, y: 2, r: 2 }
console.log(unitcircle); // => { r: 1 }
