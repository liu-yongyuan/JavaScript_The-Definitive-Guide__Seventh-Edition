/**
 * 通过前置一个标识符和一个冒号, 可以为任何语句加上标签:
 *
 *  identifier: statement
 *
 * 给语句加上标签之后, 就相当于给它起了个名字, 可以在程序
 * 的任何地方通过这个名字引用它. 任何语句都可以有标签, 但只有
 * 那些有语句体的语句假标签才有意义, 比如循环语句和条件语句.
 */
let token = null,
  i = 0;
mainloop: while (token !== null) {
  if (++i > 100) {
    token = { success: "ok" };
    console.log(i, token);
    break;
  }
  continue mainloop;
}
