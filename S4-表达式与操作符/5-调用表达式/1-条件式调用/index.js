function square(x, log) {
  if (log) {
    log(x);
  }
  return x * x;
}
square(2, (x) => console.log(x));

function square1(x, log) {
  log?.(x);
  return x * x;
}
square1(2);

let f = null,
  x = 0;
try {
  f(x++);
} catch (e) {
  console.log(x);
}

f?.(x++);
console.log(x);
