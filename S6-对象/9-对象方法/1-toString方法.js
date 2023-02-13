let s = { x: 1, y: 1 }.toString();
console.log(s); // => [object Object]
console.log("\n====== XXX ======\n");

let point = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
};
console.log(point.toString()); // => (1, 2)
console.log(String(point)); // => (1, 2)
