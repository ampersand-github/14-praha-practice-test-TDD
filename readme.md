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

// npx tsc script.ts; node script.js add
// npx tsc script.ts; node script.js aaaa bbbb cccc dddd eeeee

npx tsc index.ts; node index.js te
