"use strict";
exports.__esModule = true;
exports.subtract = void 0;
var subtract = function (numbers) {
    var total = numbers.reduce(function (a, b) {
        return a - b;
    });
    return total < 0 ? "negative number" : total;
};
exports.subtract = subtract;
