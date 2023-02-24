function getJSON(url) {
  return fetch(url).then((resp) => resp.json());
}

function getHighScore() {
  return getJSON("/api/user/profile").then((profile) => profile.highScore);
}

function wait(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented"));
    }
    setTimeout(resolve, duration);
  });
}

const http = require("http");
function getJson(url) {
  return new Promise((resolve, reject) => {
    let request = http.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP status ${response.statusCode}`));
        response.resume();
      } else if (response.headers["content-type"] !== "application/json") {
        reject(new Error("Invalid content-type"));
        response.resume();
      } else {
        let body = "";
        response.setEncoding("utf-8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          try {
            let parsed = JSON.parse(body);
            resolve(parsed);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    request.on("error", (error) => {
      reject(error);
    });
  });
}
