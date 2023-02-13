/**
 * 对象字面量的最简单形式是包含在一堆花括号中的一组逗号分隔的 "名:值"对.
 * 属性名是 JavaScript 标识符或字符串子民阿里(允许空字符串)
 */
let empty = {};
let point = { x: 0, y: 0 };
let p2 = { x: point.x, y: point.y + 1 };
let book = {
  "main title": "JavaScript",
  "sub-title": "The Definitive Guide",
  for: "all audiences",
  auther: {
    firstname: "David",
    surname: "Flanagan",
  },
};

console.log(book)