// 先导入再导出
import { mean } from "./stats/mean.js";
import { stddev } from "./stats/stddev.js";
export { mean, stddev };

// 再导出
export { mean } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";

// 导出所有模块
export * from "./stats/stddev.js";

// 再导出重命名
export { mean as average, mean } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";

// 再导出默认模块
export { default as mean } from "./stats/mean.js";
export { default as stddev } from "./stats/stddev.js";

// 作为当前模块的默认导出
// export { mean as default } from "./stats/stats.js"; // => 方式1

// 另一个模块的默认导出再导出为当前模块的默认导出
export { default } from "./stats/mean.js"; // => 方式2
