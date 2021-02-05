"use strict";
exports.__esModule = true;
exports.add = void 0;
var add = function (numbers) {
    var total = numbers.reduce(function (a, b) {
        return a + b;
    });
    return total > 1000 ? "too big" : total;
};
exports.add = add;
