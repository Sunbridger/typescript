// 类似namespace的一定加上declare咯！
namespace Animal{

    export interface obj{

    }
}

declare namespace P{
    let name:string;
    function getName(n:string):string;
    export interface po{
        hashname: string
    }
}


interface Foo{
    x:string;
}
interface Foo{
    y:string;
}
let foo:Foo={
    x:'xxx',
    y:'yyy'
}
