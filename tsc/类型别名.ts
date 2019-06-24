// 起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。 
// 不同于 interface 只能定义对象类型， type 声明的方式可以定义组合类型，交叉类型，原始类型。
type s = string;
type n = ()=>string;
type f=s|n;
function getD(param:f):s{
    if (typeof param === 'string') {
        return param;
    }
    else {
        return param();
    }
}
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10};
