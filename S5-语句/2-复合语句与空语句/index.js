{
  const x = Math.PI;
  const cx = Math.cos(x);
  console.log(`cos(n) = ${cx}`); // => -1
}

/**
 * 空语句
 */
// 初始化一个数组 a
const a = [, , , , , ,];
for (let i = 0; i < a.length; a[i++] = i);
console.log(a); // => [ 1, 2, 3, 4, 5, 6 ]

const an = 0,
  bn = 1;
if (an === 0 || bn === 0); // 这行什么也不会做
  o = null; // 不会执行

for (let i = 0; i < a.length; a[i++] = 0);
console.log(a); // => [ 0, 0, 0, 0, 0, 0 ]
