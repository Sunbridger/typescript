
interface label{
    name:string;
    age:number;
    isgood?:boolean;
}
/**
 * 1:除了描述带有属性的普通对象外，
 * 2:接口也可以描述函数类型。
 */
function getInfo(obj:label):label{
    const { name,age } = obj;
    return {
        name,
        age
    }
}


interface fnInter{
    (
        name:string,
        age:number,
        isgood:boolean
    ):boolean;
}
let fn:fnInter=function(n:string,a:number,g:boolean):boolean{
    return a>10;
}
// 上面写法比较标准 其实可以让ts智能提示我们就好
let fn2:fnInter=function(n,a,g){
    return a>10;
}


interface ff<t>{
    name:t;
}
let aa:ff<string>={
    name:'xxx'
}










// 注意参数必须严格遵守label这个接口的定义规范
console.log(getInfo({name:'xxx',age:6}));
console.log(getInfo({name:'aaa',age:1,isgood:true}));
console.log(fn('xxx',12,true));
console.log(fn2('xxx',12,true));
// 当然还有一些只读readonly的修饰 这个不常用










// 这个export只是为了解决变量 fn 
// 被限制在了 module 的作用域下，
// 因此不会与全局的fn产生冲突。
export {};