let book = {};
console.log(book.subtitle);

console.log("\n====== XXX ======\n");

try {
  let len = book.subtitle.length;
  console.log(`subtitle len: ${len}`); // =>  Cannot read properties of undefined (reading 'length')
} catch (e) {
  console.error(e);
}
console.log("\n====== XXX ======\n");

/**
 * 如果 . 的坐标是 null 或 undefined, 则属性访问表达式会失败.
 * 因此再写类似 book.author.surname 这样的表达式时, 要确保 book 和 book.author 是有定义的.
 * 以下是两种防止这类问题的写法:
 */

//简单但麻烦的技术
let surname = undefined;
if (book) {
  if (book.author) {
    surname = book.author.surname;
  }
}

// 取得 surname, null 或 undefined 的简洁的惯用技术
surname = book && book.author && book.author;


/**
 * ES2020 通过 ?. 支持条件式属性访问, 用它可以把前面的赋值表达式
 * 改写成: 
 */
let surname1 = book?.author?.surname;