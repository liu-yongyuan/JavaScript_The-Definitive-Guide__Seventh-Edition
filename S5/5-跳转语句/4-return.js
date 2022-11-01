/**
 * return 语句只能出现在函数体内
 *
 *  return expression;
 *
 * 执行 return 语句后, 包含它的函数向调用者返回 expression 的值,
 * 如果没有值则返回 undefined
 */
function square(x) {
  return x * x;
}

function displayObject(o) {
  if (!o) {
    return;
  }
}

