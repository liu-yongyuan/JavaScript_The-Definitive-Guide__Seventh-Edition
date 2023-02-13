class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}

let a = new EZArray();
console.log(a instanceof EZArray); // => true
console.log(a instanceof Array); // => true
a.push(1, 2, 3, 4);
console.log(a.length); // => 4
console.log(a.pop()); // => 4
console.log(a.first); // => 1
console.log(a.last); // => 3
console.log(a[1]); // => 2
console.log(Array.isArray(a)); // => true
console.log(EZArray.isArray(a)); // => true
console.log("\n====== XXX ======\n");

class TypedMap extends Map {
  constructor(keyType, valueType, enteries) {
    if (enteries) {
      for (let [k, v] of enteries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
        }
      }
    }

    super(enteries);

    this.keyType = keyType;
    this.valueType = valueType;
  }

  set(key, value) {
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }

    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }
    return super.set(key, value);
  }
}
const cq = new TypedMap("string", "boolean");
cq.set("2023/02/10 15:44", true);
cq.set("2023/02/10 15:45", false);
cq.set("2023/02/10 15:46", true);
console.log(cq); /* =>
TypedMap(3) [Map] {
  '2023/02/10 15:44' => true,
  '2023/02/10 15:45' => false,
  '2023/02/10 15:46' => true,
  keyType: 'string',
  valueType: 'boolean'
}
 */
