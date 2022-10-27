async function a() {
  console.log("a");
}

async function b() {
  console.log("b");
}

function c() {
  console.log("c");
}

(async () => {
  //a b c
  a();
  b();
  c();
})();


(async () => {
  //b a c
  await b();
  await a();
  c();
})();



