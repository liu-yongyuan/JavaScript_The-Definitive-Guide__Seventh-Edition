const { next, log } = require("../../utils/log");

/* let proxy = new Proxy(target, handlers); */
let t = { x: 1, y: 2 };
let p = new Proxy(t, {});
log(p.x); // => 1
delete p.y;
log(t.y); // => undefined
p.z = 3;
log(t.z); // => 3
next();

function accessTheDatabase() {
  return 42;
}
let { proxy, revoke } = Proxy.revocable(accessTheDatabase, {});
log(proxy()); // => 42
log(revoke()); // => undefined
/* log(proxy()); => proxy that has been revoked*/
next();

// 使用代理创建一个对象, 让它看起来似乎什么属性都有
// 只不过每个属性的值就是这个属性的名字
let identity = new Proxy(
  {},
  {
    // 每个属性都以自己的名字作为值
    get(o, name, target) {
      return name;
    },
    // 每个属性的名字都有定义
    has(o, name) {
      return true;
    },
    // 因为可枚举的属性太多, 所以干脆抛出错误
    ownKeys(o) {
      throw new RangeError("Infinite number of properties");
    },
    // 所有属性都有, 且不可写, 不可配置, 不可枚举
    getOwnPropertyDescriptor(o, name) {
      return {
        value: name,
        enumerable: false,
        writable: false,
        configurable: false,
      };
    },
    // 所有属性都是只读的, 因此不能设置
    set(o, name, value, target) {
      return false;
    },
    // 所有属性都不可配置, 因此不能删除
    deleteProperty(o, name) {
      return false;
    },
    // 所有属性都有但都不可配置, 因此不能定义新属性
    defineProperty(o, name, desc) {
      return false;
    },
    // 实际上,这就意味着这个对象不能扩展
    isExtensible(o) {
      return false;
    },
    // 所有属性都定义在这个对象上, 因此即便
    // 它有原型也不需要再从中继承什么了
    getPrototypeOf(o) {
      return null;
    },
    // 这个对象不可扩展, 因此不能修改它的原型
    setPrototypeOf(o, proto) {
      return false;
    },
  },
);

log(identity.x);
log(identity.toString);
log(identity[0]);
log((identity.x = 1));
log(identity.x);
log(delete identity);
log(identity.x);
/* =>
x
toString
0
1
x
false
x
 */
/* log(Object.keys(identity)); => RangeError: Infinite number of properties*/
/* for(let p of identity); => Infinite number of properties*/