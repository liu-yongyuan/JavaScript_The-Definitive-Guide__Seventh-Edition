const extension = Symbol("my extension symbol");
let o = {
  [extension]: {},
};
o[extension].x = 0;
console.log(o); // => { [Symbol(my extension symbol)]: { x: 0 } }
