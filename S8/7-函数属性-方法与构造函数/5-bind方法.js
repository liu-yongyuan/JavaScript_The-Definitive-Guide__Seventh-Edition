function f(y) {
  return this.x + y;
}
let o = { x: 1 };
let g = f.bind(o);
console.log(g(2)); // => 3
console.log("\n====== XXX ======\n");

let p = { x: 10, g };
console.log(p.g(2)); // => 3
console.log("\n====== XXX ======\n");

let sum = (x, y) => x + y;
let succ = sum.bind(null, 1);
console.log(succ(2)); // => 3
console.log("\n====== XXX ======\n");

function f1(y, z) {
  return this.x + y + z;
}
let g1 = f1.bind({ x: 1 }, 2);
console.log(g1(3)); // => 6
