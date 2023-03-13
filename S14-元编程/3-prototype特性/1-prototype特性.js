const { next, log } = require("../../utils/log");

log(Object.getPrototypeOf({}));
log(Object.getPrototypeOf([]));
log(Object.getPrototypeOf(() => {}));
next();

let p = { x: 1 };
let o = Object.create(p);
log(p.isPrototypeOf(o)); // => true
log(Object.prototype.isPrototypeOf(p)); // => true
log(Object.prototype.isPrototypeOf(o)); // => true
next();

let o1 = { x: 1 };
let p1 = { y: 2 };
Object.setPrototypeOf(o1, p1);
log(o1.y); // => 2
let a = [1, 2, 3];
Object.setPrototypeOf(a, p1);
log(a.join);
next();

let p2 = { z: 3 };
let o2 = {
  x: 1,
  y: 2,
  __proto__: p2,
};
log(o2.z); // => 3
