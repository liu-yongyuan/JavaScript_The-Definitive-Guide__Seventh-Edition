/**
 * ES2020 增加了两个新的属性访问表达式:
 *
 *    expression ?. identifier
 *    expression ?.[ expression ]
 *
 */

let a = { b: null };
a.b?.c.d; // => undefined

a = { b: {} };
// a.b?.c.d // => TypeError
a.b?.c?.d; // => undefined
