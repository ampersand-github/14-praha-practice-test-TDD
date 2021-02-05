"use strict";
exports.__esModule = true;
exports.divide = void 0;
var divide = function (numbers) {
    var total = numbers.reduce(function (a, b) {
        return a / b;
    });
    return total;
};
exports.divide = divide;
