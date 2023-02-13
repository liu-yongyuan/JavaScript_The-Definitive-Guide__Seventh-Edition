const name = "Yongy";
let msg = "Hello, " + "world";
let greeting = "Welcome to my blog, " + " " + name;
console.log(msg); // => Hello, world
console.log(greeting); // =>Welcome to my blog,  Yongy

console.log("\n====== XXX ======\n");

console.log(msg.length); //=>

console.log("\n====== XXX ======\n");

/**
 * 操作字符串的 API
 */
let s = "Hello, world";
/**
 * 取字符串的一部分
 */
console.log(s.substring(1, 4)); // => "ell": 第 2~4 个字符
console.log(s.slice(1, 4)); // => "ell": 同上
console.log(s.slice(-3)); // => "rld": 最后 3 个字符
console.log(s.split(", ")); // => ["Hello", "world"]: 从定界符处拆开
/**
 * 搜索字符串
 */
console.log(s.indexOf("l")); // => 2: 第一个字母 l 的位置
console.log(s.indexOf("l", 3)); // => 3: 位置 3 后面第一个"l"的位置
console.log(s.indexOf("zz")); // => -1: s 并不包含字串"zz"
console.log(s.lastIndexOf("l")); // => 10: 最后一个字母 l 的位置
/**
 * ES6 及之后版本中的布尔值搜索函数
 */
console.log(s.startsWith("Hell")); // => true: 字符串是以这些字符开头的
console.log(s.endsWith("!")); // => false: s 不是以它结尾的
console.log(s.includes("or")); // => true: s 包含子串"or"
/**
 * 创建字符串的修改版本
 */
console.log(s.replace("llo", "ya")); // => Heya, world:
console.log(s.toLowerCase()); // => hello, world:
console.log(s.toUpperCase()); // => HELLO, WORLD:
console.log(s.normalize()); // => Hello, world: Unicode NFC归一化: ES6 新增
console.log(s.normalize("NFD")); // => Hello, world: NFD 归一化. 还有 NFKC 和 NFKD
/**
 * 访问字符串种的个别字符
 */
console.log(s.charAt(0)); // => H: 第一个字符
console.log(s.charAt(s.length - 1)); // => d: 最后一个字符
console.log(s.charCodeAt(0)); // => 72: 指定位置的 16 位数值
console.log(s.codePointAt(0)); // => 72: ES6, 适用于码点大于 16 位的情形
/**
 * ES2017 新增的字符串填充函数
 */
console.log("x".padStart(3)); // =>   x:在左侧添加空格,让字符长度变成 3
console.log("x".padEnd(3)); // => x  :在右侧添加空格, 让字符串长度变成 3
console.log("x".padStart(3, "*")); // => **x: 在左侧添加星号, 让字符串长度变成 3
console.log("x".padEnd(3, "-")); // => x--:在右侧添加破折号, 让字符串长度变成 3
/**
 * 删除空格函数. trim()是 ES5 就有的, 其他是 ES2019 增加的
 */
console.log(" test ".trim()); // => test: 删除开头和末尾的空格
console.log(" test ".trimStart()); // => test : 删除左侧空格. 也叫 trimLeft
console.log(" test ".trimEnd()); // =>  test: 删除右侧空格, 也叫 trimRight
/**
 * 未分类字符串方法
 */
console.log(s.concat("!")); // => Hello, world!: 可以用 + 操作符代替
console.log("<>".repeat(5)); // => <><><><><>: 拼接 n 次, ES6 新增

/* 记住, JavaScript 中的字符串是不可修改的. 像 replace() 和 toUpperCase() 这样的方法都返回新字符串, 它们并不会修改调用它们的字符串. */
