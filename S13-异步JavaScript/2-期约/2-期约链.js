const { next, log } = require("../../utils/log");

function render(document) {
  return document;
}
function cacheInDatabase(rendered) {
  log(rendered);
}

let documentURL = "";
fetch(documentURL)
  .then((response) => response.json)
  .then((document) => {
    return render(document);
  })
  .then((rendered) => {
    cacheInDatabase(rendered);
  })
  .catch((error) => {
    log(error);
  })
  .finally(next);
