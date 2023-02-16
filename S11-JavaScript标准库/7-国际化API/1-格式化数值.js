const { next, log } = require("../../utils/log");

let euros = Intl.NumberFormat("es", {
  style: "currency",
  currency: "EUR",
});
log(euros.format(10)); // => "10,00 €" 10欧元, 西班牙惯例
next();

let pounds = Intl.NumberFormat("en", {
  style: "currency",
  currency: "GBP",
});
log(pounds.format(10)); // => "£10.00" 10磅
log(pounds.format(1000)); // => "£1,000.00" 1000磅
next();

/*
参考: 
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
 */
let cn = Intl.NumberFormat("zh", {
  style: "currency",
  currency: "CNY",
});
log(cn.format(10)); // => ¥10.00
