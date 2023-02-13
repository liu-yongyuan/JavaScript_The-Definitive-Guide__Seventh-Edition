let scope = "global scope";
function checkscope() {
  let scope = "local scope";
  function f() {
    return scope;
  }
  return f();
}
console.log(checkscope());
console.log("\n====== XXX ======\n");

let uniqueInteger = (function () {
  let counter = 0;
  return function () {
    return counter++;
  };
})();
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log("\n====== XXX ======\n");

function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}
let c = counter(),
  d = counter();
console.log(c.count());
console.log(d.count());
c.reset();
console.log(c.count());
console.log(d.count());
console.log("\n====== XXX ======\n");

function counter1(n) {
  return {
    get count() {
      return n++;
    },
    set count(m) {
      if (m > n) n = m;
      else throw Error("count can only be set to a larger value");
    },
  };
}

let c1 = counter1(1000);
console.log(c1.count);
console.log(c1.count);
console.log((c1.count = 2000));
console.log(c1.count);
try {
  console.log((c1.count = 2000));
} catch (e) {
  console.log(e.message);
}
console.log("\n====== XXX ======\n");

function addPrivateProperty(o, name, predicate) {
  let value;

  o[`get${name}`] = function () {
    return value;
  };

  o[`set${name}`] = function (v) {
    if (predicate && !predicate(v)) {
      throw new TypeError(`set${name}: invalid value ${v}`);
    } else {
      value = v;
    }
  };
}

let o = {};
addPrivateProperty(o, "Name", (x) => typeof x === "string");
o.setName("Frank");
console.log(o.getName());
try {
  o.setName(0);
} catch (e) {
  console.log(e.message);
}
console.log(o);
console.log("\n====== XXX ======\n");

function constfunc(v) {
  return () => v;
}

let funcs = [];
for (var i = 0; i < 10; i++) {
  funcs[i] = constfunc(i);
}
console.log(funcs[1]());
console.log(funcs[5]());
console.log("\n====== XXX ======\n");