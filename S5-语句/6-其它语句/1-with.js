/**
 * with (object)
 *  statement
 *
 * with 语句在严格模式下禁用
 */
let o = {
  x: 1,
  y: 2,
};

with (o) {
  console.log(x, y); // => 1 2
}
