const { next, log } = require("../../utils/log");

let target = Object.preventExtensions({});
let proxy = new Proxy(target, {
  isExtensible() {
    return true;
  },
});
/* Reflect.isExtensible(proxy); =>
TypeError: 'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'false')
*/

let target1 = Object.freeze({ x: 1 });
let proxy1 = new Proxy(target1, {
  get() {
    return 99;
  },
});
/* log(proxy1.x); => 
TypeError: 'get' on proxy: property 'x' is a read-only and non-configurable data property on the proxy target 
but the proxy did not return its actual value (expected '1' but got '99')
*/
