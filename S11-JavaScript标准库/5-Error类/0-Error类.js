const { next, log } = require("../../utils/log");

class HTTPError extends Error {
  constructor(status, statusText, url) {
    super(`${status} ${statusText}: ${url}`);
    this.status = status;
    this.statusText = statusText;
    this.url = url;
  }

  get name() {
    return "HTTPError";
  }
}

let error = new HTTPError(404, "Not Found", "http://example.com/");
log(error.status);
log(error.message);
log(error.name);
