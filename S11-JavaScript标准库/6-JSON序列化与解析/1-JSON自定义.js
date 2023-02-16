const { next, log } = require("../../utils/log");

let text = new Date().toISOString();
log(text); // => 2023-02-16T07:41:31.168Z
let data = JSON.parse(text, function (key, value) {
  if (key[0] === "_") {
    return undefined;
  }

  if (typeof value === "string" && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
    return new Date(value);
  } /*  => SyntaxError: Unexpected number in JSON at position 4 */
  return value;
});

text = JSON.stringify(address, ["city", "state", "country"]);

let json = JSON.stringify(o, (k, v) => (v instanceof RegExp ? v.prototype.source : v));
