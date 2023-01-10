// const validatorName = (value) => {
//   // 中文、中文标点、全角字符按1长度，英文、英文符号、数字按0.5长度计算
//   let cnReg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g;
//   let mat = value.match(cnReg);
//   let length;
//   if (mat) {
//     length = mat.length + (value.length - mat.length) * 0.5;
//     return length;
//   } else {
//     return value.length * 0.5;
//   }
// };
// console.log(validatorName("中a"));

const validatorName = (value) => {
  const zh = /^[\u4E00-\u9FA5]+$/;
  const en = /^[a-zA-Z]+$/;
  if (zh.test(value)) {
    if (value.length > 15) {
      return "中文名字不能超过15个字符";
    } else {
      return true;
    }
  } else if (en.test(value)) {
    if (value.length > 30) {
      return "英文名字不能超过30个字符";
    } else {
      return true;
    }
  } else {
    return "请输入纯中文或纯英文名字";
  }
};
console.log(validatorName("张三a"));
console.log("\n====== XXX ======\n");

const REG_NUMBER = /\d/;
const REG_ZH = /\p{Unified_Ideograph}/u;
const REG_NAME_ZHMIX = /^\D{1,15}$/;
const REG_NAME_ENMIX = /^\D{1,30}$/;
const validatorX = (value) => {
  if (REG_NUMBER.test(value)) {
    return "不支持数字";
  }
  if (REG_ZH.test(value)) {
    return REG_NAME_ZHMIX.test(value) ? "符合中英和字符校验" : "只支持 15 字内的汉字,英文和字符";
  }
  return REG_NAME_ENMIX.test(value) ? "符合英文和字符校验" : "只支持 30 字内的英文和字符";
};

console.log(validatorX("1")); // => 不支持数字
console.log(validatorX("中1")); // => 只支持 15 字内的汉字,英文和字符
console.log(validatorX("英1")); // => 只支持 15 字内的汉字,英文和字符
console.log(validatorX("A1")); // => 只支持 30 字内的英文和字符
console.log(validatorX("中英文abcdefg!`ab")); // => 符合中英和字符校验
console.log(validatorX("abcdefgabcdefgabcdefgabcdefgabcdefg")); // => 只支持 30 字内的英文和字符
console.log(validatorX("abcde")); // => 符合英文和字符校验
console.log(validatorX("abcdefg!@!#asdfasd")); // => 符合英文和字符校验
