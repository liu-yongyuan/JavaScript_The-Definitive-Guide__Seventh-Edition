const { next, log } = require("../../utils/log");
function html(strings, ...values) {
  let escaped = values.map((v) => String(v).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;").replace("'", "&#39;"));
  let result = strings[0];
  for (let i = 0; i < escaped.length; i++) {
    result += escaped[i] + strings[i + 1];
  }
  return result;
}

let operator = "<";
log(html`<b>x ${operator}</b>`); // => <b>x &lt;</b>

let kind = "game",
  name = "D&D";
log(html`<div class="${kind}">${name}</div>`); // => <div class="game">D&amp;D</div>

class Glob {
  constructor(glob) {
    this.glob = glob;

    let regexpText = glob.replace("?", "([^/])").replace("*", "([^/]*)");

    this.regexp = new RegExp(`^${regexpText}`, "u");
  }

  toString() {
    return this.glob;
  }

  [Symbol.search](s) {
    return s.search(this.regexp);
  }
  [Symbol.match](s) {
    return s.match(this.regexp);
  }
  [Symbol.replace](s, replacement) {
    return s.replace(this.regexp, replacement);
  }
}

function glob(strings, ...values) {
  let s = strings[0];
  for (let i = 0; i < values.length; i++) {
    s += values[i] + values[i + 1];
  }
  return new Glob(s);
}
let root = "/tmp";
let filePattern = glob`${root}/*.html`;
log("/tmp/test.html".match(filePattern)); // => null
