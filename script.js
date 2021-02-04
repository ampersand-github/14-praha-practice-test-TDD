// npx tsc script.ts; node script.js add
// npx tsc script.ts; node script.js aaaa bbbb cccc dddd eeeee
console.log(" - - - script - - - ");
var secondArg = process.argv[2];
var args = process.argv.splice(0, 2);
switch (secondArg) {
    case "add":
        console.log("add");
        break;
    case "multiply":
        console.log("multiply");
        break;
    case "subtract":
        console.log("subtract");
        break;
    case "divide":
        console.log("divide");
        break;
    default:
        console.log("引数が間違っています");
}
/*

export const script = (args: string[]) => {
  console.log(args);
  const secondArg: argsType = process.argv[2] as argsType;
  return "true";
};
export const aaa = () => {
  return "true";
};

console.log(script(["a", "n"]));
 */
/*
const action: argsType = process.argv[2] as argsType;
const args = process.argv.splice(0, 2);


console.log(process.argv);
console.log(args);

export const script = () => {
  console.log(process.argv[2]);
  const secondArg: argsType = process.argv[2] as argsType;
  return "true";
};
 */
/*
if (process.argv[2] === argsType) {
  multiply(1);
} else {
  console.log("引数エラー");
}


ts-node script.ts
node script.js multiply 3 10 3 // 90を返す
node script.js add 3 10 3 // 16を返す
node script.js subtract 3 10 3 // -10を返す
node script.js divide 100 10 // 10を返す
以下の仕様を満たすものとします
渡された引数に対して計算を行い、結果を返す
1個〜30個までの引数を受け取る（31個以上の引数を指定するとエラーが発生する）
引数が数字以外だとエラーが発生する
足し算の場合、計算結果が1000を超える場合は合計ではなく「too big」と文字列が返る
引き算の場合、計算結果がマイナスの場合は「negative number」と文字列が返る
かけ算の場合、計算結果が1000を越える場合は「big big number」と文字列が返る
割り算の場合、計算結果を小数点何桁まで考慮するかは特に指定がありません。お任せします！

 */
