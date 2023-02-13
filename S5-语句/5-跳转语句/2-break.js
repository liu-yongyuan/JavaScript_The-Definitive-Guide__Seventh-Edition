const target = 5;
const theArray = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < theArray.length; i++) {
  if (theArray[i] === target) {
    break;
  }
  console.log(theArray[i]);
}

console.log("\n====== XXX ======\n");

/**
 * JavaScript 也允许 break 关键字后面跟一个语句标签
 *
 *  break labelname;
 *
 */
let matrix = [
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 3],
  [5, 3],
  [6, 3],
];
let sum = 0,
  success = false;
computeSum: if (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    let row = matrix[x];
    if (!row) break computeSum;
    for (let y = 0; y < row.length; y++) {
      let cell = row[y];
      if (isNaN(cell)) break computeSum;
      sum += cell;
    }
  }
  success = true;
  console.log(success, sum)
}
