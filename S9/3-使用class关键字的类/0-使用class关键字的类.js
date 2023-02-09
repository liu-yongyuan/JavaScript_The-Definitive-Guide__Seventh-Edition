class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  includes(x) {
    return this.from <= x && x <= this.to;
  }

  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() {
    return `(${this.from}...${this.to})`;
  }
}

let r = new Range(1, 3);
console.log(r.includes(2)); // => true
console.log(r.toString()); // => (1...3)
console.log([...r]); // => [ 1, 2, 3 ]
console.log("\n====== XXX ======\n");

class Span extends Range {
  constructor(start, length) {
    if (length >= 0) {
      super(start, start + length);
    } else {
      super(start + length, start);
    }
  }
}
console.log("\n====== XXX ======\n");

let square = function (x) {
  return x * x;
};
console.log(square(3)); // => 9

let Square = class {
  constructor(x) {
    this.area = x * x;
  }
};
console.log(new Square(3).area); // => 9
console.log("\n====== XXX ======\n");
