export const convertStringListToNumberList = (args: string[]): number[] => {
  return args.map(function (value) {
    const a = parseInt(value, 10);
    if (isNaN(a)) {
      throw new Error("文字列から数値への変換ができませんでした。1");
    }
    return a;
  });
};
