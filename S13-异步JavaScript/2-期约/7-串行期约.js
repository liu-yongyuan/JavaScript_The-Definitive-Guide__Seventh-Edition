const { next, log } = require("../../utils/log");

function fetchSequentially(urls) {
  const bodies = [];
  function fetchOne(url) {
    return fetch(url)
      .then((response) => response.text())
      .then((body) => bodies.push(body));
  }

  let p = Promise.resolve(undefined);

  for (url of urls) {
    p = p.then(() => fetchOne(url));
  }

  return p.then(() => bodies);
}

function promiseSequence(inputs, promiseMaker) {
  inputs = [...inputs];

  function handleNextInut(outputs) {
    if (inputs.length === 0) {
      return outputs;
    }
    let nextInput = inputs.shift();
    return promiseMaker(nextInput)
      .then((output) => outputs.concat(output))
      .then(handleNextInut);
  }

  return Promise.resolve([]),then(handleNextInut);
}
