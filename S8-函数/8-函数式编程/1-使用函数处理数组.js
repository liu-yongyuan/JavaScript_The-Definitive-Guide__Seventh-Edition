function fnc1() {
  // 非函数式编程
  let data = [1, 1, 3, 5, 5];
  let total = 0;
  for (let i = 0; i < data.length; i++) total += data[i];
  //求平均值
  let mean = total / data.length;
  console.log(mean); // => 3 平均值为 3

  // 相对于平均值偏差的平方
  total = 0;
  for (let i = 0; i < data.length; i++) {
    let deviation = data[i] - mean;
    total += deviation * deviation;
  }
  let stddev = Math.sqrt(total / (data.length - 1));
  console.log(stddev); // => 2
}
fnc1();
console.log("\n====== XXX ======\n");

function fnc2() {
  // 函数式编程
  const sum = (x, y) => x + y;
  const square = (x) => x * x;

  let data = [1, 1, 3, 5, 5];
  let mean = data.reduce(sum) / data.length;
  console.log(mean); // => 3

  let deviations = data.map((x) => x - mean);
  let stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));
  console.log(stddev); // => 2
}
fnc2();
console.log("\n====== XXX ======\n");
