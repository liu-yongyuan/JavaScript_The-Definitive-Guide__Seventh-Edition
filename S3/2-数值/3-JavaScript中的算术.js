const x = 5,
  y = 6,
  z = 7;

console.log(Math.pow(2, 53)); // => 9007199254740992: 2 的 53 次方
console.log(Math.round(0.6)); // => 1.0: 舍入到最接近的整数
console.log(Math.ceil(0.6)); // => 1.0: 向上舍入到一个整数
console.log(Math.floor(0.6)); // => 0.0: 向下舍入到一个整数
console.log(Math.abs(-5)); // => 5: 绝对值
console.log(Math.max(x, y, z)); // => 7: 返回最大值
console.log(Math.min(x, y, z)); // => 5: 返回最小值
console.log(Math.random()); // => 伪随机数 x, 其中 0 <= x < 1.0
console.log(Math.PI); // => Π: 圆周率 3.141592653589793
console.log(Math.E); // => e: 自然对数的底数 2.718281828459045
console.log(Math.sqrt(3)); // => 3**0.5: 3 的平方根 1.7320508075688772
console.log(Math.pow(3, 1 / 3)); // => 3**(1/3): 3的立方根 1.4422495703074083
console.log(Math.sin(0)); // => 三角函数: 还有 Math.cos, Math.atan 等 0
console.log(Math.log(10)); // => 10 的自然对数 2.302585092994046
console.log(Math.log(100) / Math.LN10); // => 以 10 为底 100 的对数 2
console.log(Math.log(512) / Math.LN2); // => 以 2 为底 512 的对数 9
console.log(Math.exp(3)); // => Math.E 的立方 20.085536923187668

console.log("\n====== XXX ======\n");

let numberTen = 10;
/* ES6 Math 对象的新函数 */
console.log(Math.cbrt(27)); // => 3: 立方根
console.log(Math.hypot(3, 4)); // => 5: 所有参数平方和的平方根
console.log(Math.log10(100)); // => 2: 以 10 为底的对数
console.log(Math.log2(1024)); // => 10: 以 2 为底的对数
console.log(Math.log1p(numberTen)); // => 2.3978952727983707: (1+x)的自然对数;精确到非常小的x
console.log(Math.expm1(numberTen)); // => 22025.465794806718: Math.exp(x)-1; Math.log1p()的逆运算
console.log(Math.sign(numberTen)); // => 1: 对 <, == 或 > 0  的参数返回 -1, 0 或 1
console.log(Math.imul(2, 3)); // => 6: 优化的 32 位整数乘法
console.log(Math.clz32(0xf)); // => 28: 32 位整数中前导 0 的位数
console.log(Math.trunc(3.9)); // => 3: 剪掉分数部分得到整数
console.log(Math.fround(numberTen)); // => 10: 舍入到最接近的 32 位浮点数
console.log(Math.sinh(numberTen)); // => 11013.232874703393: 双曲线正弦, 还有 Math.cosh() 和 Math.tanh()
console.log(Math.asinh(numberTen)); // => 2.99822295029797: 双曲线反正弦, 还有 Math.acosh() 和 Math.atanh()

/**
 * JavaScript 中的算数再遇到上溢出, 下溢出或被零除时不会发生错误.
 * 在数值操作的结果超过最大可表示数值时(上溢出), 结果是一个特殊的无穷值 Infinite. 类似地, 当某个负数地绝对值超过了最大可表示负数的绝对值时, 结果是负无穷 -Infinity.
 * 这个两个无穷值的行为跟我们的预期一样: 任何数加,减,乘,除无穷值结果还是无穷值(知识符号可能相反).
 *
 * 下溢出发生在数值操作的结果比最小可表示数值更接近 0  的情况下.
 * 此时, JavaScript 返回 0 .如果下溢出来自负数, JavaScript 返回一个被称为"负零"的特殊值.该值与常规的零几乎完全无法区分, JavaScript程序员极少需要检测它.
 *
 */

