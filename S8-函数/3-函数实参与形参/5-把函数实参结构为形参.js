function vectorAdd([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2];
}
console.log(vectorAdd([1, 2], [3, 4])); // =>[ 4, 6 ]
console.log("\n====== XXX ======\n");

function vectorMultiply({ x, y }, scalar) {
  return { x: x * scalar, y: y * scalar };
}
console.log(vectorMultiply({ x: 1, y: 2 }, 2)); // =>{ x: 2, y: 4 }
console.log("\n====== XXX ======\n");

function vectorAdd1({ x: x1, y: y1 }, { x: x2, y: y2 }) {
  return {
    x: x1 + x2,
    y: y1 + y2,
  };
}
console.log(vectorAdd1({ x: 1, y: 2 }, { x: 3, y: 4 })); // =>{ x: 4, y: 6 }
console.log("\n====== XXX ======\n");

function vectorMultiply1({ x, y, z = 0 }, scalar) {
  return {
    x: x * scalar,
    y: y * scalar,
    z: z * scalar,
  };
}
console.log(vectorMultiply1({ x: 1, y: 2 }, 2)); // =>{ x: 2, y: 4, z: 0 }
console.log("\n====== XXX ======\n");

function arraycopy({ from, to = from, n = from.length, fromIndex = 0, toIndex = 0 }) {
  let valuesToCopy = from.slice(fromIndex, fromIndex + n);
  to.slice(toIndex, 0, ...valuesToCopy);
  return to;
}
let a = [1, 2, 3, 4, 5],
  b = [9, 8, 7, 6, 5];
console.log(arraycopy({ from: a, n: 3, to: b, toIndex: 4 })); // =>[ 9, 8, 7, 6, 5 ]
console.log("\n====== XXX ======\n");

function f([x, y, ...coords], ...rest) {
  return [x + y, ...rest, ...coords];
}
console.log(f([1, 2, 3, 4], 5, 6)); // =>[ 3, 5, 6, 3, 4 ]
console.log("\n====== XXX ======\n");

function vectorMultiply2({ x, y, z = 0, ...props }, scalar) {
  return {
    x: x * scalar,
    y: y * scalar,
    z: z * scalar,
    ...props,
  };
}
console.log(vectorMultiply2({ x: 1, y: 2, w: -1 }, 2)); // => { x: 2, y: 4, z: 0, w: -1 }
console.log("\n====== XXX ======\n");

function drawCircle({ x, y, radius, color: [r, g, b] }) {
  // some thing
}
console.log("\n====== XXX ======\n");