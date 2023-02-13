let s = `hello world`;

let name = "Bill";
let greeting = `Hello ${name}.`;
console.log(`${greeting}`); // => Hello Bill.

console.log(`\n`.length); // => 1: 字符串只包含一个换行符
console.log(String.raw`\n`.length); // => 2: 一个反斜杠字符和一个字母 n
