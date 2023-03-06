async function f(x) {}

function f() {
  return new Promise(function (resolve, reject) {
    try {
      resolve((function (x) {})(x));
    } catch (e) {
      reject(e);
    }
  });
}
