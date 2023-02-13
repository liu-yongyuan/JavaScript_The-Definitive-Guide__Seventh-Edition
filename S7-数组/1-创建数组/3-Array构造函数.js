/* 不传参调用 */
let a = new Array(); // => []
console.log(a);
console.log("\n====== XXX ======\n");

/* 传入一个数组参数,指定长度 */
let a1 = new Array(10);
console.log(a1); // => [ <10 empty items> ]
console.log("\n====== XXX ======\n");

/* 传入两个或更多个参数 */
let a2 = new Array(5, 4, 3, 2, 1, "testing, testing");
console.log(a2); //=>[ 5, 4, 3, 2, 1, 'testing, testing' ]
