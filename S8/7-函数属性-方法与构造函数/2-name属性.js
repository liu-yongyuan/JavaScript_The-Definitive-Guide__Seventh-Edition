function fnc() {
  console.log(fnc.name); // => fnc
}
fnc();

let x = () => {
  console.log(x.name); // => x
};
x();

let a = function newA(){
  console.log(a.name); // => newA
}
a();