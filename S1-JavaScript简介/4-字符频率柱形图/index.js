/**
 * 这个 Node 程序从标准输入中读取文本,计算文本中每个
 * 字母出现的频率, 然后按使用频率降序显示一个柱形图
 * 运行这个程序需要 Node 12 或更高版本
 *
 * 在一个 Unix 类型的环境中, 可以像下面这样调用它:
 * node charfreq.js < corpus.txt
 */

// 这个类扩展了 Map, 以便 get() 方法在 key
// 不再映射中时返回指定的值, 而不是 null
class DefaultMap extends Map {
  constructor(defaultValue) {
    super(); // 调用超类构造器
    this.defaultValue = defaultValue; // 记住默认值
  }
  get(key) {
    // 如果映射中有 key
    if (this.has(key)) {
      return super.get(key); // 从超类中返回它的值
    }
    return this.defaultValue; // 返回默认值
  }
}

// 这个类计算并显示字母的频率柱形图
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0); // 字母到数量的映射
    this.totalLetters = 0; // 字母总数
  }

  // 这个函数用文本中的字母更新柱形图
  add(text) {
    // 移除文本中的空白, 然后将字母转换为大写
    text = text.replace(/\s/g, "").toUpperCase();
    // 接着循环文本中的字符
    for (let character of text) {
      let count = this.letterCounts.get(character); // 取得之前的数量
      this.letterCounts.set(character, count + 1); // 递增
      this.totalLetters++;
    }
  }

  // 将柱形图转换为字符串并显示 ASCII 图形
  toString() {
    // 把映射转换为一个[key,value]数组的数组
    let entries = [...this.letterCounts];

    // 按数量和字母表对数组排序
    entries.sort((a, b) => {
      // 这个函数定义排序的方式
      if (a[1] === b[1]) {
        // 如果数量相同
        return a[0] < b[0] ? -1 : 1; // 按字母表排序
      }
      // return b[1] - a[1];
      return Math.sign(b[1] - a[1]); //数量大的排前面
    });

    // 把数量转换成为百分比
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }

    // 删除小于 1% 的条目
    entries = entries.filter((entry) => entry[1] >= 1);

    // 接着把每个条目转换为一行文本
    let lines = entries.map(([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);

    // 返回把所有行拼接起来的结果, 以换行符分隔
    return lines.join("\n");
  }
}

// 这个async(返回期约的)函数创建一个 Histogram 对象
// 从标准输入异步读取文本块, 然后把这些块添加到柱形图
// 在读取到流末尾后,返回柱形图
async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8"); // 读取 Unicode 字符串, 而非字节
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});


/* 
  windows 环境

  1. Git Bash 执行: cd S1/4-字符频率柱形图/ (进入到该目录)
  2. Git Bash 执行: bash
  3. Git Bash 执行: node index.js < index.js

  报错: stdin is not a tty 说明 没有执行第 2 点
 */

/* 
  正常输出:

  I: ### 2.89%
  (: ### 2.52%
  ): ### 2.52%
  L: ## 2.46%
  U: ## 2.33%
  .: ## 2.15%
  C: ## 2.03%
  H: ## 1.84%
  ;: ## 1.54%
  D: # 1.35%
  F: # 1.29%
  G: # 1.23%
  M: # 1.17%
  =: # 1.11%
  {: # 1.11%
  }: # 1.11%
 */