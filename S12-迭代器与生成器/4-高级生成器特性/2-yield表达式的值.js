const { next, log } = require("../../utils/log");

function* smallNumbers() {
  log("next() 第一次被调用; 参数被丢弃 ");
  let y1 = yield 1;
  log("next() 第二次被调用; 参数是 ", y1);
  let y2 = yield 2;
  log("next() 第三次被调用, 参数是 ", y2);
  let y3 = yield 3;
  log("next() 第三次被调用, 参数是 ", y3);
  return 4;
}
let g = smallNumbers();
log(" 创建了生成器; 代码未运行 ");
let n1 = g.next("a");
log(" 生成器回送 ", n1.value);
let n2 = g.next("b");
log(" 生成器回送 ", n2.value);
let n3 = g.next("c");
log(" 生成器回送 ", n3.value);
let n4 = g.next("d");
log(" 生成器回送 ", n4.value);
/* =>
 创建了生成器; 代码未运行
next() 第一次被调用; 参数被丢弃
 生成器回送  1
next() 第二次被调用; 参数是  b
 生成器回送  2
next() 第三次被调用, 参数是  c
 生成器回送  3
next() 第三次被调用, 参数是  d
 生成器回送  4
 */
next();
