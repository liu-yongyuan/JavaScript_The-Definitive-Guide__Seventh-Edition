let absNum = Math.abs.call(Math, -100); // 一个个参数进行接收
console.log(absNum); // => 100
let biggest = Math.max.apply(Math, [1, 2]); // 接收一个数组
console.log(biggest); // => 2
console.log("\n====== XXX ======\n");

function trace(o, m) {
  let original = o[m];
  o[m] = function (...args) {
    console.log(new Date(), "Entering:", m);
    let result = original.apply(this, args);
    console.log(new Date(), "Exiting:", m);
    return result;
  };
}
