/* 稠密数组, length 就是其内元素的个数 */
console.log([].length); // => 0
console.log(["a", "b", "c"].length); // => 3
console.log("\n====== XXX ======\n");

/* 稀疏数组 length 属性会大于元素个数,
无论稀疏与否其内元素不会大于或等于 length 属性 */
let a = [];
a = [1, 2, 3, 4, 5];
a.length = 3;
console.log(a); // => [ 1, 2, 3 ]
a.length = 0;
console.log(a); // => []
a.length = 5;
console.log(a); // => [ <5 empty items> ]
