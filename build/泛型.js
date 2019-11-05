"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(msg) {
    return msg;
}
function fn2(msg) {
    console.log(msg.length, '必须有长度的数组');
    return msg;
}
function fn3(msg) {
    console.log(msg.length, '必须有长度的数组');
    return msg;
}
fn('xxx');
fn2([1, 'xx']);
fn3([1, 'xx']);
var getDataFn = function (arg) {
    var data;
    data = {
        name: 'xxx',
        age: 12,
        likes: ['xxx', 'aaa']
    };
    return data;
};
function fn4(msg) {
    return msg;
}
fn4({ length: 5 });
