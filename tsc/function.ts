let fn:(name:string,age:number)=>string;

fn = function(a,b){
    return `${a}${b}`
}

let fn2;

fn2 = function(name:string,age:number):string{
    return `${name}${age}`
}

let fn3:(name:string,age:number)=>string=function(
    a:string,
    b:number
):string{
    return `${a}${b}`
}

export {}