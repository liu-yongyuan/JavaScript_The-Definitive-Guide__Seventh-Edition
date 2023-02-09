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

  static parse(s) {
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) {
      throw new TypeError(`Cannot parse Range from "${s}".`);
    }
    return new Range(parseInt[matches[1]], parseInt(matches[2]));
  }
}

let r = Range.parse("(1...10)");
console.log(r.toString()); // => (undefined...10)
console.log(r.parse("(1...10)")); // => r.parse is not a function
