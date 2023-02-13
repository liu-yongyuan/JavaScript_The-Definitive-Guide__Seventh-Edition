console.log([1, [2, 3]].flat()); //=> [ 1, 2, 3 ]
console.log([1, [2, [3]]].flat()); // => [ 1, 2, [ 3 ] ]
console.log("\n====== XXX ======\n");

let a = [1, [2, [3, [4]]]];
console.log(a.flat(1)); // => [ 1, 2, [ 3, [ 4 ] ] ]
console.log(a.flat(2)); // => [ 1, 2, 3, [ 4 ] ]
console.log(a.flat(3)); // => [ 1, 2, 3, 4 ]
console.log(a.flat(4)); // => [ 1, 2, 3, 4 ]
console.log("\n====== XXX ======\n");

let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
console.log(words); // => [ 'hello', 'world', 'the', 'definitive', 'guide' ]