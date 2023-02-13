let a = [];
a[0] = "zero";
a[1] = "one";
console.log(a); // => [ 'zero', 'one' ]
console.log("\n====== XXX ======\n");

a.push("two");
console.log(a); // => [ 'zero', 'one', 'two' ]
console.log("\n====== XXX ======\n");

a.unshift("a1","a2");
console.log(a); // => [ 'a1', 'a2', 'zero', 'one', 'two' ]
console.log("\n====== XXX ======\n");

a.pop();
console.log(a); // => [ 'a1', 'a2', 'zero', 'one' ]
console.log("\n====== XXX ======\n");

a.shift();
console.log(a); // => [ 'a2', 'zero', 'one' ]
console.log("\n====== XXX ======\n");

delete a[0];
console.log(a); // => [ <1 empty item>, 'zero', 'one' ]
console.log("\n====== XXX ======\n");

console.log(2 in a); // => true
console.log("\n====== XXX ======\n");

a.splice(0, 1);
console.log(a); // => [ 'zero', 'one' ]
console.log("\n====== XXX ======\n");