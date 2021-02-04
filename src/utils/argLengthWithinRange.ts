export const argLengthWithinRange = (
  args: any[], // todo ANYの撲滅
  maxLength: number,
  minimumLength: number
) => {
  if (args.length > maxLength) {
    throw new Error("配列数が過剰です。");
  }
  if (args.length <= minimumLength) {
    throw new Error("配列の要素数が足りません。");
  }
  return args;
};
