let a = [1, 2, 3];
console.log(a.concat(4, 5)); // => [ 1, 2, 3, 4, 5 ]

/* [
  1, 2, 3, 4,
  5, 6, 7
] */
console.log(a.concat([4, 5], [6, 7]));

console.log(a.concat(4, [5, [6, 7]])); // => [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log(a); // => [ 1, 2, 3 ]
