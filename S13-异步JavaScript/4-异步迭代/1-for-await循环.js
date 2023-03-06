const fs = require("fs");

async function parseFile(filename) {
  let stream = fs.createReadStream(filename, { encoding: "utf-8" });
  for await (let chunk of stream) {
    parseChunk(chunk);
  }
}

/*  */

const urls = [url1, url2, url3];
const promises = urls.map((url) => fetch(url));
for (const promise of promises) {
  response = await promise;
  handle(response);
}


/*  */

for await(const response of promises){
  handle(response)
}