let stack = [];
/* push() 和 pop()
push() 方法会在数组末尾添加一个或多个元素
pop() 方法会删除数组最末尾的元素, 减少数组长度
 */
stack.push(1, 2);
console.log(stack); // => [ 1, 2 ]
stack.pop();
console.log(stack); // => [ 1 ]
stack.push(3);
console.log(stack); // => [ 1, 3 ]
stack.pop();
console.log(stack); // => [ 1 ]
stack.push([4, 5]);
console.log(stack); // => [ 1, [ 4, 5 ] ]
stack.pop();
console.log(stack); // => [ 1 ]
stack.pop();
console.log(stack); // => []
console.log("\n====== XXX ======\n");

/* unshift() 和 shift()
unshift() 在数组开头添加一个或多个元素
shift() 删除并返回数组的第一个元素
 */
let q = [];
q.push(1, 2);
console.log(q); // => [ 1, 2 ]
q.shift();
console.log(q); // => [ 2 ]
q.push(3);
console.log(q); // => [ 2, 3 ]
q.shift();
console.log(q); // => [ 3 ]
q.shift();
console.log(q); // => []
console.log("\n====== XXX ======\n");

let a = [];
a.unshift(1);
console.log(a); // => [ 1 ]
a.unshift(2);
console.log(a); // => [ 2, 1 ]
console.log("\n====== XXX ======\n");
a = [];
a.unshift(1, 2);
console.log(a); // => [ 1, 2 ]
console.log("\n====== XXX ======\n");
