/**
 * BigInt 数值类型的值是整数
 * 该类型主要是为了表示 64 位整数, 这对于兼容很多其他语言和 API 是必需的.
 * 但 BigInt 值可能有数千甚至数百万个数字, 可以满足对大数的需求.(不过, BigInt 不适合加密, 因为它们没有考虑防止时序攻击).
 */
console.log(1234n); // => 1234n: 一个不太大的 BigInt 字面量
console.log(0b111111n); // =>63n: 二进制 BigInt
console.log(0o777n); // => 511n: 八进制 BigInt
console.log(0x8_000_000_000_000_00n); // => 2n**63n: 一个 64 位整数

console.log("\n====== XXX ======\n");

/**
 * 可以用 BigInt() 函数把常规 JavaScript 数值或字符串转换位 BigInt 值:
 */
console.log(BigInt(Number.MAX_SAFE_INTEGER)); //=> 9007199254740991n
let string = "1" + "0".repeat(100);
console.log(BigInt(string)); // => 10n**100n: 一个天文数字 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
console.log(Number(string)); // => 1e+100: 科学计数法
