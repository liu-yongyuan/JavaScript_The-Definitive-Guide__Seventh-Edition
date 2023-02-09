/* right now! */
class Buffer {
  constructor() {
    this.size = 0;
    this.capacity = 4096;
    this.buffer = new Uint8Array(this.capacity);
  }
}

let buffer = new Buffer();
console.log("\n====== XXX ======\n");

/* feature! */
class Buffer1 {
  size = 0;
  capacity = 4096;
  buffer = new Uint8Array(this.capacity);
}
let buffer1 = new Buffer();
console.log("\n====== XXX ======\n");

class BufferPrivate {
  #size = 0;
  get size() {
    return this.#size;
  }
}
let bufferPrivate = new BufferPrivate();
console.log(bufferPrivate.size); // => 0
console.log(JSON.stringify(bufferPrivate)); // => {}
console.log("\n====== XXX ======\n");
