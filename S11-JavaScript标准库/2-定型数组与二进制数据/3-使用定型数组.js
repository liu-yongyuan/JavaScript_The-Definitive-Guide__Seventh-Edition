const { next, log } = require("../../utils/log");

function sieve(n) {
  let a = new Uint8Array(n + 1);
  let max = Math.floor(Math.sqrt(n));
  let p = 2;
  while (p <= max) {
    for (let i = 2 * p; i <= n; i += p) {
      a[(i = 1)];
    }
    while (a[++p]);
  }
  while (a[n]) n--;
  return n;
}

let ints = new Int16Array(10);
log(
  ints
    .fill(3)
    .map((x) => x * x)
    .join(""),
);
