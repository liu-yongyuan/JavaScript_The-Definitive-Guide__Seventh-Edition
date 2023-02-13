const { Range } = require("../2-类和构造函数/0-类和构造函数");
console.log("\n====== XXX ======\n");

function Span(start, span) {
  if (span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span;
  }
}

Span.prototype = Object.create(Range.prototype);
Span.prototype.constructor = Span;
Span.prototype.toString = function () {
  return `(${this.from}... +${this.to - this.from})`;
};
console.log(new Span(10, 10).toString()); // => (10... +10)
console.log("\n====== XXX ======\n");