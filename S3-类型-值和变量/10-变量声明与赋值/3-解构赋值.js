/**
 * ES6 实现了一种复合声明于赋值的语法, 叫解构赋值(destructring assignment)
 */
let [x, y] = [1, 2]; //相当于 let x = 1, y = 2
[x, y] = [x + 1, y + 1]; // 相当于x=x+1, y=y+1
[x, y] = [y, x]; // 交换两个变量的值
console.log([x, y]); // => [3,2]
console.log("\n====== XXX ======\n");
/**
 * 将[x,y]坐标转换为[r,theta]极坐标
 * @param {*} x
 * @param {*} y
 * @returns
 */
function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

/**
 * 将极坐标转换为笛卡尔坐标
 * @param {*} r
 * @param {*} theta
 * @returns
 */
function toCartesian(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}
let [r, theta] = toPolar(1.0, 1.0);
console.log([r, theta]); // => [ 1.4142135623730951, 0.7853981633974483 ]
let [x1, y1] = toCartesian(r, theta);
console.log([x1, y1]); // => [ 1.0000000000000002, 1 ]
console.log("\n====== XXX ======\n");

let o = { x: 1, y: 2 };
for (const [name, value] of Object.entries(o)) {
  console.log(name, value);
}
console.log("\n====== XXX ======\n");

let [x2, y2] = [1];
[x2, y2] = [1, 2, 3];
[, x2, , y2] = [1, 2, 3, 4];
console.log([x2, y2]); // => [ 2, 4 ]
console.log("\n====== XXX ======\n");

let [x3, ...y3] = [1, 2, 3, 4];
console.log([x3, y3]); // => [ 1, [ 2, 3, 4 ] ]
let [a, [b, c]] = [1, [2, 2.5], 3];
console.log([a, b, c]); // => [ 1, 2, 2.5 ]
let [first, ...rest] = "Hello";
console.log(first, rest); // =>  H [ 'e', 'l', 'l', 'o' ]
console.log("\n====== XXX ======\n");

let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 };
let { r: r1, g: g1, b: b1 } = transparent;
console.log([r1, g1, b1]); // => [ 0, 0, 0 ]
console.log("\n====== XXX ======\n");

const { sin, cos, tan } = Math;

let points = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];
let [{ x: x4, y: y4 }, { x: x5, y: y5 }] = points;
let pointsEqual = x4 === 1 && y4 === 2 && x5 === 3 && y5 === 4;
console.log(pointsEqual); // => true
