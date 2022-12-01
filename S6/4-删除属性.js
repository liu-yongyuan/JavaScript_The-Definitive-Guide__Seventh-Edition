const book = { author: "yongy" };
console.log(delete book.author);
console.log(delete book["main title"]);
console.log(book);
console.log("\n====== XXX ======\n");

let o = { x: 1 };
console.log(delete o.x);
console.log(delete o.x);
console.log(delete o.toString());
console.log(delete 1);
console.log("\n====== XXX ======\n");

console.log(delete Object.prototype);
var x = 1;
console.log(delete globalThis.x);
function f() {}
console.log(delete globalThis.f);
console.log("\n====== XXX ======\n");

globalThis.x = 1;
console.log(delete x);