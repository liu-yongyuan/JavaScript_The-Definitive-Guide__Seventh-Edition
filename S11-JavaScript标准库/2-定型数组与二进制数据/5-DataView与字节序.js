const { next, log } = require("../../utils/log");

let littleEndian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;
log(littleEndian);
next();

let bytes = new Uint8Array(8);
let view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
let int = view.getInt32(0);
log(int); // => 0
log((int = view.getInt32(4, false))); // => 0
// Error, outbound
// log((int = view.getUint32(8, true)));
// log(view.setUint32(8, int, false));
log(view); /* => DataView {
  byteLength: 8,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 00 00 00 00 00 00>,
    byteLength: 8
  }
} */
next();