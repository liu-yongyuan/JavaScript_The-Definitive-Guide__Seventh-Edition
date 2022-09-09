/**
 * JavaScript 有两个操作符用于测试两个值是否相等.
 * 1. === 严格相等操作符, 两者类型不是同一个就不会进行比较
 * 2. == 操作符, 会进行自动转换
 */
// == 为 true 的情况
console.log(null == undefined);
console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log("\n====== XXX ======\n");

// == 为 true, === 为 false
console.log(null === undefined);
console.log("0" === 0);
console.log(0 === false);
console.log("0" === false);