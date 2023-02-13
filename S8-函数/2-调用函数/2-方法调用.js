let calculator = {
  operand1: 1,
  operand2: 1,
  add() {
    this.result = this.operand1 + this.operand2;
  },
};
calculator.add();
console.log(calculator.result); // => 2
console.log("\n====== XXX ======\n");

let o = {
  m: function () {
    let self = this;
    console.log(this === o); // => true

    f();
    function f() {
      console.log(this === o); // => false
      console.log(self === o); // => true
    }

    const f1 = () => {
      console.log(this === o); // => true
    };
    f1();

    const f2 = function () {
      console.log(this === o); // => true
    }.bind(this);
    f2();
  },
};
o.m();
console.log("\n====== XXX ======\n");
