"use strict";
function getD(param) {
    if (typeof param === 'string') {
        return param;
    }
    else {
        return param();
    }
}
var box = { height: 5, width: 6, scale: 10 };
