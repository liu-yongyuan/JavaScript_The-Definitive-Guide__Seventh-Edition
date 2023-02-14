const { next, log } = require("../../utils/log");

let bytes = new Uint8Array(1024);
let pattern = new Uint8Array([0, 1, 2, 3]);
bytes.set(pattern);
bytes.set(pattern, 4);
bytes.set([0, 1, 2, 3], 8);
log(bytes.slice(0, 12)); /* =>Uint8Array(12) [
  0, 1, 2, 3, 0,
  1, 2, 3, 0, 1,
  2, 3
] */
next();

let ints = new Int16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
let last3 = ints.subarray(ints.length - 3, ints.length);
log(last3[0]); // => 7
next();

ints[9] = -1;
log(last3[2]); // => -1
next();

log(last3.buffer); /* =>ArrayBuffer {
  [Uint8Contents]: <00 00 01 00 02 00 03 00 04 00 05 00 06 00 07 00 08 00 ff ff>,
  byteLength: 20
} */
log(last3.buffer === ints.buffer); // => true
log(last3.byteOffset); // => 14
log(last3.byteLength); // => 6
log(last3.buffer.byteLength); // => 20
next();

bytes = new Uint8Array(8);
log((bytes[0] = 1)); // => 1
log(bytes.buffer[0]); // => undefined
log((bytes.buffer[1] = 255)); // => 255
log(bytes.buffer[1]); // => 255
log(bytes[1]); // => 0

bytes = new Uint8Array(1024);
ints = new Uint32Array(bytes.buffer);
let floats = new Float64Array(bytes.buffer);
