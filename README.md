---

marp: true

---
<!-- theme: uncover -->
<!-- color: white -->
<!-- backgroundColor: #00273f -->


<style type="text/css" rel="stylesheet">
.flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.add {
    font-size: 3.5em;
}
.img-box {
    display: block;
    margin: 0 auto;
}
</style>
# <!-- fit -->浅入浅出TypeScript

---

# TypeScript简介

<img class="img-box" style="width: 100%" src="https://img.souche.com/f2e/5718db60b9d8ac7c960e497ad646afba.png" />

---

# TypeScript设计目标

<img class="img-box" style="width: 100%" src="https://i.niupic.com/images/2020/12/11/96ru.png" />

---

1. 静态识别可能的错误。
2. 为代码段提供结构化机制。
3. 不增加程序上运行时开销。
4. 输出干净的、惯用的、可识别的JavaScript代码。
5. 生成一种可组合且易于推理的语言。
6. 与当前和未来的ECMAScript建议保持一致。
7. 保留所有JavaScript代码的运行时行为。
8. 避免添加表达式级语法。
9. 使用一致的、完全可擦除的、结构化的类型系统。
10. 成为一个跨平台的开发工具。
11. 不会对TypeScript 1.0造成实质性的破坏变化。
---

# 对比JavaScript

<img class="img-box" style="width: 100%" src="https://user-gold-cdn.xitu.io/2018/1/8/160d3ee8f9f17be4?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1" />

---

| TypeScript | JavaScript |
| :-----| :--- |
| Microsoft | ECMA |
| 2012年10月 | 1995年12月 |
| 静态类型 | 动态类型 |
| 强类型 | 弱类型 |
| 对类型编程 | 对值编程 |
| 不可被浏览器识别 | 可被浏览器识别 |

---
# 对比Flow

<img class="img-box" style="width: 100%" src="https://miro.medium.com/max/3000/1*SzbaGYZvzA9jL1QwJdPELw.png" />

