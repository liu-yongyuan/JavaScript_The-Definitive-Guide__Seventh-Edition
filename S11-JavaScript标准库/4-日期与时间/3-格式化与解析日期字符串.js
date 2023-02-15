const { next, log } = require("../../utils/log");

let d = new Date(2020, 0, 1, 17, 10, 30);
log(d.toString()); // => Wed Jan 01 2020 17:10:30 GMT+0800 (中国标准时间)
log(d.toUTCString()); // => Wed, 01 Jan 2020 09:10:30 GMT
log(d.toLocaleDateString()); // => 2020/1/1
log(d.toLocaleTimeString()); // => 17:10:30
log(d.toISOString()); // => 2020-01-01T09:10:30.000Z
