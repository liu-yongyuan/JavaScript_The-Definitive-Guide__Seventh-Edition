/* forEach() */
let data = [1, 2, 3, 4, 5, 6],
  sum = 0;
data.forEach((value) => {
  sum += value;
});
console.log(sum); // => 21
console.log("\n====== XXX ======\n");

data.forEach(function (v, i, a) {
  a[i] = v + 1;
});
console.log(data); // => [ 2, 3, 4, 5, 6, 7 ]
console.log("\n====== XXX ======\n");

/* map() */
let a = [1, 2, 3];
let aTemp = a.map((x) => x * x);
console.log(aTemp); // => [ 1, 4, 9 ]
console.log("\n====== XXX ======\n");

/* filter() */
let a1 = [5, 4, 3, 2, 1];
let a1Filter1 = a1.filter((x) => x < 3);
console.log(a1Filter1); // => [ 2, 1 ]
let a1Filter2 = a1.filter((x, i) => i % 2 === 0);
console.log(a1Filter2); // => [ 5, 3, 1 ]
console.log("\n====== XXX ======\n");

/* filter() 会跳过稀疏数组中缺失的元素, 它返回的数组始终是稠密的.
因此可以使用 filter() 方法像下面这样清理掉稀疏数组中的空隙: */
let sparse = [, 1, , 2, , , 3, 4, 5];
console.log(sparse); // => [ <1 empty item>, 1, <1 empty item>, 2, <2 empty items>, 3, 4, 5 ]
let dense = sparse.filter(() => true);
console.log(dense); // => [ 1, 2, 3, 4, 5 ]
/* 如果既想清理空隙,又想删除值为 undefined 与 null 的元素, 则可这样写: */
let sparseTemp = sparse.filter((x) => x !== undefined && x !== null);
console.log(sparseTemp); // => [ 1, 2, 3, 4, 5 ]
console.log("\n====== XXX ======\n");

/* find() 与 findIndex() */
let a2 = [1, 2, 3, 4, 5];
console.log(a2.findIndex((x) => x === 3)); // => 2
console.log(a2.findIndex((x) => x < 0)); // => -1
console.log(a2.find((x) => x % 5 === 0)); // => 5
console.log(a2.find((x) => x % 7 === 0)); // => undefined
console.log("\n====== XXX ======\n");

/* every() 与 some() */
console.log(a2.every((x) => x < 10)); // => true
console.log(a2.every((x) => x % 2 === 0)); // => false
console.log(a2.some((x) => x % 2 === 0)); // => true
console.log(a2.some(isNaN)); // => false
console.log("\n====== XXX ======\n");

/* reduce() 与 reduceRight() */
console.log(a2.reduce((x, y) => x + y, 0)); // => 15
console.log(a2.reduce((x, y) => x * y, 1)); // => 120
console.log(a2.reduce((x, y) => (x > y ? x : y))); // => 5
console.log("\n====== XXX ======\n");

let a3 = [2, 3, 4];
console.log(a3.reduceRight((acc, val) => Math.pow(val, acc))); // => 2.4178516392292583e+24
