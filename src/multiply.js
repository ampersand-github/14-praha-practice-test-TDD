"use strict";
exports.__esModule = true;
exports.multiply = void 0;
var multiply = function (numbers) {
    var total = numbers.reduce(function (a, b) {
        return a * b;
    });
    return total > 1000 ? "big big number" : total;
};
exports.multiply = multiply;
