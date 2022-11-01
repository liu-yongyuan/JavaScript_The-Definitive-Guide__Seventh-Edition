/**
 * yield 语句非常类似于 return 语句, 但只能用在 ES6 新增的生成器函数中,
 * 以回送生成的值序列中的下一个值, 同时不会真正的返回:
 */
function* range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

const data = range(0, 10);
console.log(data); // => Object [Generator] {}, 非数组, 而是一个生成器对象

for(const value of data){
  console.log(value)
}
