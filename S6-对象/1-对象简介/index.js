let o = {};
Object.defineProperties(o, {
  name: {
    // 数据属性
    configurable: true, // => 特性指定是否可以删除属性,以及是否可修改其特性的名字
    enumerable: true, // => 特性指定是否可以在 for/in 循环中返回属性的名字
    writable: true, // => 特性指定是否可以设置属性的值
    value: "yongy",
  },
});

console.log(o); // => { name: 'yongy' }

o.name = "aaa";
console.log(o); // => { name: 'aaa' }
