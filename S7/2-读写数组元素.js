let a = ["world"];
let value = a[0];
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];
console.log(a); // => [ 'world', 3.14, 3, 'world' ]
