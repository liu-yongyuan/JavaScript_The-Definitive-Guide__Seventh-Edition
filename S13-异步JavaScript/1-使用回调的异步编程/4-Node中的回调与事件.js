const { next, log } = require("../../utils/log");

const fs = require("fs");

let options = {};

fs.readFile("./config.json", "utf-8", (err, text) => {
  if (err) {
    log("Cloud note read config file:", err);
  } else {
    Object.assign(options, JSON.parse(text));
  }

  startProgram(options);
});

function startProgram(options) {
  log(`[EXE] - ${new Date().toLocaleDateString()}`, options);
}
