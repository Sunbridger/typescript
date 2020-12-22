// extends typeof keyof in is infer as

// 每个关键字都 简单的一个例子 + vue中源码举一个例子

// ------------ ------------ ------------ ------------ ------------ ------------ ------------
// extends
// 常用场景是来用在类型继承、判断类型
// ps 使用interface时候会默认带上时间戳？ 如何解决？
// 类型继承
interface Person {
    name: string;
    age: number;
}

interface Player extends Person {
    item: 'ball' | 'swing';
}

// 这样一来 Player 就拥有了三个属性 从而实现了一个继承

// todo 区别交叉类型（&）的意义是啥？
// extends 更符合面向对象的思想吧 并且不允许覆盖 而交叉类型有 Object.assign()的效果
type Player2 = Person & { item: 'ball' | 'swing'; };

// 交叉类型是让我们把现有的类型组合在一起得到一个新的类型，从而同时拥有它们的全部属性，表示方法是：A & B 。
// 跟集合里的相交不一样，TS 的交叉类型并不是指每个类型的交集，& 的意思理解成 and ，A & B 表示同时包含 A 和 B 的结果，
// 这里传进去的 Player 必须同时拥有 name, age, item 这三个属性

// 判断类型
type IsPerson<T> = T extends Person ? true : false;

type T_Player2 = IsPerson<Player2>; // true
type T_Player= IsPerson<Player>; // true

type TypeName<T> =
    T extends 'name' | 'age' | 'sex'   ? "string_other" :
    T extends string    ? "string" :
    T extends number    ? "number" :
    T extends boolean   ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function  ? "function" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<"a">;     // "string"
type T2 = TypeName<true>;    // "boolean"
type T3 = TypeName<() => void>;  // "function"
type T4 = TypeName<string[]>;    // "object"

// 它类似一个if 嵌套的感觉 先匹配的先返回
type T5 = TypeName<'name'>;    // "string_other"

// 如果TypeName<'name' | 'xxx'> // "string_other" | "string"

// 有点类似因式分解 (a + b) * c = a*c + b*c;
// name extends  'name' | 'age' | 'sex' ? 'string_other' 全部都走？了
// xxx extends  'name' | 'age' | 'sex' ? 'string_other' 走：后面的了

// 通过上面的例子 我们可以写出一个类似一个过滤的泛型函数

type MyExclude<T, U> = T extends U ? never : T;
type MyValues = MyExclude<"x" | "y" | "z", "x">; // y、z
// 官方提供的Exclude其实就是这个写法的语法糖而已

// 我们也可以试着写一个提取相同的属性这么一个泛型函数
type MyExtract<T, U> = T extends U ? T : never;
type MyValues2 = MyExtract<"x" | "y" | "z", "x">; // x

// 同样官方也给我们提供了这个语法糖Extract

// ------------ ------------ ------------ ------------ ------------ ------------ ------------

// typeof
// 可以用于从一个变量上获取它的类型。（注意 它的作用对象是js中的表达式变量 而不是类型变量）
const jsVariable = {
    value: 123,
    text: 'text',
    subData: {
      value: false
    }
};

type Data_jsVariable = typeof jsVariable;
/*
 {
    value: number;
    text: string;
    subData: {
        value: boolean;
    };
}
 */
// 基本上来说 对于对象 数组 函数啥的有点作用 或者说在类型收缩的时候有用。
// （前面有提到的）ts可以不用运行就可以利用typeof判断出某个值的类型
// vue3中源码很多地方都有用到的 利用它 推导出某个变量的类型

// ------------ ------------ ------------ ------------ ------------ ------------ ------------

// keyof
// keyof：索引类型查询操作符（index type query operator）区别于typeof  它的作用对象是类型参数 比如 我们常写的 T
// 当你作用在number string这种基础类型时候 其实获得的就是他们原型链上的属性了
// keyof 你得到的就是一个联合类型了
interface tsVariable {
    value: number;
    text: string;
    subData(): void;
};

type Data_tsVariable = keyof tsVariable; // value | text | subData

// 常见的使用场景是 枚举对象的属性

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
getProperty(jsVariable, 'value');

// vue3中获取对象中属性类型为string的属性名
type StringKeyOf<T> = Extract<keyof T, string>


// ------------ ------------ ------------ ------------ ------------ ------------ ------------

// in
// 它的作用对象很明显就是类型变量 类似 js中for .. in 的机制。
// 但是它不是去in 接口对象的 它作用的都是简单类型(string | number | symbol)
// 常用的场景是使用联合类型(根据keyof 对象来得到新的联合类型)

type MyStr = 'name' | 'age' | 'sex';
type Mn = {
    [p in MyStr]: string
}


// ------------ ------------ ------------ ------------ ------------ ------------ ------------

// is
// 判断一个变量是否属于某个接口或类型
// val is string 若是改为boolean 则 if 那边会报错

// const isString = (val: unknown): val is string => {
//     return typeof val === 'string';
// }
// const a: null | string = Math.random() < 0.5 ? null : 'sas';
// if (isString(a)) {
//     console.log(a.substring(0, 1));
// }

// ------------ ------------ ------------ ------------ ------------ ------------ ------------

// infer
// 使用 infer 声明一个类型变量，在 条件类型判定为 true 时生效，例如：
type GetMyself<T> = T extends (infer U) ? U : T;

type T_GET1 = GetMyself<string>;        // string
type T_GET12 = GetMyself<() => void>;    // () => void
type T_GET13 = GetMyself<Date[]>;        // Date[]
type T_GET14 = GetMyself<{ a: string }>; // { a: string }

// 上面的 infer U 语句就是声明一个类型变量 U（它可以是任意字母或单词），变量 U 会解析 T 类型。 U 其实就是T 只不过你可以对其做一些处理

// 当然上面的应用场景还是很少的 常用的场景我们可以看下
// 1. 用来推断出类型
type GetArrType<T> = T extends Array<infer U> ? U : T;

type T_GETAT1 = GetArrType<Array<number>>; // number
type ExtractReturnType<T> = T extends () => (infer U) ? U : T;
type TReturnType = ExtractReturnType<() => number>;   // number

// vue3中源码的例子 /runtime-core/src/componentOptions.ts
type ExtractComputedReturns<T extends any> = {
    [key in keyof T]: T[key] extends { get: (...args: any[]) => infer TReturn }
    ? TReturn
    : T[key] extends (...args: any[]) => infer TReturn ? TReturn : never
}

type ComputedReturnsT1 = ExtractComputedReturns<ComputedReturns>
// 其实就是为了获取对象的属性函数的返回值 computed中有get set的函数的话 就是第一种 平常的话就是normal
// 返回的infer TReturn 其实就是前面的any 可以是任何类型
interface ComputedReturns {
    hasget: {
        get: () => {}
    },
    normal: () => {};
}

// interface FuncParams {
//     name: string;
//     age: number;
// }

// type Func = (user: FuncParams) => void;

// type ParamType<T> = T extends (user: infer U) => void ? U : T;

// type Para = ParamType<Func>


// as 或者使用 <> 前面基础使用有讲到的
// 就是一个类型断言了  除非你知道自己要做的事情
// 骚操作 as unknown as any 。。。
