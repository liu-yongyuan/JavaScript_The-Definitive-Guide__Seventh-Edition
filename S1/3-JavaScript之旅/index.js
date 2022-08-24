/* 
JavaScript 语言简单介绍
 */

// 双斜杠后面的这些文字都是注释
// 一定要认真阅读注释: 注释是对 JavaScript 代码的解释

// 变量是一个代表值的名字
// 变量要使用 let 关键字声明
let x; //声明一个叫 x 的变量

//可以使用一个等号为变量赋值
x = 0; // 现在变量 x 的值就是 0
console.log(0); // =>0: 变量求值的结果就是它的值

// JavaScript 支持几种不同的值
console.log(x = 1); // 数值
console.log(x = 0.01); // 数值可以是整数或实数
console.log(x = "hello world"); // 文本字符串包含在引号中
console.log(x = 'JavaScript'); // 单引号也用于界定字符串
console.log(x = true); // 布尔值
console.log(x = false); // 另一个布尔值
console.log(x = null); // null 是一个特殊值, 意思是 "没有值"
console.log(x = undefined); // undefined 也是一个特殊值, 与 null 类似

// 对象是 JavaScript 最重要的数据类型
// 对象是一个名 / 值对的集合, 或者是一个字符串到值的映射
let book = {  // 对象包含在一对大括号中
  topic: "JavaScript", // 属性 topic 的值是 JavaScript
  edition: 7 // 属性 edition 的值是 7 
};
console.log(book)

// 使用 . 或 [] 访问对象的属性
console.log(book.topic) // => "JavaScript"
console.log(book['edition']) // => 7: 另一种访问属性值的方式
console.log(book.author = "Flanagan"); // 通过复制创建新的属性
console.log(book.contents = {});  // {} 是一个没有属性的空对象

// 使用 ?. (ES2020) 条件式访问属性
// 可选链操作符 ?. 直接在链式调用的时候判断，左侧的对象是否为 null 或 undefined  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining
console.log(book.contents?.ch01?.sect1) // => undefined: book.contents 没有 ch01 这个属性

// JavaScript 也支持值的数组(数值索引的列表)
let primes = [2, 3, 5, 7]; // 包含 4 个值的数组, [ 和 ] 是定界符
console.log(primes[0]);  // => 2: 数组的第一个(索引为0)元素
console.log(primes.length);  // => 4: 数组包含多少个元素
console.log(primes[primes.length - 1]) // => 7: 数组的最后一个元素
console.log(primes[4] = 9);  // 通过赋值添加新元素
console.log(primes[4] = 11); // 或者通过赋值修改已有元素
let empty = [] // [] 是一个没有元素的空数组
console.log(empty.length);   // => 0

// 数组和对象可以保存数组和对象
let points = [  // 包含 2 个元素的数组
  {x: 0, y: 0}, // 每个元素都是一个对象
  {x: 1, y: 1}
]
console.log(points);
let data = {  //包含 2 个属性的对象
  trial1: [[1,2], [3,4]], // 每个属性的值都是一个数组
  trial2: [[2,3], [4,5]]  // 数组的元素也是数组
}
console.log(data);

// 操作符用于操作之(操作数)以生产新值
// 算数操作符是最简单的操作符
console.log(3 + 2);  // => 5: 加
console.log(3 - 2);  // => 1: 减
console.log(3 * 2);  // => 6: 乘
console.log(3 / 2);  // => 1.5: 除
console.log(points[1].x - points[0].x); // => 1: 更复杂的操作数也可以
console.log("3" + "2");  // => "32": +号用于计算数值加法或拼接字符串

// JavaScript 定义了一些简写的算数操作符
let count = 0;  // 定义变量
console.log(count++);        // 递增变量
console.log(count--);  // 递减变量
console.log(count += 2); // 加 2: 等价于 count = count + 2;
console.log(count *= 3); // 乘 3: 等价于 count = count * 3;
console.log(count); // => 6: 变量名也是表达式

// 相等和关系操作符测试两个值是否相等. 不等.
// 小于, 大于, 等等. 它们的求值为 true 或 false
let x1 = 2, y1 =3; // 这里的 = 号用于赋值, 不是测试相等
console.log(x1 === y1);  // => false: 相等操作符
console.log(x1 !== y1);  // => true: 不相等操作服务
console.log(x1 < y1); // => true: 小于操作符
console.log(x1 <= y1);  // => true: 小于等于操作符
console.log(x1 > y1);
console.log(x1 >= y1);
console.log("two" === "three");
console.log("two" > "three");
console.log(false === ( x1 > y1));

// 逻辑操作符组合或反转布尔值
console.log((x1 === 2) && ( y1 === 3));
console.log((x1 > 3) || (y1 < 3));
console.log(!(x1 === y1));

// 函数是可以调用的有参数的 JavaScript 代码块
function plus1(x){
  return x + 1;
}
console.log(plus1(y1));  // => 4: y1 是 3, 因此这次调用返回的是 3 + 1

let square = function (x) {
  return x * x;
}
console.log(square(y1)); // => 9: y1 是 3, 3 * 3 等于 9

const plus1_1 = x => x + 1; // 输入 x 映射为输出 x + 1
const square_1 = x => x * x; // 输入 x 映射为 x * x
console.log(plus1_1(y1)) // => 4
console.log(square_1(y1)) // => 9

let a = []; // empty arrary
console.log(a) // => []
a.push(1, 2, 3); // push() 方法为数组添加元素
console.log(a) // => [1, 2, 3]
a.reverse();  // 另一个方法 reverse() 对元素进行排序
console.log(a) // => [3, 2, 1]

points.dist = function(){
  let p1 = this[0];
  let p2 = this[1];
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  return Math.sqrt(a * a + b * b);
}
console.log(points.dist()) // Math.SQRT2

function abs(x){
  if(x >= 0){
    return x;
  }else{
    return -x;
  }
}
console.log(abs(-10) === abs(10)) // => true

function sum(array){
  let sum = 0;
  for(let x of array){
    sum += x;
  }
  return sum;
}
console.log(sum(primes)) // => 28

function factorial(n){
  let product = 1;
  while(n > 1){
    product *= n;
    n--;
  }
  return product;
}
console.log(factorial(4)) // => 24: 1*4*3*2

function factorial2(n){
  let i, product = 1;
  for(i = 2; i <= n; i++){
    product *= i;
  }
  return product;
}
console.log(factorial2(5)); // => 120

class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  distance(){
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}
let p = new Point(1, 1);
console.log(p.distance()) //=> Math.SQRT2
console.log(Math.SQRT2) // => Math.SQRT2