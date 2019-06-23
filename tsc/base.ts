// base类型
let a:number=12;
let b:boolean=false;
let c:string='sunbridger';

// 数组 确定类型
let arr1:number[]=[1,2];
let arr2:Array<number>=[1,2,3];
// 不确定类型
let arr3:any[]=[1,'a',true,{},[],null];
let arr4:Array<any>=['v',2,{},[]];

let u: undefined = undefined;
let n: null = null;

function fn():void{
    console.log('没有返回值的函数');
}

// 使用枚举类型可以为一组数值赋予友好的名字
// 仅限为数字哦 其他的不行
// 数字默认从0递增
enum Color {Red, Green, Blue}
let d: Color = Color.Green;
console.log(d==1)
enum Font {
    flaga=1,
    flagb=2,
    flagc='ccc'
}
console.log(Font.flaga===1);

declare function create(o: object | null): void;

getName('xx');

