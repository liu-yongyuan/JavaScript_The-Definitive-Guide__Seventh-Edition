const sum = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
  return x + y;
};
const square = (x) => {
  console.log(`${x} * ${x} = ${x * x}`);
  return x * x;
};

function crond(f, ms) {
  let id;

  function execute(...args) {
    let result = f.apply(this, args);
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(execute, ms, ...args);
    return result;
  }

  function stop() {
    clearTimeout(id);
  }

  return {
    execute,
    stop,
  };
}

let executeCrondVia = crond(sum, 1000);
executeCrondVia.execute(10, 20);

setTimeout(() => {
  executeCrondVia.stop();
  executeCrondVia = crond(square, 1000);
  executeCrondVia.execute(10);
}, 5000);
