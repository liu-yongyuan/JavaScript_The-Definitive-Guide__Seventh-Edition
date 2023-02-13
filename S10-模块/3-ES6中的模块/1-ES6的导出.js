// 在声明前加上 export 关键字
export const PI = Math.PI;

export function degreesToRadians(d) {
  return (d * PI) / 180;
}

export class Circle {
  constructor(r) {
    this.r = r;
  }

  area() {
    return PI * this.r * this.r;
  }
}

// 先定义变量, 再进行导出
export { PI, degreesToRadians, Circle };

// 默认导出
export default class BitSet {}
