/* ES6 之前 */
let square = {
  side: 10,
  area: function () {
    return this.side * this.side;
  },
};
console.log(square.area()); // => 100
console.log("\n====== XXX ======\n");

/* ES6 简写函数 */
let square1 = {
  side: 10,
  area() {
    return this.side * this.side;
  },
};
console.log(square1.area()); // => 100
console.log("\n====== XXX ======\n");

const method_name = "m";
const symbol = Symbol("m");
const weirdMethods = {
  "method With Spaces"(x) {
    return x + 1;
  },
  [method_name](x) {
    return x + 2;
  },
  [symbol](x) {
    return x + 3;
  },
};
console.log(weirdMethods["method With Spaces"](1)); // => 2
console.log(weirdMethods[symbol](1)); // => 4
console.log(weirdMethods[method_name](1)); // =>3
