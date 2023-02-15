const { next, log } = require("../../utils/log");

let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14);
log(d.toLocaleString()); // => 2023/5/29 11:04:24
