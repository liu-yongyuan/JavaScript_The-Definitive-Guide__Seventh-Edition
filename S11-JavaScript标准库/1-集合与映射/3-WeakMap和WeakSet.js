const { next, log } = require("../../utils/log");
let o = {
  x: 1,
  y: 2,
};
let wm = new WeakMap();
wm.set(o, "2023/02/14 10:55");
log(wm.get(o)); // => 2023/02/14 10:55
o = null;
log(wm.get(o)); // => undefined
next();

o = {
  x: 0,
  y: 1,
  z: 2,
};
let ws = new WeakSet();
ws.add(o);
log(ws.has(o)); // => true
o = null;
log(ws.has(o)); // => false
next();
