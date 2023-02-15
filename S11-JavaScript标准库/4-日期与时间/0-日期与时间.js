const { next, log } = require("../../utils/log");

let now = new Date();
log(now); // => 2023-02-15T02:56:57.525Z
let epoch = new Date(0);
log(epoch); // => 1970-01-01T00:00:00.000Z
let century = new Date(2100, 0, 1, 2, 2, 3, 4, 5);
log(century);// => 2099-12-31T18:02:03.004Z
next();

century = new Date(Date.UTC(2100, 0, 1));
log(century);// => 2100-01-01T00:00:00.000Z
century = new Date("2100-01-01T00:00:00Z");
log(century);// => 2100-01-01T00:00:00.000Z
next();

let d = new Date();
d.setFullYear(d.getFullYear() + 1);
log(d);// => 2024-02-15T02:56:57.537Z
