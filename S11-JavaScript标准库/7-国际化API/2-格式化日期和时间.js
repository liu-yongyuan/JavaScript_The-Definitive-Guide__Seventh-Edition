const { next, log } = require("../../utils/log");

let d = new Date("2020-01-02T13:14:15Z");
log(Intl.DateTimeFormat("en-US").format(d)); // => 1/2/2020
log(Intl.DateTimeFormat("fr-FR").format(d)); // => 02/01/2020
log(Intl.DateTimeFormat("zh-CN").format(d)); // => 2020/1/2
log(Intl.DateTimeFormat("zh-HK").format(d)); // => 2/1/2020
next();

let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
log(Intl.DateTimeFormat("en-US", opts).format(d)); // => Thursday, January 2, 2020
log(Intl.DateTimeFormat("en-ES", opts).format(d)); // => Thursday, January 2, 2020
log(Intl.DateTimeFormat("fr-FR", opts).format(d)); // => jeudi 2 janvier 2020
log(Intl.DateTimeFormat("zh-CN", opts).format(d)); // => 2020年1月2日星期四
log(Intl.DateTimeFormat("zh-HK", opts).format(d)); // => 2020年1月2日星期四
next();

opts = { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" };
log(Intl.DateTimeFormat("fr-CA", opts).format(d)); // => 8 h 14
log(Intl.DateTimeFormat("zh-CN", opts).format(d)); // => 8:14
log(Intl.DateTimeFormat("zh-HK", opts).format(d)); // => 上午8:14
next();

opts = { year: "numeric", era: "short" };
log(Intl.DateTimeFormat("en", opts).format(d)); // => 2020 AD
log(Intl.DateTimeFormat("en-u-ca-iso8601", opts).format(d)); // => 2020 AD
log(Intl.DateTimeFormat("en-u-ca-hebrew", opts).format(d)); // => 5780 AM
log(Intl.DateTimeFormat("en-u-ca-buddhist", opts).format(d)); // => 2563 BE
log(Intl.DateTimeFormat("en-u-ca-islamic", opts).format(d)); // => 1441 AH
log(Intl.DateTimeFormat("en-u-ca-persian", opts).format(d)); // => 1398 AP
log(Intl.DateTimeFormat("en-u-ca-indian", opts).format(d)); // => 1941 Saka
log(Intl.DateTimeFormat("en-u-ca-chinese", opts).format(d)); // => 2019(ji-hai)
log(Intl.DateTimeFormat("en-u-ca-japanese", opts).format(d)); // => 2 Reiwa
log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(d)); // => 2019己亥年
next();
