let letters = [..."Hello world"];
let string = "";
for (let letter of letters) {
  string += letter;
}
console.log(string); // => Hello world
console.log("\n====== XXX ======\n");

let everyother = "";
for (let [index, letter] of letters.entries()) {
  if (index % 2 === 0) {
    everyother += letter;
  }
}
console.log(everyother); // => Hlowrd
console.log("\n====== XXX ======\n");

let uppercase = "";
letters.forEach((letter) => {
  uppercase += letter.toUpperCase();
});
console.log(uppercase); // => HELLO WORLD
console.log("\n====== XXX ======\n");

let vowels = "";
for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  if (/[aeiou]/.test(letter)) {
    vowels += letter;
  }
}
console.log(vowels); // => eoo
