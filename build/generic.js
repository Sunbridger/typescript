"use strict";
// Typescript 复杂泛型实践：如何切掉函数参数表的最后一个参数？
// type MyS<T> = keyof string;
// const newPer: MyNewPerson = {
//     iphone: 12,
//     id: 21
// };
// keyof 获取某个属性
// 获取对象属性值
function getVal(obj, key) {
    return obj[key];
}
getVal({
    name: 'xxx'
}, 'name');
var ntf = 'd';
var mustAll = {
    name: 'xx',
    age: 1,
    id: 2,
    createdAt: 'asa',
    updatedAt: 'xx'
};
// 0 是任何非any的子集
var bool1 = true;
