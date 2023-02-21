const { next, log } = require("../../utils/log");

function getCurrentVersionNumber(versionCallback) {
  let request = new XMLHttpRequest();
  request.open("get", "http://www.example.com/api/version");
  request.send();

  request.onload = function () {
    if (request.status === 200) {
      let currentVersion = parseFloat(request.responseText);
      versionCallback(null, currentVersion);
    } else {
      versionCallback(this.response.statusText, null);
    }
  };

  request.onerror = request.ontimeout = function (e) {
    versionCallback(e.type, null);
  };
}

function versionCallback(rejected, fulfilled) {
  if (rejected) {
    log(`[rejected] - ${new Date().toLocaleDateString()}`, rejected);
  } else {
    log(`[fulfilled]`, fulfilled);
  }
}

getCurrentVersionNumber(versionCallback);