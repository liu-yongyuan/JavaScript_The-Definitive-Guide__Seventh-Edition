console.log(eval("2+3")); // => 5

eval("var y = 3;");
console.log(y); // => 3;

eval("function f() { return y+1; }");
console.log(f()); // => 4