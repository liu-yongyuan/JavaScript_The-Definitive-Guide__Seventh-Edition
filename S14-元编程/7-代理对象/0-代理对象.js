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
next();

function readOnlyProxy(o) {
  function readonly() {
    throw new TypeError("Readonly");
  }
  return new Proxy(o, {
    set: readonly,
    defineProperty: readonly,
    deleteProperty: readonly,
    setPrototypeOf: readonly,
  });
}
let o1 = { x: 1, y: 2 };
let p1 = readOnlyProxy(o1);
log(p1.x); // => 1
// log((p1.x = 2)); // => Readonly
// log(delete p1.y); // => Readonly
// log((p.z = 3)); // => Readonly
// log((p.__proto__ = {})); // => Readonly
next();

/**
 * 返回一个封装 o 的代理对象, 对于任何操作都打印一条日志
 * 然后把操作委托给该对象. objname 是一个字符串, 它会
 * 出现再日志消息中作为对象的标识. 如果 o 的自由属性的值
 * 是对象或函数, 那么再查询这些属性的值时会得到一个新的
 * loggingProxy, 这样可保证代理打印日志的行为能够
 * 一直 "持续" 下去
 * @param {*} o
 * @param {*} objname
 */
function loggingProxy(o, objname) {
  // 为日志代理对象定义处理器
  // 每个处理器都先打印一条消息, 再委托到目标对象
  const handlers = {
    // 这个处理器比较特殊, 因为对于值为对象或函数
    // 的自有属性, 它会返回一个值的代理, 而不是值
    get(target, property, receiver) {
      // 打印 get 操作
      console.log(`Handler get (${objname}, ${property.toString()})`);

      // 使用反射 API 获取属性值
      let value = Reflect.get(target, property, receiver);

      // 如果属性是目标的自有属性, 而且值
      // 为对象或函数, 则返回这个值的代理
      if (Reflect.ownKeys(target).includes(property) && (typeof value === "object" || typeof value === "function")) {
        return loggingProxy(value, `${objname}.${property.toString()}`);
      }

      // 否则原封不动地返回值
      return value;
    },

    // 下面这个三个方法没什么特别之处
    // 它们打印各自的操作, 然后委托到目标对象
    // 如果说它们有什么特别指出, 那仅仅是都不会
    // 打印 receiver 对象, 否则会导致无穷递归
    set(target, prop, value, receiver) {
      console.log(`Handler set(${objname},${prop.toString()}, ${value})`);
      return Reflect.set(target, prop, value, receiver);
    },
    apply(target, receiver, args) {
      console.log(`Handler ${objname}(${args})`);
      return Reflect.apply(target, receiver, args);
    },
    construct(target, args, receiver) {
      console.log(`Handler ${objname}(${args})`);
      return Reflect.construct(target, args, receiver);
    },
  };

  // 剩下的其他处理器都可以自动生成
  // 元编程必胜!
  Reflect.ownKeys(Reflect).forEach((handlerName) => {
    if (!(handlerName in handlers)) {
      handlers[handlerName] = function (target, ...args) {
        // 打印操作日志
        console.log(`Handler ${handlerName}(${objname},${args})`);
        // 委托操作
        return Reflect[handlerName](target, ...args);
      };
    }
  });

  return new Proxy(o, handlers);
}

// 定义一个数组和一个带有函数属性的对象
let data = [10, 20];
let methods = { square: (x) => x * x };

// 为这个数组和对象创建日志代理
let proxyData = loggingProxy(data, "data");
let proxyMethods = loggingProxy(methods, "methods");

// 假设你想了解 Array.map() 方法的执行过程
log(data.map(methods.square)); // => [ 100, 400 ]
next();

// 首先看看日志代理数组
log(proxyData.map(methods.square)); /* =>
Handler get (data, map)
Handler get (data, length)
Handler get (data, constructor)
Handler has(data,0)
Handler get (data, 0)
Handler has(data,1)
Handler get (data, 1)
[ 100, 400 ]
 */
next();

// 接着再试试代理对象方法
log(proxyData.map(proxyMethods.square));/* =>
Handler get (data, map)
Handler get (methods, square)
Handler get (data, length)
Handler get (data, constructor)
Handler has(data,0)
Handler get (data, 0)
Handler get (data, Symbol(Symbol.toPrimitive))
Handler get (data, toString)
Handler get (data, join)
Handler get (data, length)
Handler get (data, 0)
Handler get (data, 1)
Handler methods.square(10,0,10,20)
Handler has(data,1)
Handler get (data, 1)
Handler get (data, Symbol(Symbol.toPrimitive))
Handler get (data, toString)
Handler get (data, join)
Handler get (data, length)
Handler get (data, 0)
Handler get (data, 1)
Handler methods.square(20,1,10,20)
[ 100, 400 ] */
next();

// 最后, 我们再通过日志代理来了解一下迭代协议
for (let x of proxyData) console.log("Datum", x);/* =>
Handler get (data, Symbol(Symbol.iterator))
Handler get (data, length)
Handler get (data, 0)
Datum 10
Handler get (data, length)
Handler get (data, 1)
Datum 20
Handler get (data, length) */
