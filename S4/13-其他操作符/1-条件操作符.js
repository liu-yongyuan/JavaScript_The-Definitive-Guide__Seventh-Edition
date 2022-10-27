/**
 * 条件操作符 (?:)
 * 三元操作符 (有三个操作数)
 */
// x > 0 ? x: -x
const username = "yongy";

let greeting = "hello " + (username ? username : "there");

console.log(greeting); // => hello yongy

/**
 * 等价于下面的 if 语句
 */
greeting = "hello ";
if (username) {
  greeting += username;
} else {
  greeting += "there";
}
console.log(greeting); // => hello yongy
