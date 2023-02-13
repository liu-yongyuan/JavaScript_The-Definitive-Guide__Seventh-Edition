/**
 * 几乎每个 JavaScript 对象都有另一个与之管理的对象. 这个对象被称为原型(prototype)
 * 
 * 通过对象字面量创建的所有对象都有相同的原型对象, 在 JavaScript 代码中可以通过
 * Object.prototype 引用这个原型对象.
 * 
 * 使用 new Object() 创建的对象继承自 Object.prototype, 与 {} 创建的对象一样.
 * 
 * 几乎所有对象都有原型, 但只有少数对象有 prototype 属性. 正是这些有 prototype 属性的
 * 对象为所有其他对象定义了原型.
 * 
 * Object.prototype 是为数不多的没有原型的对象, 因为它不继承任何属性. 其他原型对象
 * 都是常规对象, 都有自己的原型. 多数内置构造函数的原型都继承自 Object.prototype
 */
