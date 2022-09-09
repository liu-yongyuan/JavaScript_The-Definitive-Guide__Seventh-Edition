/**
 * 显示的值转换最简单的方法就是使用 Boolean(), Number() 和 String() 函数
 */
console.log(Number(3)); // => 3
console.log(String(false)); // => false
console.log(Boolean([])); // => true

console.log("\n====== XXX ======\n");

/**
 * JavaScript 操作符会执行隐式类型转换, 有时候可以利用这点完成类型转换.
 */
// console.log(x + ""); // => String(x)
// console.log(+x); // => Number(x)
// console.log(x - 0); // => Number(x)
// console.log(!!x); // => Boolean(x)

let n = 17;
let binary = "0b" + n.toString(2);
let octal = "0o" + n.toString(8);
let hex = "0x" + n.toString(16);
console.log(n); // => 17
console.log(binary); // => 0b10001
console.log(octal); // => 0o21
console.log(hex); // => 0x11

console.log("\n====== XXX ======\n");

let x = 123456.789;
console.log(x.toFixed(0)); // => 123457
console.log(x.toFixed(2)); // => 123456.79
console.log(x.toFixed(5)); // => 123456.78900
console.log(x.toExponential(1)); // => 1.2e+5
console.log(x.toExponential(3)); // => 1.235e+5
console.log(x.toPrecision(4)); // => 1.235e+5
console.log(x.toPrecision(7)); // => 123456.8
console.log(x.toPrecision(10)); // => 123456.7890

console.log("\n====== XXX ======\n");

console.log(parseInt("3 blind mice")); // => 3
console.log(parseFloat(" 3.14 meters")); // => 3.14
console.log(parseInt("-12.34")); // => -12
console.log(parseInt("0xFF")); // => 255
console.log(parseInt("0xff")); // => 255
console.log(parseInt("-0Xff")); // => -255
console.log(parseFloat(".1")); // => 0.1
console.log(parseInt("0.1")); // => 0
console.log(parseInt(".1")); // => NaN: 不能以 . 开头
console.log(parseFloat("$72.47")); // => NaN: 不能以 $ 开头
