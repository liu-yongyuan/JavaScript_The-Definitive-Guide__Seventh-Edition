/**
 * JavaScript 程序中包含字符串, 可以把字符串放到一堆匹配的单引号, 双引号或者反引号(', "或`)这个i不过
 */
console.log("");
console.log("testing"); //=>testing
console.log("3.14"); // =>3.14
console.log('name="myform"'); // =>name="myform"
console.log("Wouldn't you prefer O'Reilly's book?"); // => Wouldn't you prefer O'Reilly's book?
console.log("is the ratio of a circle's circumference to its radius"); // => is the ratio of a circle's circumference to its radius
console.log(`"she said 'hi'", he said.`); // => "she said 'hi'", he said.

console.log("\n====== XXX ======\n");

/**
 * JavaScript 最早的版本要求字符串字面量必须写在一行, 使用 + 号操作符把单行字符串拼接成长字符串的 JavaScript 代码随处可见.
 * 到了 ES5, 我们可以在每行末尾加一个反斜杠(\)从而把字符串字面量写到多行上.这个反斜杠和它后面的行终结符都不属于字符串字面量.
 * 如果需要在单引号或双引号字符串中包含换行符, 需要使用字符序列\n
 * ES6 的反引号语法支持跨行字符串, 而行终结符也是字符串字面量的一部分
 */
//写在一行但表示两行的字符串
console.log("two\nlines");

//写在三行但只有一行的字符串
console.log("one\
long\
line");

//写在两行实际也是两行的字符串
console.log(`the newline character at the end of this line
is included literally in this string`);


