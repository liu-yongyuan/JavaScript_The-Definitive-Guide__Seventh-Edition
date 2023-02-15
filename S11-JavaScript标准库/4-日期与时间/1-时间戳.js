const { next, log } = require("../../utils/log");

let d = new Date();
d.setTime(d.getTime() + 30_000);
log(d.toLocaleString()); // => 2023/2/15 11:00:33
next();

let startTime = Date.now();
// something, use so many times
let endTime = Date.now();
log(`Spline something took ${endTime - startTime}ms.`); // => Spline something took 0ms.
