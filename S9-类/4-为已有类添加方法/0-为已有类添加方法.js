const { Complex } = require("../3-使用class关键字的类/4-复数类");
console.log("\n====== XXX ======\n");

Complex.prototype.conj = function () {
  return new Complex(this.r, -this.i);
};
console.log(new Complex(10, 10).conj());
console.log("\n====== XXX ======\n");