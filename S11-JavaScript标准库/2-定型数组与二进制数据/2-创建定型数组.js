const { next, log } = require("../../utils/log");

let bytes = new Uint8Array(1024);
let matrix = new Float64Array(9);
let point = new Int16Array(3);
let rgba = new Uint8ClampedArray(4);
let sudoku = new Int8Array(81);
next();

let white = Uint8ClampedArray.of(255, 255, 255, 0);
log(white); // => Uint8ClampedArray(4) [ 255, 255, 255, 0 ]

let ints = Uint32Array.from(white);
log(ints); // => Uint32Array(4) [ 255, 255, 255, 0 ]
next();

log(Uint8Array.of(1.23, 2.99, 45000)); // => Uint8Array(3) [ 1, 2, 200 ]
next();

let buffer = new ArrayBuffer(1024 * 1024);
log(buffer.byteLength); // => 1048576

let asbytes = new Uint8Array(buffer);
let asints = new Int32Array(buffer);
let lastK = new Uint8Array(buffer, 1023 * 1024);
let ints2 = new Int32Array(buffer, 1024, 256);
