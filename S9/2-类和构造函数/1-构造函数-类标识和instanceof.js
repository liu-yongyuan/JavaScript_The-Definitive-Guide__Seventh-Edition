const { Range } = require("./0-类和构造函数");

console.log("\n====== XXX ======\n");

const r = new Range(1, 30);
console.log(r instanceof Range); // => true
console.log("\n====== XXX ======\n");

function Strange() {}
Strange.prototype = Range.prototype;
console.log(new Strange() instanceof Range); // => true
