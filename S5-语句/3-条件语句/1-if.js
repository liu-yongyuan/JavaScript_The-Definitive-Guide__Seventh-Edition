/**
 * if (expression)
 *  statement
 * 
 * expression (表达式)会被求值. 如果结果值为真值, statement(语句)会执行; 如果表达式是假值, 语句不会执行
 * 
 * 例如:
 *  if (username == null)
 *    username = "John Doe";
 * 
 * 或类似地:
 * 
 *  if (!username) username = "John Doe";
 */

let address = 'The Address.', message = "";
if(!address){
  address = ""
  message = "Please specify a mailing address."
}

/**
 * if 语句的第二种形式会包含一个 else 子句, 会在表达式为 false 时执行
 * 
 * if (expression)
 *  statement1
 * else
 *  statement2
 */