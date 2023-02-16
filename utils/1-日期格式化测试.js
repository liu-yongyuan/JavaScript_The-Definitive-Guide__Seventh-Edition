const { next, log } = require("./log");
let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date())); // => 2023癸卯年正月26星期四

next();
opts = { weekday: "long", month: "long", year: "numeric", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" };
log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date())); // => 2023癸卯年正月26星期四 17:19:30

next();
opts = { weekday: "long", month: "numeric", year: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date())); // => 2023癸卯年正月26，星期四 17:20:38

next();
opts = { weekday: "long", month: "numeric", year: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hourCycle:"h11" };
log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date())); // => 2023癸卯年正月26，星期四 下午5:22:18

next();
opts = { weekday: "long", month: "numeric", year: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hourCycle:"h11", hour12: false };
log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date())); // => 2023癸卯年正月26，星期四 17:23:01

next();
opts = { weekday: "long", month: "numeric", year: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hour12: true };
log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date())); // => 2023癸卯年正月26，星期四 下午5:23:28

next();
opts = { weekday: "long", month: "numeric", year: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hourCycle:"h12", hour12: false };
log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date())); // => 2023癸卯年正月26，星期四 17:24:46

next();
opts = { weekday: "long", month: "numeric", year: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hourCycle:"h12" };
log(Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date())); // => 2023癸卯年正月26，星期四 下午5:25:10