import { convertStringListToNumberList } from "./src/utils/convertStringListToNumberList";
import { argLengthWithinRange } from "./src/utils/argLengthWithinRange";
import { add } from "./src/add";
import { multiply } from "./src/multiply";
import { subtract } from "./src/subtract";
import { divide } from "./src/divide";

type argsType = "multiply" | "add" | "subtract" | "divide";

const secondArg: argsType = process.argv[2] as argsType;
//
const _ = process.argv.filter((value, index) => {
  if (index === 0 || index === 1 || index === 2) {
    //　ほしい情報は引数3つめ移行
  } else {
    return value;
  }
});
const thirdOrLaterArgs = convertStringListToNumberList(_);
//
argLengthWithinRange(thirdOrLaterArgs, 30, 0);

switch (secondArg) {
  case "add":
    const addResult = add(thirdOrLaterArgs);
    console.log(addResult);
    break;
  case "multiply":
    const multiplyResult = multiply(thirdOrLaterArgs);
    console.log(multiplyResult);
    break;
  case "subtract":
    const subtractResult = subtract(thirdOrLaterArgs);
    console.log(subtractResult);
    break;
  case "divide":
    const divideResult = divide(thirdOrLaterArgs);
    console.log(divideResult);
    break;
  default:
    console.log("引数が間違っています");
}
