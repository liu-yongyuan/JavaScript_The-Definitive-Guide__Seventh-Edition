let a = {};
let i = 0;
while (i < 10) {
  a[i] = i * i;
  i++;
}
a.length = i;

let total = 0;
for (let j = 0; j < a.length; j++) {
  total += a[j];
}

console.log(total); // => 285
console.log("\n====== XXX ======\n");

function isArrayLike(o) {
  if (o && typeof o === "object" && Number.isFinite(o.length) && o.length >= 0 && Number.isInteger(o.length) && o.length < 4294967295) {
    return true;
  }
  return false;
}
console.log(isArrayLike(a)); // => true
console.log("\n====== XXX ======\n");

let x = { 0: "a", 1: "b", 2: "c", length: 3 };
console.log(Array.prototype.join.call(x, "+")); // => a+b+c
console.log(Array.prototype.map.call(x, (t) => t.toUpperCase())); // => [ 'A', 'B', 'C' ]
console.log(Array.prototype.slice.call(x, 0)); // => [ 'a', 'b', 'c' ]
console.log(Array.from(x)); // => [ 'a', 'b', 'c' ]
