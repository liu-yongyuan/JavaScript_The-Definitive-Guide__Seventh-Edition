function fnc(a, b, c, ...args) {
  /* 形参的数量, 元数(arity), 剩余形参不统计 */
  console.log(fnc.length);
}

fnc(0); // => 3
fnc(0, 1); // => 3
fnc(0, 1, 2, 3, 4, 5); // => 3
