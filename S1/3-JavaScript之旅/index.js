/* 
JavaScript 语言简单介绍
 */

// 双斜杠后面的这些文字都是注释
// 一定要认真阅读注释: 注释是对 JavaScript 代码的解释

// 变量是一个代表值的名字
// 变量要使用 let 关键字声明
let x; //声明一个叫 x 的变量

//可以使用一个等号为变量赋值
x = 0; // 现在变量 x 的值就是 0
console.log(0); // =>0: 变量求值的结果就是它的值

// JavaScript 支持几种不同的值
x = 1; // 数值
x = 0.01; // 数值可以是整数或实数
x = "hello world"; // 文本字符串包含在引号中
x = 'JavaScript'; // 单引号也用于界定字符串
x = true; // 布尔值
x = false; // 另一个布尔值
x = null; // null 是一个特殊值, 意思是 "没有值"
x = undefined; // undefined 也是一个特殊值, 与 null 类似

// 对象是 JavaScript 最重要的数据类型
// 对象是一个名 / 值对的集合, 或者是一个字符串到值的映射
let book = {  // 对象包含在一对大括号中
  topic: "JavaScript", // 属性 topic 的值是 JavaScript
  edition: 7 // 属性 edition 的值是 7 
};

// 使用 . 或 [] 访问对象的属性
book.topic // => "JavaScript"
book['edition'] // => 7: 另一种访问属性值的方式
book.author = "Flanagan"; // 通过复制创建新的属性
book.contents = {};  // {} 是一个没有属性的空对象

// 使用 ?. (ES2020) 条件式访问属性
book.contents?.ch01?.sect1 // => undefined: book.contents 没有 ch01 这个属性
