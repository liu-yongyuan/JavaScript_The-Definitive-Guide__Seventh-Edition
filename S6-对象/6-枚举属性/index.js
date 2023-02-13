let o = { x: 1, y: 2, z: 3 };
console.log(o.propertyIsEnumerable("toString"));
console.log("\n====== XXX ======\n");

for (let p in o) {
  console.log(p); // => 打印, x, y, z
}
console.log("\n====== XXX ======\n");

/* 防止通过 for/in 枚举继承的属性, 可以在循环体内添加一个显式测试 */
for (let p in o) {
  if (!o.hasOwnProperty(p)) {
    continue; // 跳过继承的属性
  }
  console.log(p); // => 打印, x, y, z
}
console.log("\n====== XXX ======\n");

for (let p in o) {
  if (typeof o[p] === "function") continue; // 跳过所有方法
  console.log(p); // => 打印, x, y, z
}
console.log("\n====== XXX ======\n");


/**
 * Object.keys() 返回对象可枚举自有属性名的数组. 不包含不可枚举属性, 继承属性
 * 或名字是符号的属性.
 * 
 * Object.getOwnPropertyNames() 与 Object.keys() 类似, 但也会返回不可枚举自
 * 有属性名的数组, 只要它们的名字是字符串.
 * 
 * Object.getOwnPropertySymbols() 返回名字是符号的自由属性, 无论是否可枚举.
 * 
 * Reflect.ownKeys() 返回所有属性名, 包括可枚举和不可枚举属性, 以及字符串属性和符号属性
 */