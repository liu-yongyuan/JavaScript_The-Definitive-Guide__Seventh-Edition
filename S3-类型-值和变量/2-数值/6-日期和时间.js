let timestamp = Date.now();
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();
//[timestamp: 1662428321008], [now: Tue Sep 06 2022 09:38:41 GMT+0800 (中国标准时间)], [ms: 1662428321008], [iso:2022-09-06T01:38:41.008Z]
console.log(`[timestamp: ${timestamp}], [now: ${now}], [ms: ${ms}], [iso:${iso}]`);