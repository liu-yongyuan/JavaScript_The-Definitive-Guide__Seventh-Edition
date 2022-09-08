console.log(/^HTML/);
console.log(/[1-9][0-9]*/);
console.log(/\bjavascript\b/i);

let text = "testing: 1, 2, 3";
let pattern = /\d+/g;
console.log(pattern.test(text)); // => true: 存在匹配项
console.log(text.search(pattern)); // => 9: 第一个匹配项的位置
console.log(text.match(pattern)); // => [ '1', '2', '3' ]: 所有匹配项的数组
console.log(text.replace(pattern, "#")); // => testing: #, #, #: 匹配项替换成 #
console.log(text.split(pattern)); // => [ 'testing: ', ', ', ', ', '' ]:  基于数字的拆分
console.log(text.split(/\D+/)); // => [ '', '1', '2', '3' ]: 基于非数字的拆分
