
// TypeScript 编译器是用 TypeScript 写的，那是先有编译器还是TS？
// https://segmentfault.com/q/1010000023075644

// 什么是子类型
// typescript 的子类型是基于 结构子类型 的，只要结构可以兼容，就是子类型。（structual typing）
// 基本规则 target不能缺少source里的member
// 因为JavaScript里广泛地使用匿名对象，例如函数表达式和对象字面量，所以使用结构类型系统来描述这些类型比使用名义类型系统更好。
// java、c++ 等传统静态类型语言是基于 名义子类型 的，必须显示声明子类型关系（继承），才可以兼容。
// 需要注意点：类 class比较的时候
// 类有静态部分和实例部分的类型。 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。

// 即使是不同的类 但只要结构一样就可以
// class FooS {
//     method(input: string): number {  }
// }
// class BarS {
//     method(input: string): number {  }
// }
// let fooss: FooS = new BarS(); // Okay.
// 我们用的最多的就是对象的子类型
// A ≼ B 表示 A 是 B 的子类型，A 包含 B 的所有属性和方法。

// 但是需要注意一个点就是 对象字面量 会有一个额外属性检查（excess property check）
// function getYourInfo(info: {name: string}) {
//     return info;
// }
// // getYourInfo({name: 'Sunbridger', age: 12});// error
// const infpo = { name: 'Sunbridger', age: 12 };
// getYourInfo(infpo);

// 它的使用场景是Object.assign

// 也存在函数子类型
// 1. 参数类型比较
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

let cc = (...arg: any[]) => 0; // 类似这种剩余参数只要看返回值符合类型即可

// type asd = typeof x extends typeof y ? 'x是y的子类型' : 'x不是y的子类型';
// y = x; // OK
// // x = y; // Error
// 要查看x是否能赋值给y，首先看它们的参数列表。
// x的每个参数必须能在y里找到对应类型的参数。只看它们的类型。 这里，x的每个参数在y中都能找到对应的参数，所以允许赋值。
// y = x中那样。 原因是忽略额外的参数在JavaScript里是很常见的
// 例如，Array#forEach给回调函数传3个参数：数组元素，索引和整个数组。 尽管如此，传入一个只使用第一个参数的回调函数也是很有用的：

// 2. 返回值类型比较
// let x = () => ({name: 'Alice'});
// let y = () => ({name: 'Alice', location: 'Seattle'});

// type asd = typeof y extends typeof x ? 'y是x的子类型' : 'y不是x的子类型';

// x = y; // OK
// y = x; // Error because x() lacks a location property
// 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
// 总计就是源函数参数类型可以多，目标函数返回值类型可以多

// 说到最后美好的愿望：
// 希望TS不经编译能够在浏览器中运行。
// 至少能在Chrome的V8中运行，这样Node、Electron也可以运行了。

// extends 的含义可以理解为 源是否能兼容目标 目标类型成员会被一一检查是否兼容
