/**
 * 符号(Symbol)是 ES6 新增的一种原始类型,用作非字符串的属性名
 * 1. JavaScript Object 是一个属性的无序集合, 由 Key-Value 组成
 * 2. Key 在 ES6 之前必须是字符串
 * 3. ES6 后, 支持 Symbol 的 Key
 */
let strname = "stringname";
let symname = Symbol("propname");
console.log(typeof strname); // => "string": strname 是字符串
console.log(typeof symname); // => "symbol": symname 是符号

let o = {};
o[strname] = 1;
o[symname] = 2;
console.log(o[strname]); // => 1
console.log(o[symname]); // => 2

/**
 * Symbol 没有字面量语法.获取 Symbol 值, 需要调用 Symbol() 函数.
 * 1. Symbol() 函数永远不会返回相同值, 即使每次传入参数都一样
 * 2. Symbol() 取得的符号值安全地用于为对象添加新属性, 无需担心重写已有地同名属性
 *
 * Symbol.for() 函数接收一个字符串参数, 返回一个与该字符串关联的符号值.
 * 1.存在该符号则返回
 * 2.不存在会创建一并返回一个新符号
 * 3.Symbol.for() 和 Symbol() 完全不同: 相同字符串调用 Symbol() 永远不会返回相同的值, Symbol.for() 则始终返回相同的值
 */
let x1 = Symbol("x");
let x2 = Symbol("x");
console.log(x1 === x2); // => false: Symbol() 函数不会返回相同值

let x3 = Symbol.for("x");
let x4 = Symbol.for("x");
console.log(x1 === x3); // => false: Symbol() 和 Symbol.for() 不相等
console.log(x2 === x3); // => 同上
console.log(x4 === x3); // => true: Symbol.for() 相同字符串时相等
console.log(x3.toString()); // => "Symbol(x)"
console.log(Symbol.keyFor(x3)); // => x: 字符串
