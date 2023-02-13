let point = {
  x: 1,
  y: 2,
  toString() {
    return `(${this.x}, ${this.y})`;
  },
  toJSON() {
    return this.toString();
  },
};
console.log(JSON.stringify([point])); // => ["(1, 2)"]

/* JSON 会从要序列化的对象上寻找 toJSON() 方法. 如果存在该属性则调用,
然后序列化该方法的返回值.
 */
