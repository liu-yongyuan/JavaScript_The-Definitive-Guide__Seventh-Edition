let target = { x: 1 },
  source = { y: 2, z: 3 };

for (let key of Object.keys(source)) {
  target[key] = source[key];
}
console.log(target); // => { x: 1, y: 2, z: 3 }
console.log("\n====== XXX ======\n");

/* 简单复制 */
const o1 = {};
const defaults = { x: 0, y: 1, z: 2 };
Object.assign(o1, defaults);
console.log(o1); // => { x: 0, y: 1, z: 2 }
console.log("\n====== XXX ======\n");

/* 覆盖再覆盖 */
const o2 = { x: 1 };
/* 1. defaults 属性覆盖到对象字面量
   2. o2 属性覆盖到对象字面量
   3. 结果就是 x:0 => 首次, x:1 尾次
 */
const o3 = Object.assign({}, defaults, o2);
console.log(o3); // => { x: 1, y: 1, z: 2 }
console.log("\n====== XXX ======\n");

/* 利用扩展操作符 ... 完成对象复制和覆盖 */
const o4 = { ...defaults, ...o2 };
console.log(o4); // => { x: 1, y: 1, z: 2 }
console.log("\n====== XXX ======\n");

/**
 * 为避免额外的对象创建和复制, 也可以重写一版 Object.assign(), 只复制
 * 那些不存在的属性:
 */
// 与 Object.assign() 类似, 但不覆盖已经存在的属性
//(同时也不处理符号属性)
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      // 这里跟 Object.assign() 不同
      if (!(key in target)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
const o5 = Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 });
console.log(o5); // => { x: 2, y: 3, z: 4 }
const o6 = merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 });
console.log(o6); // => { x: 1, y: 2, z: 4 }
console.log("\n====== XXX ======\n");

/**
 * 用于从一个对象中删除另一个模板对象没有的属性
 *
 * restrict({ x: 1, y: 2, z: 3 }, { x: 2, y: 3 }) => { x: 1, y: 2 }
 *
 * restrict({ x: 1, y: 2, z: 3 }, { x: 1, y: 2 }, { y: 3 }) => { y: 2 }
 *
 * restrict({ x: 1, y: 2, z: 3 }, { x: 1, y: 2, z: 3 }, { z: 3 }) => { z: 3 }
 *
 * @param {*} target
 * @param  {...any} sources
 */
function restrict(target, ...sources) {
  for (let key of Object.keys(target)) {
    for (let source of sources) {
      if (!(key in source)) {
        delete target[key];
      }
    }
  }
  return target;
}
const o7 = restrict({ x: 1, y: 2, z: 3 }, { x: 1, y: 2, z: 3 }, { z: 3 });
console.log(o7); // => { z: 3 }
console.log("\n====== XXX ======\n");

/**
 * 用于从一个对象中删除另一个对象包含的所有属性
 *
 * subtract({ x: 1, y: 2, z: 3 }, { x: 1, y: 2 }, { y: 3 }) => { z: 3 }
 *
 * subtract({ x: 1, y: 2, z: 3 }, { z: 1, y: 2 }) => { x: 1 }
 *
 * subtract({ x: 1, y: 2, z: 3 }, { z: 1, y: 2, x: 1 }) => {}
 * 
 * @param {*} target
 * @param  {...any} sources
 * @returns
 */
function subtract(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      delete target[key];
    }
  }
  return target;
}
const o8 = subtract({ x: 1, y: 2, z: 3 }, { x: 1, y: 2 }, { y: 3 });
console.log(o8);
console.log(subtract({ x: 1, y: 2, z: 3 }, { z: 1, y: 2, x: 1 }));
console.log("\n====== XXX ======\n");

const o9 = Object.assign({}, {x:undefined, a:1});
console.log(o9); // => { x: undefined, a: 1 }
console.log("\n====== XXX ======\n");
