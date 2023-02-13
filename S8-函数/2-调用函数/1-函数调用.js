// import { printprops, distance, factorial } from "../1-定义函数/1-函数声明";
const { printprops, distance, factorial } = require("../1-定义函数/1-函数声明");

printprops({ x: 1 });
console.log("\n====== XXX ======\n");

let total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
console.log(total);
console.log("\n====== XXX ======\n");

let probability = factorial(5) / factorial(3);
console.log(probability);
console.log("\n====== XXX ======\n");
