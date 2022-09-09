let o = { x: 1 };
o.x = 2;
o.x = 3;

let a = [1, 2, 3];
a[0] = 0;
a[3] = 4;

/**
 * 引用值和原始值
 * 1.引用值是对象,对象的属性是可变更的.
 * 2.原始值是基本数据类型, 对原始值的操作只会产生一个新的值
 * 3.引用类型比较,一般会比较内部属性值是否一致
 */
