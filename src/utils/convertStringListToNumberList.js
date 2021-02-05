"use strict";
exports.__esModule = true;
exports.convertStringListToNumberList = void 0;
var convertStringListToNumberList = function (args) {
    return args.map(function (value) {
        var _ = parseInt(value, 10);
        if (isNaN(_)) {
            throw new Error("文字列から数値への変換ができませんでした。");
        }
        return _;
    });
};
exports.convertStringListToNumberList = convertStringListToNumberList;
