const { next, log } = require("../../utils/log");

setTimeout(() => {
  log("Ready...");
  next();
}, 1000);

setTimeout(() => {
  log("set...");
  next();
}, 2000);

setTimeout(() => {
  log("go!");
  next();
}, 3000);

/* 
setTimeout 展示=>
Ready...

====== XXX ======

set...

====== XXX ======

go!

====== XXX ======
 */

let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
let clock = setInterval(() => {
  log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date()));
}, 1000);
setTimeout(() => {
  clearInterval(clock);
}, 10_000);
/* =>
2023癸卯年正月26星期四
2023癸卯年正月26星期四
2023癸卯年正月26星期四
2023癸卯年正月26星期四
2023癸卯年正月26星期四
2023癸卯年正月26星期四
2023癸卯年正月26星期四 */
