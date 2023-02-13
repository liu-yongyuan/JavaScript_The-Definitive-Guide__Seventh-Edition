// 把对象 o 的可枚举属性名放到数组 a 中, 返回 a
// 如果不传 a, 则创建一个新数组
function getPropertyNames(o, a) {
  if (a === undefined) a = []; // 如果是 undefined, 赋值为一个新的空数组
  for (let property in o) {
    a.push(property);
  }
  return a;
}

let o = { x: 1 },
  p = { y: 2, z: 3 };

let a = getPropertyNames(o);
console.log(a); // => [ 'x' ]

getPropertyNames(p, a);
console.log(a); // => [ 'x', 'y', 'z' ]
console.log("\n====== XXX ======\n");

// ES6 或更高版本
// 把对象 o 的可枚举属性名放到数组 a 中, 返回 a
// 如果不传 a, 赋值为一个新的空数组
function getPropertyNames1(o, a = []) {
  for (let property in o) {
    a.push(property);
  }
  return a;
}
let o1 = { x: 1 },
  p1 = { y: 2, z: 3 };

let a1 = getPropertyNames(o1);
console.log(a1); // => [ 'x' ]

getPropertyNames(p1, a1);
console.log(a1); // => [ 'x', 'y', 'z' ]
console.log("\n====== XXX ======\n");

// 默认高度是宽度 2 倍
const rectangle = (width, height = width * 2) => ({ width, height });
console.log(rectangle(2)); // => { width: 2, height: 4 }
console.log(rectangle(2, 8)); // => { width: 2, height: 8 }
