/* 对象的属性通过计算得到或在函数中返回.不能对这种属性使用基本字面量. 
为此, 必须先创建一个对象,然后再为它添加想要的属性:
 */
const property_name = "p1";
function computePropertyName() {
  return "p" + 2;
}
let o = {};
o[property_name] = 1;
o[computePropertyName()] = 2;
console.log(o); // => { p1: 1, p2: 2 }
console.log("\n====== XXX ======\n");

/* 而使用 ES6 称为计算属性的特性可以更简单地创建类似对象, 
这个特性可以让你直接把前面代码中的方括号放在对象字面量中
*/
const property_name1 = "p1";
function computePropertyName2() {
  return "p" + 2;
}
let p = {
  [property_name1]: 1,
  [computePropertyName2()]: 2,
};
console.log(p); // => { p1: 1, p2: 2 }
console.log(p.p1 + p.p2); // => 3
