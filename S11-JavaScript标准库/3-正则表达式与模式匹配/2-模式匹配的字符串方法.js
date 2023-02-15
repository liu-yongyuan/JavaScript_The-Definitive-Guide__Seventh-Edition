const { next, log } = require("../../utils/log");

log("JavaScript".search(/script/iu)); // => 4
log("Python".search(/script/iu)); // => -1
next();

log("the javascript use the HTML Page.".replace(/JavaScript/gi, "JavaScript")); // => the JavaScript use the HTML Page.

let quote = /"([^"]*)"/;
log('He said "stop"'.replace(quote, "<<$1>>")); // => He said <<stop>>

quote = /"(?<quotedText>[^"]*)"/g;
log('He said "stop"'.replace(quote, "<<$<quotedText>>>")); // => He said <<stop>>
next();

let s = "15 times 15 is 225";
log(s.replace(/\d+/gu, (n) => parseInt(n).toString(16))); // => f times f is e1
next();

log("7 plus 8 equals 15".match(/\d+/g)); // => [ '7', '8', '15' ]

let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text = "Visit my blog at http://www.example.com/~david";
let match = text.match(url);
let fullurl, protocal, host, path;
if (match !== null) {
  fullurl = match[0];
  protocal = match[1];
  host = match[2];
  path = match[3];
}
log(`[fullurl: ${fullurl}] --- [protocal: ${protocal}] --- [host: ${host}] --- [path: ${path}]`); /* 
=>[fullurl: http://www.example.com/~david] --- [protocal: http] --- [host: www.example.com] --- [path: ~david]
 */
next();

let vowel = /[aeiou]/y;
log("test".match(vowel)); // => null
log((vowel.lastIndex = 1)); // => 1
log("test".match(vowel)[0]); // => e
log(vowel.lastIndex); // => 2
log("test".match(vowel)); // => null
log(vowel.lastIndex); //=>0
next();

let words = /\b\p{Alphabetic}+\b/gu;
let text1 = "This is a naive test of the matchAll() method";
function textMatchAll(text) {
  for (let word of text.matchAll(words)) {
    log(`Found '${word[0]}' at index ${word.index}`);
  }
}
textMatchAll(text1);
/* =>
Found 'This' at index 0
Found 'is' at index 5
Found 'a' at index 8
Found 'naive' at index 10
Found 'test' at index 16
Found 'of' at index 21
Found 'the' at index 24
Found 'matchAll' at index 28
Found 'method' at index 39
 */
next();

let text2 = "这是 一个 属于 本地的 测试 即将 用于 matchAll() 函数";
textMatchAll(text2);
/* =>
Found 'matchAll' at index 22
对汉字无用
 */
next();

log("123,456,789".split(",")); // => [ '123', '456', '789' ]
log("1, 2, 3,\n4, 5".split(/\s*, \s*/)); // => [ '1', '2', '3,\n4', '5' ]
let htmlTag = /<([^>]+)>/;
log("Testing<br/>1,2,3".split(htmlTag)); // => [ 'Testing', 'br/', '1,2,3' ]
