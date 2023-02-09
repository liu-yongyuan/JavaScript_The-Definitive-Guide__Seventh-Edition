const { Range } = require("./0-类和构造函数");

const r = new Range(1, 30);

console.log(r instanceof Range); // => true

function Strange() {}
Strange.prototype = Range.prototype;
console.log(new Strange() instanceof Range); // => true
