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

interface getDataPra{
    id:number;
    type:string;
}
interface outData{
    name:string;
    age:number;
    likes:String[];
}
interface FanInter22<t,f>{
    (msg:t):f
}
const getDataFn:FanInter22<getDataPra,outData>=(arg:getDataPra)=>{
    let data:outData;
    data = {
        name:'xxx',
        age:12,
        likes:['xxx','aaa']
    }
    return data;
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