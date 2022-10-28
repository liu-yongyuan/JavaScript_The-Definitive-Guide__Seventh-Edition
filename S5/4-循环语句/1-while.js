/**
 * while 语句是 JavaScript 的基本循环语句, 具有如下语法:
 *
 * while (expression)
 *  statement
 *
 * 首先会求值表达式, 如果表达式值是假值, 则解释器会跳过作为循环体的语句,
 * 如果表达式值是真值,则解释器会执行语句并且重复,即跳回循环的开头再次求值表达式.
 */
let count = 0;
while (count < 10) {
  console.log(count++);
}
