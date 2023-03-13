const { next, log } = require("../../utils/log");

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

let pattern = new Glob("docs/*.txt");
log("docs/js.txt".search(pattern)); // => 0
log("docs/js.htm".search(pattern)); // => -1

let match = "docs/js.txt".match(pattern);
log(match[0]); // => docs/js.txt
log(match[1]); // => js
log(match.index); // => 0
log("docs/js.txt".replace(pattern, "web/$1.htm")); // => web/js.htm
