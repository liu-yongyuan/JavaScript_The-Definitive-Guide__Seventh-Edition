const { next, log } = require("../../utils/log");

// 按照用户地区排序的简单整理器
// 千万像这个例子什么都没做
const collator = new Intl.Collator().compare;
log(["a", "z", "A", "Z"].sort(collator)); // => [ 'a', 'A', 'z', 'Z' ]
next();

// 文件名经常包含数值, 因此需要进行特殊排序
const filenameOrder = new Intl.Collator(undefined, { numeric: true }).compare;
log(["page10", "page9", "1", "page0"].sort(filenameOrder)); // => [ '1', 'page0', 'page10', 'page9' ]
next();

const fuzzyMatcher = new Intl.Collator(undefined, { sensitivity: "base", ignorePunctuation: true }).compare;
log(["food", "fool", "Foo Bar"].findIndex((s) => fuzzyMatcher(s, "foobar") === 0)); // => 2
next();
