function square(x) {
  return x * x;
}

let s = square;
console.log(square(4)); // => 16
console.log(s(4)); // => 16
console.log("\n====== XXX ======\n");

let o = {
  square,
};
console.log(o.square(16)); // => 256
console.log("\n====== XXX ======\n");

let a = [(x) => x * x, 20];
console.log(a[0](a[1])); // => 400
console.log("\n====== XXX ======\n");

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
}
let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
console.log(i); // => 25
console.log("\n====== XXX ======\n");

const operators = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  pow: Math.pow,
};
function operate2(operation, operand1, operand2) {
  if (typeof operators[operation] === "function") {
    return operators[operation](operand1, operand2);
  }
  throw "unknown operator";
}
console.log(operate2("add", "hello", operate2("add", " ", "world"))); // => hello world
console.log(operate2("pow", 10, 2)); // => 100
