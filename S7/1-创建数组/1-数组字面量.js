let empty = []; // 没有元素的数组
let primes = [2, 3, 5, 7, 11]; // 有 5 个数值元素的数组
let misc = [1.1, true, "a"]; // 3 种不通类型的元素, 最后还有一个逗号

/* 数组字面量中的值不要是常量, 可以是任意表达式: */
let base = 1024;
let table = [base, base + 1, base + 2, base + 3];

/* 数组字面量可以包含对象字面量或其它数组字面量: */
let b = [
  [1, { x: 1, y: 2 }],
  [2, { x: 3, y: 4 }],
];

/* 如果数组字面量中连续包含多个逗号, 且逗号之间没有值,则
这个数组就是稀疏的. 这些省略了值的数组元素并不存在,但是按照索引
查询它们时又会返回 undefined */
let count = [1, , 3];
let undefs = [, ,];
