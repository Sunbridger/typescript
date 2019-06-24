namespace Animal{
    export interface obj{
        
    }
}

declare namespace P{
    let name:string;
    function getName(n:string):string;
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