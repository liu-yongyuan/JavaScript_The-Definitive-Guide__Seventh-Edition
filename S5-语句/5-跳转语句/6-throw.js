/**
 * 抛出(throw) 一次是为了表明发生了这种错误或意外情形.
 *
 * throw 语法
 *
 *  throw expression;
 *
 * expression 可能求值为任何类型的值, 可以抛出一个错误码的数值, 也可以
 * 抛出一个包含可读的错误消息的字符串. JavaScript 解释器在抛出错误时会
 * 使用 Error 类及其子类.
 */
function factorial(x) {
  if (x < 0) throw 0;
  let f;
  for (f = 1; x > 1; f *= x, x--);
  return f;
}

console.log(factorial(10));

console.log(factorial(0));

console.log(factorial(-1));