[Vue 2.x 为什么选用 Flow而不是TypeScript？
](https://www.zhihu.com/question/46397274)

---

| TypeScript | Flow |
| :-----| :--- |
| Microsoft | Facebook |
| 2012年10月 | 2014年11月 |
| 静态类型 | 静态类型 |
| 强类型 | 强类型 |
| 不可被浏览器识别 | 不可被浏览器识别 |
| 生态圈更丰富 | 生态圈较弱 |
| Vue3、Angular | Vue2.x、React |

---
# 类型检查，真的是刚需么？
<img class="img-box" style="width: 100%" src="https://i.niupic.com/images/2020/12/11/96qH.png" />

---

# 类型检查的优势

1. 符合大前端发展的趋势

2. 弥补了JS中的不足

3. 确保更安全的编码

---
# 基础类型

<div class="flex">
    <div>
        <p>Number</p>
        <p>BigInt</p>
        <p>String</p>
        <p>Null</p>
        <p>Undefined</p>
        <p>Object</p>
        <p>Symbol</p>
    </div>
    <p class="add"> + </p>
    <div>
        <p>Array</p>
        <p>Tuple</p>
        <p>Enum</p>
        <p>Unknown</p>
        <p>Any</p>
        <p>Void</p>
        <p>Never</p>
    </div>
</div>

---
# 基础语法

```js

// value的类型必须要满足tsType

let varliable: tsType = value;

```

---
# Number

```ts
// 十进制
let decimal: number = 6;
// 十六进制
let hex: number = 0xf00d;
// 二进制
let binary: number = 0b1010;
// 八进制
let octal: number = 0o744;
```
---
# BigInt

```ts
let big: bigint = 100n;
```

---
# String

```ts
let color: string = 'blue';

color = 'red';
```

---
# Symbol

```ts
let Sunbridger: symbol = Symbol('Sunbridger');

let wrq: symbol = Symbol();
```

---
# Null

```ts
let n: null = null;
```

---
# Undefined

```ts
let u: undefined = undefined;
```
---
# Object

```ts
let obj: object = {};
```
---
# Array

```ts
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];

let list: Array<number | string> = [1, 's', 3];

let list: Array<Array<number>> = [[1], [2, 3]];
```
---
# Tuple

```ts
let list: [string] = ['s'];

let list: [string, number] = ['s', 1];

let list: [...any] = ['1', 1, {}, true];
```

---
# Enum

<div class="flex">

```ts
enum Color1 {
    Red,
    Green,
    Blue,
}
enum Color2 {
    Red = 1,
    Green,
    Blue,
}
```
<img class="img-box" style="width: 70%" src="https://s3.ax1x.com/2020/12/21/r0M0XV.png" />
</div>



[在线TS转JS](https://www.typescriptlang.org/play)

---

# Any

```ts
let uncertain: any = 'Hello world'!;

uncertain = 5;

uncertain = { hello: () => 'Hello world!' };

`任意类型、泛型变量` = uncertain;
```
```ts
function getValue<T extends object, K extends keyof T>(obj: T, p: K): T[K] {
    return obj[p];
}

let uncertain: any = 'Hello world'!;

getValue(uncertain, 'p');
```

---

# Unknown

```ts
let uncertain: unknown = 'Hello world'!;

uncertain = 5;

uncertain = { hello: () => 'Hello world!' };

`any、unknown` = uncertain;
```

---

# 类型断言
>TypeScript 允许你覆盖它的推断，并且能以你任何你想要的方式分析它，这种机制被称为「类型断言」。TypeScript 类型断言用来告诉编译器你比它更了解这个类型，并且它不应该再发出错误。
```ts
let uncertain: unknown = 'Hello world';

console.log((uncertain as string).toLowerCase());

let obj: object = {};

console.log((obj as string).toLowerCase());
```
---

# 类型收缩

使用 typeof、instanceof、in、switch等关键字对当前类型进行判断

```ts
function getName(name: unknown) {
    if (typeof name === 'string') {
        return name.toLocaleLowerCase();
    }
    return name;
}

```
---

# Void

对紧跟其后的表达式求值，不管是什么表达式，void总是返回undefined


```ts
let i1 = void console.log(2); // i1 === undefined

let i2 = void 1; // i2 === undefined

let ts: undefined = void 1;

let ts2: void = undefined;
```

---

# Nerver
表示那些永不存在的值的类型

[尤大大为你在线解疑](https://www.zhihu.com/question/354601204)


---

# 定义一个接口
使用关键字`interface` 或 `type`

```ts
interface A {
    name: string;
    age: number;
}
type B = {
    name: string;
    age: number;
}
interface C {
    [key: string]: string;
}
interface D {
    (getName: void): string;
}
```

---
# 定义一个函数


```ts
function myAdd(x: number, y: number): number {
    return x + y;
}

let myAdd: (x: number, y: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};

let myAdd: (x: number, y: number) => number = function (x, y) {
    return x + y;
};

```
---
写法区别


<img class="img-box" style="width: 70%" src="https://tva1.sinaimg.cn/large/007S8ZIlly1gfwlko8ermj310x0fx77r.jpg" />

<img class="img-box" style="width: 70%" src="https://tva1.sinaimg.cn/large/007S8ZIlly1gfwlnifyi5j311j0ao0vw.jpg" />

---

# 联合类型
使用 |

```ts
let list: Array<number | string> = [1, 's', 3];

type Theme = 'light' | 'dark' | 'none';

type NewUn = A | B;
```
---

# 交叉类型
使用 &


```ts
type List = 'aList' & 'bList' & 'cLict'; // nerver

type A = {
    name: string;
}
type B = {
    age: number;
}
type NewUn = A & B;
```

---

# 类型兼容

---
# 什么是子类型

**结构子类型**

**名义子类型**

---
<div class="flex">

```ts
interface Person {
    name: string;
    age: number;
}

interface Student {
    name: string;
    age: number;
    score: number;
}
```

```ts
let s: Student = {
    name: 'string',
    age: 1,
    score: 99
}

let p: Person = s;

// Object literal may only
// specify known properties

let pl: Person = {
    name: 'string',
    age: 1,
    score: 99
};
```
</div>

---

# 函数子类型比较

1. 参数类型比较
2. 返回值类型比较

---

<div class="flex">

```ts
let f1 = (a: number) => 0;

let f2 = (b: number, s: string) => 0;

f2 = f1; // OK
```

```ts
let f1 = () => ({
    name: 'Alice'
});

let f2 = () => ({
    name: 'Alice',
    location: 'Seattle'
});

f1 = f2; // ok
```
</div>

---

# 关键字
**extends  typeof  keyof  in  is  infer  as**

---

# extends

**类型继承**

```ts
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    score: number;
}
```
**类型兼容判断**
```ts
type IsPerson<T> = T extends Person ? true : false;
```

---
# typeof
从一个变量上获取它的类型。
（它的作用对象是值变量而不是类型变量）


```ts
const js = {
    value: 123,
    text: 'text'
};
type js_type = typeof js;
```


---
# keyof
从一个变量上获取它的所有属性。
（它的作用对象是类型变量）



```ts
interface Ts {
    value: number;
    text: string;
    subData(): void;
};

type ts_type = keyof Ts;
```

---
# in
遍历类型变量的属性
```ts
type MyStr = 'name' | 'age' | 'sex';

type Mn = {
    [p in MyStr]: string
}
```
```ts
type Mn = {
    [p in keyof Person]: string
}
```

---

# is
**判断一个变量是否属于某个类型**

```ts
const isString = (val: unknown): val is string => {
    return typeof val === 'string';
}
const a: null | string = Math.random() < 0.5 ? null : 'str';
if (isString(a)) {
    console.log(a.substring(0, 1));
}
```
---

vue3:/src/index.ts

<img class="img-box" style="width: 100%" src="https://i.niupic.com/images/2020/12/18/97Ji.png" />


---
# infer
**在 extends 条件语句中待推断的类型变量**
```ts
type ReturnData<T> = T extends { data: infer V } ?  V : T;
type apiData = {
    data: {
        name: string;
        age: number;
    }
}
type apiData2 = {
    name: string;
    age: number;
}
type d1 = ReturnData<apiData>;
type d2 = ReturnData<apiData2>;
```

---
vue3:/runtime-core/src/componentOptions.ts

```ts
computed: {
    a() {
        return 'xxx'
    },
    b: {
        get() {
            return 'xxx'
        }
    }
}
```

```ts
type ExtractComputedReturns<T extends any> = {
    [key in keyof T]: T[key] extends { get: (...args: any[]) => infer TReturn }
    ? TReturn
    : T[key] extends (...args: any[]) => infer TReturn ? TReturn : never
}
```

---

# 泛型

**对类型进行函数编程的一种方式**

---

# 内置泛型函数

**Partial、Required、Readonly、Pick、Omit**
**Extract、Exclude**
...

---

```ts
type Partial<T> = {
    [P in keyof T]?: T[P];
};

type Required<T> = {
    [P in keyof T]-?: T[P];
};
```


```ts
type P1 = {
    name: string;
    age: number;
}

type P2 = Partial<P1>;


type P3 = Required<P2>;
```
---

```ts
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```
```ts

type P1 = {
    name: string;
    age: number;
}

type p2 = Readonly<P1>;
```
---

```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

```ts
type Student = {
    name: string;
    age: number;
    scroll: number;
};

type Person = Pick<Student, 'name' | 'age'>


type Scrolls = Pick<Student, 'scroll'>
```
---

```ts
// 从T中提取出U
type Extract<T, U> = T extends U ? T : never;
```
```ts
type NotNormal = Extract<{
    name: string;
    age: number;
}, {
    name: string;
}>

type Normal = Extract<'a' | 'b' | 'c', 'a' | 'c'>

'a' extends 'a' | 'c' ? 'a' : nerver // 'a'
'b' extends 'a' | 'c' ? 'a' : nerver // nerver
'c' extends 'a' | 'c' ? 'a' : nerver // 'c'
```

---

```ts
// 从T中去除U
type Exclude<T, U> = T extends U ? never : T;
```
```ts
type Normal = Exclude<'a' | 'b' | 'c', 'a' | 'c'>

'a' extends 'a' | 'c' ? nerver : 'a' // nerver
'b' extends 'a' | 'c' ? nerver : 'a' // 'b'
'c' extends 'a' | 'c' ? nerver : 'a' // nerver
```

---
```ts
// 与Pick相反 删除T中K的属性
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
```
```ts
vue3: /src/parse.ts

type ParserOptions = {
    isNativeTag?: (tag: string) => boolean;
    isBuiltInComponent?: (tag: string) => boolean;
    isVoidTag?: (tag: string) => boolean
    isPreTag?: (tag: string) => boolean
    // ...一堆的可选属性
}

type OptionalOptions = 'isNativeTag' | 'isBuiltInComponent'

type MergedParserOptions = Omit<Required<ParserOptions>, OptionalOptions> &
  Pick<ParserOptions, OptionalOptions>
```

---
# 总结
1. TS增强了JS的类型检查且不影响JS运行时

2. TS类型兼容JS，但它是通过结构来判断子类型的

3. TS拥有属于自己的关键字及语法

4. TS的泛型能让我们对类型进行操作

5. TS的复杂类型是通过各种联合类型、交叉类型、泛型组合
---
# [TS练习题](https://typescript-exercises.github.io/#exercise=6&file=%2Findex.ts)
