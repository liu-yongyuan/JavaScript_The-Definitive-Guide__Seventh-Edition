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
next();

let data = [0.05, 0.75, 1];
let formatData = Intl.NumberFormat(undefined, {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
}).format;
log(data.map(formatData)); // => [ '5.0%', '75.0%', '100.0%' ]
next();

let arabic = Intl.NumberFormat("ar", { useGrouping: false }).format;
log(arabic(123456789)); // => ١٢٣٤٥٦٧٨٩
next();

let hindi = Intl.NumberFormat("hi-IN-u-nu-deva").format;
log(hindi(1234567890)); // => १,२३,४५,६७,८९०
