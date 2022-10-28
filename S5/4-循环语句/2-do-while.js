/**
 * do/while 循环与 while类似, 区别是对循环表达式的测试
 * 在循环底部而不是顶部, 这意味着循环体至少会执行一次.
 *
 * do
 *  statement
 * while(expression)
 */

function printArray(a) {
  let len = a.length,
    i = 0;
  if (len === 0) {
    console.log("Empty Array");
    return;
  }
  do {
    console.log(a[i]);
  } while (++i < len);
}

printArray(["A", "B", "C"]);
