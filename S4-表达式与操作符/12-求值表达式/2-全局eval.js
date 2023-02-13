const geval = eval;
let x = "global",
  y = "global";
console.log(x, y);
function f() {
  let x = "local";
  eval("x += 'changed';");
  return x;
}
function g() {
  let y = "local";
  console.log(y)
  geval("y += 'changed';"); // y is not defined
  return y;
}
console.log(f(), x);
console.log(g(), y);
