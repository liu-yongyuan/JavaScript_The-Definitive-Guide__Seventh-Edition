/**
 * 在所有分析都依赖同一个表达式的值时最合适的就是 switch
 *
 * switch(expression){
 *  statements
 * }
 *
 */

const n = 0;
switch (n) {
  case 1:
    // 执行第一个代码块
    break;
  case 2:
    // 执行第二个代码块
    break;
  case 3:
    // 执行第三个代码块
    break;
  default:
    // 执行第四个代码块
    break;
}

/**
 * 根据值的类型决定怎么把它转换成字符串;
 * 
 * 注意,这里的匹配使用 === 全等操作符, 而不是 == 相等操作符,
 * 因此表达式必须在没有类型转换的情况下匹配.
 * 
 * @param {*} x 
 * @returns 
 */
function convert(x) {
  switch (typeof x) {
    case "number":
      return x.toString(16);
    case "string":
      return `"${x}"`;
    default:
      return String(x);
  }
}

