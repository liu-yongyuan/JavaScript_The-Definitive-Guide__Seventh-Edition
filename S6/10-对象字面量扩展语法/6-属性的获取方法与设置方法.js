/* 
    JavaScript 支持为对象定义访问器属性(accessor property), 这种属性
不是一个值,而是一个值或两个访问器方法; 一个获取方法(getter)和一个设置方法(setter)
 */


/* 
    获取方法和设置方法是在 ES5 中引入的
 */
let value = "some thing"
let o = {
    dataProp: value,

    /* 通过一对函数定义的 */
    get accessorProp() {
        return this.dataProp;
    },
    set accessorProp(value) {
        this.dataProp = value;
    }
}
console.log(o.dataProp, "---", o.accessorProp); // => some thing --- some thing
o.accessorProp = "x";
console.log(o.dataProp, "---", o.accessorProp); // => x --- x
console.log("\n====== XXX ======\n");

/* 2D 笛卡尔坐标点的对象.
用普通数据属性保存点的 x 和 y 坐标, 用访问器属性给出这个点坐标的极坐标
 */
let p = {
    // x 和 y 是常规的可读写数据属性
    x: 1.0,
    y: 1.0,

    // r 是由获取方法和设置方法定义的可读写访问器属性
    // 不要忘了访问器方法后面的逗号
    get r() {
        return Math.hypot(this.x, this.y);
    },
    set r(value) {
        let oldValue = Math.hypot(this.x, this.y);
        let ratio = value / oldValue;
        this.x *= ratio;
        this.y *= ratio;
    },

    // theta 是一个只定义了获取方法的只读访问器属性
    get theta() {
        return Math.atan2(this.y, this.x);
    }
}
console.log(p.r); // => Math.SQRT2
console.log(p.theta) // => Math.PI / 4
console.log("\n====== XXX ======\n");

let q = Object.create(p); // => 一个继承获取和设置方法的新对象
// 自有属性
q.x = 3;
q.y = 4;
console.log(q.r); // => 5: 可以使用继承的访问器属性
console.log(q.theta); // => Math.atan2(4, 3)
console.log("\n====== XXX ======\n");

// 这个对象包子序号严格递增
const serialnum = {
    //这个数据属性保存下一个序号
    //属性名中的 _ 提示它仅在内部使用
    _n: 0,

    get next() {
        return this._n++;
    },
    set next(newValue) {
        if (newValue > this._n) {
            this._n = newValue;
            return;
        }
        throw new Error("serial number can only be set to a larger value");
    }
}

serialnum.next = 10;
console.log(serialnum.next); // => 10
console.log(serialnum.next); // => 11
console.log("\n====== XXX ======\n");

const random = {
    get octet() {
        return Math.floor(Math.random() * 256);
    },
    get uint16() {
        return Math.floor(Math.random() * 65536);
    },
    get int16() {
        return Math.floor(Math.random() * 65536) - 32768;
    }
}
console.log(random.octet);
console.log(random.uint16);
console.log(random.int16);