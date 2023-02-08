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
  }, 5000); 5 秒后更换执行函数并执行
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
    //清除执行
    stop();

    //设置执行
    id = setTimeout(execute, ms, ...args);

    //执行结果
    return executeFunction.apply(this, args);
  }

  function repeat(f) {
    executeFunction = f;
    return this;
  }

  function stop() {
    if (id) {
      clearTimeout(id);
    }
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
