/* 
形参默认值: 编写用少于形参个数的实参来调用的函数
剩余形参(rest parameter): 编写在调用时传入比形参多任意梳理的实参
 */
function max(first = -Infinity, ...rest) {
  let maxValue = first;
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }
  return maxValue;
}

console.log(max(1, 10, 20, 30, 1000, 2, 5, 180)); // => 1000


/* 
可变参函数(variadic function), 可变参数数量函数(variable arity function)或变长函数(vararg function): 可以接收任意数量实参的函数
 */