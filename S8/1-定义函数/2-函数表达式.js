/**
 * 这个函数表达式定义了一个对参数求平方的函数
 * 把这个函数赋值给了一个变量
 * @param {*} x
 * @returns
 */
const square = function (x) {
  return x * x;
};

/**
 * 函数表达式可以包含名字, 这对递归有用
 * @param {*} x
 * @returns
 */
const f = function fact(x) {
  if (x <= 1) {
    return 1;
  }
  return x * fact(x - 1);
};

//函数表达式也可以用作其他函数的参数
[3, 2, 1].sort(function (a, b) {
  return a - b;
});

// 函数表达式也可以定义完立刻调用
let tensquared = (function (x) {
  return x * x;
})(10);
