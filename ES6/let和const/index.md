## let

#### 基本用法

用来声明变量，用法类似 var,只在 let 命令所在的代码块内有效，for 循环计数器比较适合用 let

#### 不存在变量提升

var 命令会存在变量提升，可以在声明之前使用变量，其值为 undefined,let 命令必须要在变量声明后才可以使用，否则会报错 ReferenceError

#### 暂时性死区（temporal dead zone，简称 TDZ）

只要代码块中存在 let,它所声明的变量就会绑定在这个区域，不再受外部的影响

```js
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

ES6 中明确规定，区块中存在 let 和 const,这些命令使变量从一开始就形成了封闭作用域，凡在声明之前使用变量都使错误的；

#### 不允许重复声明

let 不允许在相同的作用域内，重复声明一个变量

```js
function a() {
  var a = 1;
  let a = 12; //报错
}

function b() {
  let a = 12;
  let a = 1; //报错
}
```

函数内部不允许重复声明

```js
function s(args) {
  let args; // 报错
}

function ss(args) {
  {
    let args; //不报错
  }
}
```
