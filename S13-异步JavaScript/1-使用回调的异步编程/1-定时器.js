const { next, log } = require("../../utils/log");
let opts = { weekday: "long", month: "numeric", year: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hourCycle: "h12" };

function checkForUpdates() {
  log(`[log] - ${Intl.DateTimeFormat("zh-u-ca-chinese", opts).format(new Date())}`);
  next();
}

setTimeout(checkForUpdates, 300);

let updateIntervalId = setInterval(checkForUpdates, 1000);
function stopCheckingForUpdates() {
  clearInterval(updateIntervalId);
}
setTimeout(stopCheckingForUpdates, 60_000);
