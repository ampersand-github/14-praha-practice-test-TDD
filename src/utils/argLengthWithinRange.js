"use strict";
exports.__esModule = true;
exports.argLengthWithinRange = void 0;
var argLengthWithinRange = function (
// 配列の数だけみたいのでここのanyは許容
args, maxLength, minimumLength) {
    if (args.length > maxLength) {
        throw new Error("配列数が過剰です。");
    }
    if (args.length < minimumLength) {
        throw new Error("配列の要素数が足りません。");
    }
    return args;
};
exports.argLengthWithinRange = argLengthWithinRange;
