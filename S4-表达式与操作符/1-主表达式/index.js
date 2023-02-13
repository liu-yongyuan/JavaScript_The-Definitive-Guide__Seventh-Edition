/**
 * 主表达式(primary expression), 即那些独立存在, 不再包含梗简单表达式的表达式.
 * 主表达式包括常量或字面量, 某些语言关键字和变量引用.
 *
 * 字面量是可以直接嵌入在程序中的常量值.
 * 例如:
 */
1.23; // 数值
("hello"); // 字符串
/pattern/; // 正则表达式

//JavaScript 中的一些保留字也是主表达式
true; // 求值为布尔值 true
false; // 求值为布尔值 false
null; // 求值为 null 值
this; // 求值为当前值

//第三种表达式是变量, 常量或全局对象熟悉的引用:
let i, sum;
i; // 求值为变量 i 的值
sum; // 求值变量为 sum 的值
undefined; // 全局对象 undefined 的值
