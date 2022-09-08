布尔值表示真或假, 开或关, 是或否. 这个类型只有两个值: true 和 false

布尔值在 JavaScript 中通常是比较操作的结果. 例如: `a === 4`
以上代码测试变量 a 的值是否等于数值 4. 如果是, 则返回 true 否则返回 false;

<hr>

布尔值在 JavaScript 常用于控制结构.

```javaScript
if( a === 4 ){
  b = b + 1;
} else {
  a = a + 1;
}
```

以上代码检查 a 是否等于 4, 如果等于, 则给 b 加 1; 否则, 给 a 加 1.

<hr>

JavaScript 任何值都可以转换位布尔值
```javaScript
//以下这些值都会转换位 false
undefined
null
0
-0
NaN
"" // 空字符串
```