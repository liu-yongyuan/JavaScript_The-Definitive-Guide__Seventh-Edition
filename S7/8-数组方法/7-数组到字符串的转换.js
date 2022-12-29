let a = [1, 2, 3];
console.log(a.join()); // => 1,2,3
console.log(a.join(" ")); // => 1 2 3
console.log(a.join("")); // => 123
console.log("\n====== XXX ======\n");

let b = new Array(10);
console.log(b.join("-")); // => ---------
console.log("\n====== XXX ======\n");

console.log([1, 2, 3].toString()); // => 1,2,3
console.log(["a", "b", "c"].toString()); // => a,b,c
console.log([1, [2, "c"]].toString()); // => 1,2,c
console.log("\n====== XXX ======\n");

