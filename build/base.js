"use strict";
// base类型
var a = 12;
var b = false;
var c = 'sunbridger';
// 数组 确定类型
var arr1 = [1, 2];
var arr2 = [1, 2, 3];
// 不确定类型
var arr3 = [1, 'a', true, {}, [], null];
var arr4 = ['v', 2, {}, []];
var u = undefined;
var n = null;
function fn() {
    console.log('没有返回值的函数');
}
// 使用枚举类型可以为一组数值赋予友好的名字
// 仅限为数字哦 其他的不行
// 数字默认从0递增
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var d = Color.Green;
console.log(d == 1);
var Font;
(function (Font) {
    Font[Font["flaga"] = 11] = "flaga";
    Font[Font["flagb"] = 2] = "flagb";
    Font["flagc"] = "ccc";
})(Font || (Font = {}));
console.log(Font.flaga === 1);
getName(90);
console.log(P.getName('xxx'));
var da = { hashname: 'ss' };
