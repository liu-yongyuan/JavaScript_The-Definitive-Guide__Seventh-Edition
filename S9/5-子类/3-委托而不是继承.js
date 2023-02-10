console.log("\n====== XXX ======\n");
/**
 * 一个类似 Set 的类, 但会记录值被添加的次数
 * 可以像使用 Set 一样调用 add() 和 remove(),
 * 调用 count() 获取某个值已经被添加了多少次
 * 默认迭代器回送至少被添加国 1 次的值. 如果想
 * 迭代[value, count]对, 使用 entries()
 */
class Histogram {
  constructor() {
    this.map = new Map();
  }

  count(key) {
    return this.map.get(key) || 0;
  }

  has(key) {
    return this.count(key) > 0;
  }

  get size() {
    return this.map.size;
  }

  add(key) {
    this.map.set(key, this.count(key) + 1);
  }

  delete(key) {
    let count = this.count(key);
    if (count === 1) {
      this.map.delete(key);
    } else if (count > 1) {
      this.map.set(key, count - 1);
    }
  }

  [Symbol.iterator]() {
    return this.map.keys();
  }

  keys() {
    return this.map.keys();
  }
  values() {
    return this.map.values();
  }
  entries() {
    return this.map.entries();
  }
}
