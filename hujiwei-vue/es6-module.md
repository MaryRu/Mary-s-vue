# ES6模块语法

ES6模块通过`export`命令显式指定输出的代码，再通过`import`命令引入模块。

```js
import { stat, exists, readFile } from 'fs';
```

## 严格模式

ES6的模块自动采用严格模式，不管你有没有在模块头部加上`"use strict";`。

## export命令

一个模块就是一个独立的文件。该文件内部的所有变量，外部都无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用`export`命令输出，下面是一个js文件，里面使用`export`命令输出变量。

```js
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```

或者

```js
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};
```

`export`命令除了输出变量，还可以输出函数或类（class）。

```js
export function multiply(x, y) {
  return x * y;
};
// 对外输出一个函数multiply
```

通常情况下，`export`输出的变量就是本来的名字，但是可以使用as关键字重命名。

```js
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```