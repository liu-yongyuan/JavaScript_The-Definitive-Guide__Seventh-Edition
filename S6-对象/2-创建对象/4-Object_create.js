const location = { x: 1, y: 2 };
/**
 * Object.create() 用于创建一个新对象, 使用其第一个参数作为新对象的原型:
 */
let o1 = Object.create(location);
console.log(o1.x + o1.y); // 3
console.log(Object.getPrototypeOf(o1)); // => { x: 1, y: 2 }
console.log("\n====== XXX ======\n");

/**
 * 1, null 派生于 object 所有可以用于创建对象
 * 2, null 就是 null, Object.create(null) 创建的是一个没有原型的新对象
 * 3, 创建的新对象的原型也是 null, 连 toString() 都没有
 */
let o2 = Object.create(null);
o2.name = "null object";
console.log(o2); // => [Object: null prototype] { name: 'null object' }
console.log(Object.getPrototypeOf(o2)); // => null
console.log("\n====== XXX ======\n");

let o3 = Object.create(Object.prototype);
console.log(o3); // => {}
console.log("\n====== XXX ======\n");


