const { next, log } = require("../../utils/log");

let m = new Map();
let n = new Map([
  ["one", 1],
  ["two", 2],
]);
log(n); // => Map(2) { 'one' => 1, 'two' => 2 }
next();

let copy = new Map(n);
log(copy); // => Map(2) { 'one' => 1, 'two' => 2 }

let o = { x: 1, y: 2 };
let p = new Map(Object.entries(o));
log(p); // => Map(2) { 'x' => 1, 'y' => 2 }
next();

log(m.size); // => 0
log(m.set("one", 1)); // => Map(1) { 'one' => 1 }
log(m.set("two", 2)); // => Map(2) { 'one' => 1, 'two' => 2 }
log(m.size); // => 2
log(m.get("two")); // => 2
log(m.get("three")); // => undefined
log(m.set("one", true)); // => Map(2) { 'one' => true, 'two' => 2 }
log(m.size); // => 2
log(m.has("one")); // => true
log(m.has(true)); // => false
log(m.delete("one")); // => true
log(m.size); // => 1
log(m.delete("three")); // => false
log(m.size); // => 1
log(m.clear()); // => undefined
log(m.size); // => 0
next();

m = new Map().set("one", 1).set("two", 2).set("three", 3);
log(m.size);
log(m.get("two"));
log(m);
next();

m = new Map();
m.set({}, 1).set({}, 2);
log(m.size); // => 2
log(m.get({})); // => undefined
log(m.set(m, undefined));
/* 
 => 
<ref *1> Map(3) {
  {} => 1,
  {} => 2,
  [Circular *1] => undefined
}
*/
log(m.has(m)); // => true
log(m.get(m)); // => undefined
next();

m = new Map([
  ["x", 1],
  ["y", 2],
]);
log([...m]); // => [ [ 'x', 1 ], [ 'y', 2 ] ]
for (let [key, value] of m) {
  log(`[key: ${key}] --- value: ${value}`);
  /* 
  [key: x] --- value: 1
  [key: y] --- value: 2
   */
}
next();

log(...m.keys()); // => x y
log(...m.values()); // => 1 2
log(...m.entries()); // => [ 'x', 1 ] [ 'y', 2 ]
m.forEach((value, key) => log(`[key: ${key}] --- value: ${value}`)); // =>
/* 
[key: x] --- value: 1
[key: y] --- value: 2
 */
next();
