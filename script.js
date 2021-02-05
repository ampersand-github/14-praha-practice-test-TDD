"use strict";
exports.__esModule = true;
var convertStringListToNumberList_1 = require("./src/utils/convertStringListToNumberList");
var argLengthWithinRange_1 = require("./src/utils/argLengthWithinRange");
var add_1 = require("./src/add");
var multiply_1 = require("./src/multiply");
var subtract_1 = require("./src/subtract");
var divide_1 = require("./src/divide");
var secondArg = process.argv[2];
//
var _ = process.argv.filter(function (value, index) {
    if (index === 0 || index === 1 || index === 2) {
        //
    }
    else {
        return value;
    }
});
var thirdOrLaterArgs = convertStringListToNumberList_1.convertStringListToNumberList(_);
//
argLengthWithinRange_1.argLengthWithinRange(thirdOrLaterArgs, 30, 0);
switch (secondArg) {
    case "add":
        var addResult = add_1.add(thirdOrLaterArgs);
        console.log(addResult);
        break;
    case "multiply":
        var multiplyResult = multiply_1.multiply(thirdOrLaterArgs);
        console.log(multiplyResult);
        break;
    case "subtract":
        var subtractResult = subtract_1.subtract(thirdOrLaterArgs);
        console.log(subtractResult);
        break;
    case "divide":
        var divideResult = divide_1.divide(thirdOrLaterArgs);
        console.log(divideResult);
        break;
    default:
        console.log("引数が間違っています");
}
