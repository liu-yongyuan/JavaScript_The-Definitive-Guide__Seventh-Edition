const REGEXP_IDENTITY = /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/;
console.log(REGEXP_IDENTITY.test('12345678911111111A')); // => false
console.log(REGEXP_IDENTITY.test('12345678911111111X')); // => true
console.log(REGEXP_IDENTITY.test('A')); // => false
console.log(REGEXP_IDENTITY.test('123456789111111112')); // => true
console.log(REGEXP_IDENTITY.test('123456789111')); // => false
console.log(REGEXP_IDENTITY.test('123456789111123456789111')); // => false
console.log("\n====== XXX ======\n");


const REGEXP_MOBILE = /^([1][3,4,5,6,7,8,9])\d{9}$/;
console.log(REGEXP_MOBILE.test('A')); // => false
console.log(REGEXP_MOBILE.test('1234567891123')); // => false
console.log(REGEXP_MOBILE.test('12345678911')); // => false
console.log(REGEXP_MOBILE.test('13250762162')); // => true
console.log(REGEXP_MOBILE.test('1325076216A')); // => false
console.log(REGEXP_MOBILE.test('1325076216')); // => false