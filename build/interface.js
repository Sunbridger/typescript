"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1:除了描述带有属性的普通对象外，
 * 2:接口也可以描述函数类型。
 */
function getInfo(obj) {
    var name = obj.name, age = obj.age;
    return {
        name: name,
        age: age
    };
}
var fn = function (n, a, g) {
    return a > 10;
};
// 上面写法比较标准 其实可以让ts智能提示我们就好
var fn2 = function (n, a, g) {
    return a > 10;
};
// 注意参数必须严格遵守label这个接口的定义规范
console.log(getInfo({ name: 'xxx', age: 6 }));
console.log(getInfo({ name: 'aaa', age: 1, isgood: true }));
console.log(fn('xxx', 12, true));
console.log(fn2('xxx', 12, true));
