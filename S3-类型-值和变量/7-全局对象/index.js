/**
 * 全局对象.
 * 全局对象的属性是全局性定义的标识符, 可以在 JavaScript程序的任何地方使用.
 * JavaScript 解释器启动后(或每次浏览器加载页面时), 都会创建一个新的全局对象并添加一组初始的属性
 */

//全局常量
undefined, Infinity, NaN;

//全局函数
isNaN(), parseInt(), eval();

//构造函数
Date(), RegExp(), String(), Object(), Array();

//全局对象
Math, JSON;

/**
 * Node 中, 全局对象有个名为 global 的属性, 其值未全局对象本身.
 * 
 * 浏览器中, window 对象充当了全局对象.
 * 
 * ES2020 最终定义了 globalThis 作为在任何上下文中引用全局对象的标准方式
 */
globalThis;