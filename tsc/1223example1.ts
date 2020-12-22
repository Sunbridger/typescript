// --------------- TS对比JS容易混淆的写法 ---------------
const getSum: (x: number, y:number) => number = function (x: number, y:number): number {
    return x + y;
};

const getSumArrow: (x: number, y:number) => number = (x: number, y:number): number => {
    return x + y;
};

// (x: number, y:number) => number  它是函数类型声明
//  我们可以把它写个如下的通用的type：

// interface 内小括号形式也是 函数类型声明

// interface Sumtype {
//     (x: number, y:number): number
// }

type Sumtype = (x: number, y:number) => number;

const getSumInter: Sumtype = (x: number, y:number): number => {
    return x + y;
};


// 当我们使用TS增强类型检验的时候 vscode变红（书写时、编译时）会显得很容易

// string number boolean的一些特有属性方法等...

// string. | length、split、substring、substr、fixed() || 各个属性的作用用法大家自行了解
// number. | toFixed()

// 或者是一些基础函数只支持某一类型作为参数 Math.abs(12)

let ex: number = 12;
console.log(ex.toFixed());

// TS 除了提供一些基本类型（比如上面的 string）供我们直接使用。还：
// 提供了 inteface 和 type 关键字供我们定义自己的类型，之后就能像使用基本类型一样使用自己定义的类型了。
// 提供了各种逻辑运算符，比如 &, | 等 ，供我们对类型进行操作，从而生成新的类型。
// 提供泛型，允许我们在定义的时候不具体指定类型，而是泛泛地说一种类型，并在函数调用的时候再指定具体的参数类型。
