/**
 * continue 语句与 break 类似, 但不会退出循环, 而是从头开始执行循环
 * 的下一次迭代
 *
 *    continue;
 *
 * continue 语句也可以带标签:
 *
 *  continue labelname;
 *
 */
let data = [1, 2, 3, 4, null, undefined, "", false, 5, 6, 7, 8];
let total = 0;
for (let i = 0; i < data.length; i++) {
  if (!data[i]) continue;
  total += data[i];
}
console.log(total);
