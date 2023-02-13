/**
 * 箭头函数声明
 * @param {*} x
 * @param {*} y
 * @returns
 */
const sum = (x, y) => {
  return x + y;
};

/**
 * 箭头函数的函数体只有一个 return 语句, 可以省略 return 关键字.
 * 语句末尾,的分号一击花括号,将函数体写成一个表达式, 它的值将被返回:
 * @param {*} x
 * @param {*} y
 * @returns
 */
const sum1 = (x, y) => x + y;

/**
 * 箭头函数只有一个参数, 也可以省略包围参数列表的圆括号
 * @param {*} x
 * @returns
 */
const polynomial = (x) => x * x + 2 * x + 3;

/**
 * 对于没有参数的箭头函数则必须把空圆括号写出来
 * @returns
 */
const constantFunc = () => 42;

// 得到一个过滤掉 null 元素的数组
let filtered = [1, null, 2, 3].filter((x) => x !== null);

// 求数值的平方
let squares = [1, 2, 3, 4].map((x) => x * x);
