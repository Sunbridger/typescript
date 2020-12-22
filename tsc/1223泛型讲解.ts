// 泛型就是对类型进行函数编程的一种方式 所以泛型一般用于函数定义中

// 泛型函数定义两种写法
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity2: <T>(arg: T) => T;

// 将泛型编写为对象字面量写法
let myIdentity: { <T>(arg: T): T };

// 泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}

let myIdentity3: GenericIdentityFn = identity;

// 我们可以看到 GenericIdentityFn 这个接口好像并没有做太多的事情 只是简单地把写法变得简单点了 能不能让他起到传类型参数作用呢
// 就比如我们常用的一些内置泛型接口一样
// 比如一些内置的 Partial<T>（让属性变为可选） Pick<T>（取出某些属性）

interface GenericIdentityFn2<T> {
    (arg: T): T;
}
// 这样 我们就把类型参数给到了整个接口可以使用的


let myIdentity4: GenericIdentityFn2<number> = identity;
// myIdentity3(12);
// myIdentity3('12');
// myIdentity4('12');
// 理解什么时候把类型参数直接放在调用签名上，什么时候把它放在接口本身上，将有助于描述类型的哪些方面是泛型的。

// 看完这些基础的泛型定义之后 我们可以利用ts中的一些类型关键字来对类型参数做一些约束
interface Lengthwise {
    length: number;
}

function getLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// vue3中的例子
// vue-next/packages/runtime-core/src/helpers/scopeId.ts
// export function withScopeId(id: string): <T extends Function>(fn: T) => T {
//     return ((fn: Function) =>
//       withCtx(function(this: any) {
//         pushScopeId(id)
//         const res = fn.apply(this, arguments)
//         popScopeId()
//         return res
//       })) as any
//   }
