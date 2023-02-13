/**
 * ES6 以前 JavaScript 声明变量唯一的方式是使用 var 关键字, 无法
 * 声明常量. var 语法和 let 语法相同
 */
var x;
var data = [],
  count = data.length;
for (var i = 0; i < count; i++) console.log(data[i]);

/**
 * 1. 使用 var 声明变量不具有块作用域.这种变量的作用域仅限于包含函
 * 数的函数体,无论它们在函数中嵌套的层次有多深
 * 
 * 2.函数体外使用 var, 会声明一个全局变量
 */
