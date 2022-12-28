/* slice()
slice() 方法返回一个数组的切片(slice)或者是子数组.
该函数接受 2 个参数, 分布用于指定要返回切片的起止位置.
slice() 不会更改原数组
 */
let a = [1, 2, 3, 4, 5];
console.log(a.slice(0, 3)); // => [ 1, 2, 3 ]
console.log(a.slice(3)); // => [ 4, 5 ]
console.log(a.slice(1, -1)); // => [ 2, 3, 4 ]
console.log(a.slice(-3, -2)); // => [ 3 ]
console.log("\n====== XXX ======\n");

/* splice()
splice() 是一个对数组进行插入和删除的通用方法.
splice() 会更改原数组
 */
let q = [1, 2, 3, 4, 5, 6, 7, 8];
q.splice(4);
console.log(q); // => [ 1, 2, 3, 4 ]
q.splice(1, 2);
console.log(q); // => [ 1, 4 ]
q.splice(1, 1);
console.log(q); // => [ 1 ]
console.log("\n====== XXX ======\n");

q.splice(2, 0, "a", "b");
console.log(q); // => [ 1, 'a', 'b' ]
q.splice(2, 2, [1, 2], 3);
console.log(q); // => [ 1, 'a', [ 1, 2 ], 3 ]
console.log("\n====== XXX ======\n");

/* fill()
fill() 方法将数组的元素或切片设置为指定的值.
会修改调用它的数组, 也返回修改后的数组
 */
let p = new Array(5);
console.log(p.fill(0)); // => [ 0, 0, 0, 0, 0 ]
console.log(p.fill(9, 1)); // => [ 0, 9, 9, 9, 9 ]
console.log(p.fill(8, 2, -1)); // => [ 0, 9, 8, 8, 9 ]
console.log("\n====== XXX ======\n");

/* copyWithin()
copyWithin() 把数组切片复制到数组中的新位置.
会修改数组并返回修改后的数组, 但不会改变数组的长度.
 */
let x = [1, 2, 3, 4, 5];
console.log(x.copyWithin(1)); // => [ 1, 1, 2, 3, 4 ]
console.log(x.copyWithin(2, 3, 5)); // => [ 1, 1, 3, 4, 4 ]
console.log(x.copyWithin(0, -2)); // => [ 4, 4, 3, 4, 4 ]
console.log("\n====== XXX ======\n");
