const sum = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
  return x + y;
};
const square = (x) => {
  console.log(`${x} * ${x} = ${x * x}`);
  return x * x;
};

/**
 * 
  let executeCrondVia = crond(sum, 1000);
  executeCrondVia.execute(10, 20);

  setTimeout(() => {
    executeCrondVia.stop();
    executeCrondVia.repeat(square);
    executeCrondVia.execute(10);  每次执行结果

    or

    executeCrondVia.stop().repeat(square).execute(10);
  }, 5000);
 * 
 * @param {*} f 
 * @param {*} ms 
 * @returns {
    execute,
    repeat,
    stop,
  }
 */
function crond(f, ms) {
  let id;
  let executeFunction = f;

  function execute(...args) {
    let result = executeFunction.apply(this, args);
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(execute, ms, ...args);
    return result;
  }

  function repeat(f) {
    executeFunction = f;
    return this;
  }

  function stop() {
    clearTimeout(id);
    return this;
  }

  return {
    execute,
    repeat,
    stop,
  };
}

let executeCrondVia = crond(sum, 1000);
executeCrondVia.execute(10, 20);

setTimeout(() => {
  executeCrondVia.stop();
  executeCrondVia.repeat(square);
  executeCrondVia.execute(10);
}, 5000);
