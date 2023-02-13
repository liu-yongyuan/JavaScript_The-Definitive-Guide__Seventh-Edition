/**
 * 初始化,测试和更新. 语法如下:
 *
 * for( initialize ; test ; increment )
 *  statement
 *
 * initialize, test 和 increment 是三个表达式(以分号隔开),
 * 分别负责初始化, 测试和递增
 */

for (let count = 0; count < 10; count++) {
  console.log(count);
}
console.log("\n====== XXX ======\n");

let i,
  j,
  sum = 0;
for (i = 0, j = 10; i < 10; i++, j--) {
  sum += i * j;
  console.log(sum);
}
console.log("\n====== XXX ======\n");

