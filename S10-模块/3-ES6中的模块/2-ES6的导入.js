// 默认导出的引用
import BitSet from "./1-ES6的导出";

// 导入语法,按需导入
import { mean, stddev } from "./1-ES6的导出";

import BitSet, { degreesToRadians } from "./1-ES6的导出";

// 导入所有
import * as ExportModule from "./1-ES6的导出";

// 不导入模块的导出 利用加载模块的副作用
import "./1-ES6的导出";
