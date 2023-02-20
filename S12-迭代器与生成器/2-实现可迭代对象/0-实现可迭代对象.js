const { next, log } = require("../../utils/log");

class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  has(x) {
    return typeof x === "number" && this.from <= x && x <= this.to;
  }

  toString() {
    return `{ x | ${this.from} ≤ x ≤ ${this.to} }`;
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    let last = this.to;
    return {
      next() {
        return next <= last ? { value: next++ } : { done: true };
      },

      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

for (let x of new Range(1, 10)) log(x); // => 打印数值 1 到 10
log([...new Range(-2, 2)]); // => [ -2, -1, 0, 1, 2 ]
next();

function map(iterable, f) {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let v = iterator.next();
      if (v.done) {
        return v;
      }
      return { value: f(v.value) };
    },
  };
}
log([...map(new Range(1, 4), (x) => x * x)]); // => [ 1, 4, 9, 16 ]
next();

function filter(iterable, predicate) {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      for (;;) {
        let v = iterator.next();
        if (v.done || predicate(v.value)) {
          return v;
        }
      }
    },
  };
}
log([...filter(new Range(1, 10), (x) => x % 2 === 0)]); // => [ 2, 4, 6, 8, 10 ]
next();

function words(s) {
  var r = /\s+|$/g;
  r.lastIndex = s.match(/[^ ]/).index;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let start = r.lastIndex;
      if (start < s.length) {
        let match = r.exec(s);
        if (match) {
          return {
            value: s.substring(start, match.index),
          };
        }
      }
      return { done: true };
    },
  };
}
log([...words(" abc def  ghi!  ")]); // => [ 'abc', 'def', 'ghi!' ]