/**
 * 被零除在 JavaScript 中不是错误, 只会简单地返回无穷或负无穷. 不过有个例外: 0 除以 0 是没有意义的值, 这个操作的结果是一个特殊的 "非数值"(NaN, Not a Number)
 * 此外, 无穷除无穷, 负数平方根或者用无法转换位数值的非数值作为算数操作符的操作数, 结果也都是 NaN.
 */
console.log("\n====== XXX ======\n");

console.log(Infinity); // => Infinity: 因为太大而无法表示的正数
console.log(Number.POSITIVE_INFINITY); // => Infinity: 同上
console.log(1 / 0); // => Infinity
console.log(Number.MAX_VALUE * 2); // => Infinity; 溢出
console.log(-Infinity); // => -Infinity: 因为太大而无法表示除的负数
console.log(Number.NEGATIVE_INFINITY); // => -Infinity: 同上
console.log(-1 / 0); // => -Infinity: 同上
console.log(-Number.MAX_VALUE * 2); // => -Infinity
console.log(NaN); // => NaN: 非数值
console.log(Number.NaN); // => NaN: 同上, 写法不同
console.log(0 / 0); // => NaN
console.log(Infinity / Infinity); // => NaN
console.log(Number.MIN_VALUE / 2); // => 0: 下溢出
console.log(-Number.MIN_VALUE / 2); // => -0: 负零
console.log(-1 / Infinity); // => -0: 也是负零
console.log(-0); // => -0

/* ES6 定义了下列 Number 属性 */
console.log(Number.parseInt("10")); // => 10: 同全局 parseInt() 函数
console.log(Number.parseFloat("10.01")); // => 10.01: 同全局 parseFloat() 函数
console.log(Number.isNaN(NaN)); // => true: 判断 x 是不是 NaN
console.log(Number.isFinite(Infinity)); // => false: 判断 x 是数值还是无穷
console.log(Number.isInteger(numberTen)); // => true: 判断 x 是不是整数
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // => true
console.log(Number.MIN_SAFE_INTEGER); // => -9007199254740991: -(2**53 - 1)
console.log(Number.MAX_SAFE_INTEGER); // => 9007199254740991: 2**53 - 1
console.log(Number.EPSILON); // => 2.220446049250313e-16: 2**-52: 数值与数值之间最小的差

console.log("\n====== XXX ======\n");

/**
 * 非数值(NaN)在 JavaScript 中有一个不同寻常的特性: 它与任何值比较都不相等, 也不等于自己.
 * 这以为着不能通过 x === NaN 来确定某个变量 x 的值是 NaN. 相反, 此时必须写成 x != x 或 Number.isNaN(x). 这两个表达式当且仅 x 与全局常量 NaN 具有相同值时才返回 true.
 */
const nan = NaN;
console.log(nan == NaN); // => false: 相等
console.log(nan === NaN); // => false: 严格相等
console.log(Number.isNaN(nan)); // => true
console.log(nan != NaN); // => true
console.log(nan !== NaN); // => true
console.log(Number.isNaN("10")); // => false
console.log(Number.isNaN("10.10")); // => false
console.log("10" == NaN); // => false

console.log("\n====== XXX ======\n");

/* 不类似, Number.isNaN(非数字) 会返回 false, isNaN(非数字) 会返回 true

全局函数 isNaN 做了 number 转换, 非数字会返回 NaN 因此 isNaN(非数字) => true
Number.isNaN 做了类型检查, 非数字直接返回 false, 因此 Number.isNaN(非数字) => falseF
 */
console.log(Number.isNaN("aax")); // => false
console.log(isNaN("aax")); // => true

console.log(Number.isNaN("10")); // => false
console.log(isNaN("10")); // => true

console.log(Number.isNaN(Number("aax"))); // => true
console.log(isNaN(Number("aax"))); // => true
console.log(isNaN(Infinity)); // => false
console.log(Number.isNaN(Infinity)); // => false
