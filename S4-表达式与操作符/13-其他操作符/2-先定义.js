/**
 * 先定义 (first-defined) 操作服务 ?? 求值其先顶i有 的操作数,
 * 如果其左侧操作数不是 null 或 undefined, 就返回该值. 否则它会
 * 返回右操作数的值. 与 && 或 || 操作符类似, ?? 是短路的: 它只在
 * 第一个操作数求值为 null 或 undefined 时才会求值第二个操作数.
 * 如果表达式 a 没有副效应, 那么表达式 a ?? b 等价于:
 *  (a !== null && a !== undefined) ? a :b
 */

/**
 * ?? 是对 || 的一个幼童的替代, 适合选择先定义的操作数, 而不是第
 * 一个为真值的操作数. 尽管 || 名义上是个逻辑或操作符, 习惯上也会
 * 使用它选择第一个非假值操作数, 比如:
 */
const maxWidth = 0,
  preferences = { maxWidth: 100 };
// 如果 maxWidth 是真值, 就使用它 ; 否则, 看看 preferences
// 对象. 如果 preferences 里也没有真值, 就使用硬编码的常量
const max = maxWidth || preferences.maxWidth || 500;
console.log(max); // => 100




// 如果 maxWidth 有定义, 就使用它; 否则看看 preferences
// 对象. 如果 preferences 里也没有定义, 就使用硬编码的常量
const max1 = maxWidth ?? preferences.maxWidth ?? 500;
console.log(max1); // => 0




/**
 * ?? 的第一个操作数都是假值. 如果这个操作数是假值但有定义, 
 * ?? 仍然返回这个值. 只有当第一个操作数"缺值"(nullish) 时,
 * 即 null 或 undefined, 这个操作符才会求值并返回第二个操作数
 */
let options = { timeout: 0, title: "", verbose: false, n:null };
console.log(options.timeout ?? 1000); // => 0
console.log(options.title ?? "Untitled"); // => ""
console.log(options.verbose ?? true); // => false
console.log(options.quiet ?? false); // => false
console.log(options.n ?? 10); // => 10
/* 注意, 使用 || 和 ?? timeout, title 和 verbos 表达式会求值为不同的结果 */



/**
 * ?? 操作符与 && 和 || 操作符类似, 但优先级并不比它们更高或更低. 如果表达式中混用
 * 了 ?? 和它们中的任何一个, 必须使用圆括号说明先执行哪个操作:
 * 
 * (a ?? b) || c // ?? 先执行, 然后执行 ||
 * a ?? (b || c) // || 先执行, 然后执行 ??
 * a ?? b || c // SyntaxError: 必须有圆括号
 */