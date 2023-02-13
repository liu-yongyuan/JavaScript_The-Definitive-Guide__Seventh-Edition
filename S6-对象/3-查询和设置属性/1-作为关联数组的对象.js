/**
 * 下面两个 JavaScript 表达式的值相同:
 *
 *    object.property
 *    object["property"]
 *
 * JavaScript 对象是关联数组
 */
console.log("\n====== XXX ======\n");

/**
 * 通过方括号([])这种数组表示法访问对象属性时,属性名是通过
 * 字符串来表示的.字符串是一种 JavaScript 数组类型, 因此
 * 可以在程序运行期间修改和创建, 例如:
 */
let customer = {};
let address = ``;
const x_a = [1, 2, 3, 4, 5];
for (const i of x_a) {
  customer[`address${i}`] = (i * Math.random()).toFixed(3);
  address += customer[`address${i}`] + "\n";
}
/* 
{
  address1: '0.429',
  address2: '1.253',
  address3: '2.448',
  address4: '0.720',
  address5: '0.585'
}

0.429
1.253
2.448
0.720
0.585
 */
console.log(customer);
console.log(address);
console.log("\n====== XXX ======\n");

/**
 * 投资组合(portfolio)
 * @param {*} portfolio
 * @param {*} stockname
 * @param {*} shares
 */
function addstock(portfolio, stockname, shares) {
  portfolio[stockname] = shares;
}

/**
 * 通过动态的字符串去访问对象属性, 而不是通过硬编码到程序时来访问属性
 * 因为无法预知对象会有什么属性
 * @param {*} portfolio
 * @returns
 */
function computeValue(portfolio) {
  let total = 0.0;
  for (const stock in portfolio) {
    const shares = portfolio[stock];
    const price = getQuote(stock);
    total += shares * price;
  }
  return total;
}
