// 基础类型
// TypeScript支持与JavaScript几乎相同的数据类型
// Boolean、Number、BigInt、String、Null、Undefined、Object、Symbol
// Boolean、Number、BigInt、String、Null、Undefined、Object、Symbol、Array、Tuple、Enum、Unknown、Any、Void、Never
// （说明下：BigInt都需要在最新版本才能使用）

// 基础使用

// null

// let n: null = null;
// let d: undefined = undefined
// let n: null = {};
// let n: null = '';

// object


// Symbol
// let Sunbridger: symbol = Symbol('Sunbridger');

// let wrq: symbol = Symbol();

// Array
// let list: number[] = [1, 2, 3];

// let list: Array<number> = [1, 2, 3]; // 泛型的写法

// Tuple
// 那会不会存在这样的写法的呢？
// let list: [number, string] = [1, 'hei'];

// 这个写法是存在的官方给出的Tuple的写法就是这样的，大部分情况下我们其实都不知道数组存放类型的顺序、个数的
// 上面可以看出类型固定、个数固定、并且顺序也固定了 这样的场景就是用元祖

// 那元祖和数组的区别是什么？
// 元祖能够添加不同类型的、数组只能够添加相同类型的
// 元祖使用场景在python中是非常多的，比如说函数调用，实际上会将顺序传入的参数先组成一个tuple；多返回值也是靠返回一个tuple来实现的
// tuple最大的便利在于它是一个hashable的类型 一个id对应一个不一样的数据

// Enum
// const enum Color {
//     Red,
//     Green,
//     Blue,
// }
// let c: Color = Color.Green;

// vue3中使用的场景
// export const enum TrackOpTypes {
//     GET = 'get',
//     HAS = 'has',
//     ITERATE = 'iterate'
// }

// const enum TargetType {
//     INVALID = 0,
//     COMMON = 1,
//     COLLECTION = 2
//   }

// Any
// let uncertain: any = 'Hello world'!;
// uncertain = 5;
// uncertain = { hello: () => 'Hello world!' };

// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let list: any[] = [1, true, "free"];
// any 可以赋值给任何东西 可以点任何属性


// TypeScript 3.0 引入了新的unknown 类型，它是 any 类型对应的安全类型。
// 可以是anything，为啥设计？有些动态的值是不确定的



// any和unknown之间的区别。
// unknown 类型的变量只能赋值给 any 和 unknown。无法对其执行任何操作
// 从以上比较中得出的结论是，unknown 类型要安全得多，因为它迫使我们执行额外的类型检查（ 使用类型断言、使用类型收缩 ）来对变量执行操作。

// 举例：使用类型断言
function getName(name: unknown) {
    return name;
}
const myName = (getName('asdas') as string).toLowerCase();
// 或者为
const myName2 = (<string>getName('asdas')).toLowerCase(); // 推荐使用as 因为在jsx中 那种写法就不行啦
// 但是它存在一个问题的 就是一旦使用了类型断言 输入是什么ts编译器就不会care了
// 这样写就代表着没有人比你更懂这个值类型了
// 比如
const myName3 = (getName(12) as string).toLowerCase();

// 上面的还是有点草率了呀，有时候子集也不大确定类型，下面用更类型安全的缩小位置类型的方法
// 举例：使用类型收缩
function getName2(name: unknown) {
    if (typeof name === 'string') {
        return name.toLocaleLowerCase();
    }
    return name;
}
// 当然除了typeof可以类型收缩 还可以使用instanceof、in等来缩小变量的类型的
// 不难发现 ts在这方面还是很熟悉js用户的code习惯的 在类型判断这些个api中 达成一致，当然咱们还是得清除的知道
// ts只是个静态类型分析工具， 所以不存在运行时，因此并不会执行你的代码， 但甚至能识别if else语句等, 究其原理大概就是
// 通过词法分析、语法分析、控制流...来对程序代码进行扫描检测... 这部分有兴趣的话可以去看看ts的实现原理
// 推荐文章：https://jkchao.github.io/typescript-book-chinese/compiler/parser.html


// Void
// 其实在js中就有它的身影了，你比如下面的连接点完不会做任何的事情，但是如果去掉void()的话 点击之后部分浏览器页面是会变成0的
// <a href="javascript:void(0);">
// 返回undefined 也就是说（void 运算符通常只用于获取 undefined的原始值）在一些老的之前的浏览器 undefined是可以被重新赋值的
// 所以为了兼容性 有些通过undefined判断的会用这个void(0)代替

// 在TS中 它和any有点类型对立的一个状态了 通常作为不返回任何值的函数了




// Null Undefined
// 其实就是和js用法一样

// Never
// never类型表示的是那些永不存在的值的类型 （它是任何类型的子集） 一般来说返回never可能就是抛出异常 使用场景后面会讲到在泛型中
// nerve 的例子 总是穷尽 (exhaust) 了所有 All 的可能类型。
// https://www.zhihu.com/question/354601204
// interface Foo {
//     type: 'foo'
//   }

//   interface Bar {
//     type: 'bar'
//   }
//   interface MM {
//     type: 'bars'
//   }

//   type All = Foo | Bar | MM

//   function handleValue(val: All) {
//     switch (val.type) {
//       case 'foo':
//         // 这里 val 被收窄为 Foo
//         break
//       case 'bar':
//         // val 在这里是 Bar
//         break
//       default:
//         // val 在这里是 never
//         const exhaustiveCheck: never = val
//         break
//     }
//   }


// Object
// 也就是除number，string，boolean，symbol，null或undefined之外的类型。

// 讲完这些基础类型之后 其实文档手册还有一些借口、类、函数等讲解的 在这里就不悉数了 相信大家也都清除
// 下面就说一下TS中比较高级的功能之一泛型吧。

// Function
// 在 () 后面添加返回值类型即可。

// function fn(): number {
//     return 1
//   }

//   const fn = function (): number {
//     return 1
//   }

//   const fn = (): number => {
//     return 1
//   }

//   const obj = {
//     fn (): number {
//       return 1
//     }
//   }

// 当然你也可以看到它也支持重载
// 比如常用的 `defineComponent` 它就支持函数重载
// /Users/sunbridger/Desktop/mycode/vue-next/packages/runtime-core/src/apiDefineComponent.ts
// ts 推断出 myObj 的类型：myObj: { x: number; y: string; z: boolean; }

function sss(name: unknown) {
    return name;
}
const asdasd = sss('xxx');
