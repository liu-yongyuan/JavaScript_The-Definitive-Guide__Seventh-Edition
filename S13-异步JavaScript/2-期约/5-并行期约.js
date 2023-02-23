const urls = [];
let promises = urls.map((url) => fetch(url).then((r) => r.text));
Promise.all(promises)/* 并行期约 */
  .then((bodies) => {})
  .catch((e) => console.error(e));


/* 多个并行, 只关心第一个兑现的值 */
Promise.allSettled([Promise.resolve(1), Promise.reject(2), 3]).then(results => {
  results[0];
  results[1];
  results[2];
})
