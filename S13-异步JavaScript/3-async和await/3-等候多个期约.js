async function getJSON(url) {
  let response = await fetch(url);
  let body = await response.json();
  return body;
}

let value1 = await getJSON(url1);
let value2 = await getJSON(url2);

let [value3, value4] = await Promise.all([getJSON(url1), getJSON(url2)]);
