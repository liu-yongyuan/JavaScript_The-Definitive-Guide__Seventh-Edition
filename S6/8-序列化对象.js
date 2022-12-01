let o = { x: 1, y: { z: [false, null, ""] } };
let s = JSON.stringify(o);
let p = JSON.parse(s);
console.log(s); // => {"x":1,"y":{"z":[false,null,""]}}
console.log(p); // => { x: 1, y: { z: [ false, null, '' ] } }


/* 
  JSON 语法是 JavaScript 语法的子集, 不能表示所有 JavaScript 的值.

可以序列号和恢复包括对象, 数组, 字符串, 有限数值, true, false 和 null.
NaN. Infinitiy 和 -Infinity 会被序列化为 null. 

日期对象会被序列化为 ISO格式的日期字符串, 但 JSON.parse() 会保持其字符串形式,
不会恢复成对象.

函数, RegExp 和 Error 对象以及 undefined 值不能被序列化或恢复.
JSON.stringify() 只序列化对象的可枚举自有属性. 如果属性值无法序列化, 则该属性会从
输出的字符串中删除. JSON.stringify() 和 JSON.parse() 都接收可选的第二个参数,
用于自定义序列化及恢复操作. 11.6 包含两个函数的完整介绍.
 */