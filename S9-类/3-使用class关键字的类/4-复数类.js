class Complex {
  // #r = 0;
  // #i = 0;
  constructor(real, imaginary) {
    this.r = real;
    this.i = imaginary;
  }

  plus(that) {
    return new Complex(this.r + that.r, this.i + that.i);
  }

  times(that) {
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
  }

  static sum(c, d) {
    return c.plus(d);
  }
  static product(c, d) {
    return c.times(d);
  }

  get real() {
    return this.r;
  }
  get imaginary() {
    return this.i;
  }
  get magnitude() {
    return Math.hypot(this.r, this.i);
  }

  toString() {
    return `{${this.r}, ${this.i}}`;
  }

  equals(that) {
    return that instanceof Complex && this.r === that.r && this.i === that.i;
  }

  // static ZERO = new Complex(0, 0);
}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

let c = new Complex(2, 3);
let d = new Complex(c.i, c.r);
console.log(c.plus(d).toString()); // => {5, 5}
console.log(c.magnitude); // => 3.6055512754639896
console.log(Complex.product(c, d)); // => Complex { r: 0, i: 13 }
console.log(Complex.ZERO.toString()); // => {0, 0}

module.exports = {
  Complex,
};
