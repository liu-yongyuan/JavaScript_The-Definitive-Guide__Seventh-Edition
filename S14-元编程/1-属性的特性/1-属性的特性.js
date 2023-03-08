const { next, log } = require("../../utils/log");
log(Object.getOwnPropertyDescriptor({ x: 1 }, "x")); // => { value: 1, writable: true, enumerable: true, configurable: true }

const random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
};
log(Object.getOwnPropertyDescriptor(random, "octet")); /* => 
{
  get: [Function: get octet],
  set: undefined,
  enumerable: true,
  configurable: true
}
 */

log(Object.getOwnPropertyDescriptor({}, "x")); // => undefined
log(Object.getOwnPropertyDescriptor({}, "toString")); // => undefined
next();

let o = {};
Object.defineProperty(o, "x", {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true,
});
log(o.x); // => 1
log(Object.keys(o)); // => []
next();

Object.defineProperty(o, "x", { writable: false });
o.x = 2;
log(o.x); // => 1
next();

Object.defineProperty(o, "x", {
  get() {
    return 0;
  },
});
o.x = 1;
log(o.x); // => 0
next();

let p = Object.defineProperties(
  {},
  {
    x: {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    y: {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    r: {
      get() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      enumerable: true,
      configurable: true,
    },
  },
);
log(p.r); // => Math.SQRT2
next();

Object.defineProperty(Object, "assignDescriptors", {
  writable: true,
  enumerable: false,
  configurable: true,
  value: function (target, ...sources) {
    for (let source of sources) {
      for (let name of Object.getOwnPropertyNames(source)) {
        let desc = Object.getOwnPropertyDescriptor(source, name);
        Object.defineProperty(target, name, desc);
      }

      for (let symbol of Object.getOwnPropertySymbols(source)) {
        let desc = Object.getOwnPropertyDescriptor(source, symbol);
        Object.defineProperty(target, symbol, desc);
      }

      return target;
    }
  },
});
let o1 = {
  x: "A",
};
Object.assignDescriptors(o1, { y: "Y" }, { z: 1 });
log(o1); // => { x: 'A', y: 'Y', z: 1 }
next();

let o2 = {
  c: 1,
  get count() {
    return this.c++;
  },
};
let p1 = Object.assign({}, o2);
let q = Object.assignDescriptors({}, o2);
log(q); // => { c: 2, count: [Getter] }
log(p1.count); // => 1
log(p1.count); // => 1
log(q.count); // => 2
log(q.count); // => 3
