function crond(f, ms) {
  let id;
  return function execute(...args) {
    f.apply(this, args);
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(execute, ms, ...args);
  };
}

// let id;
// async function sum() {
//   const data = (await 5) * 5;
//   console.log(data);

//   if (id) {
//     clearTimeout(id);
//   }
//   id = setTimeout(sum, 1000);
// }

const sum = (x, y) => {
  console.log(`[${x} * ${y} = ${x * y}]`);
};

crond(sum, 1000)(5, 5);
crond(sum, 1000)(3, 5);

// sum();
