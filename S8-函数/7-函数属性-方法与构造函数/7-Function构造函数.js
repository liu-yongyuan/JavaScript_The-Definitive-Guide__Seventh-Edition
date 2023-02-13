const f = new Function("x", "y", "return x*y;");
/*
  两者等价:
const f = function(x, y){ return x * y; }; 
 */
console.log(f(2, 2)); // => 4

console.log("\n====== XXX ======\n");

let scope = "global";
function constructFunction(){
  let scope = "local";
  return new Function("return scope");
}
// console.log(constructFunction()()); 报错, scope is not defined
console.log("\n====== XXX ======\n");