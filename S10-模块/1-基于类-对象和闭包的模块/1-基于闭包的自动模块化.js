const modules = {};
function require(moduleName) {
  return modules[moduleName];
}

modules["sets.js"] = (function () {
  const exports = {};

  exports.BitSet = class BitSet {};

  return exports;
})();

modules["stats.js"] = (function () {
  const exports = {};

  const sum = (x, y) => x + y;
  const square = (x) => x * x;
  exports.mean = function (data) {};
  exports.stddev = function (data) {};

  return exports;
})();

const stats = require("stats.js");
const BitSet = require("sets.js").BitSet;
