function fn<T>(msg:T):T{
    return msg;
}

function fn2<T>(msg:T[]):T[]{
    console.log(msg.length,'必须有长度的数组')
    return msg;
}

function fn3<t>(msg:Array<t>):Array<t>{
    console.log(msg.length,'必须有长度的数组')
    return msg;
}
fn('xxx');
fn2([1,'xx']);
fn3([1,'xx']);

interface FanInter{
    <t>(msg:t):t //区别于直接冒号的interface
}

// 泛型中使用约束

interface Len{
    length:number;
}
function fn4<t extends Len>(msg:t):t{
    return msg;
}
fn4({length:5})
export {}