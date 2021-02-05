export const convertStringListToNumberList = (args: string[]): number[] => {
  return args.map(function (value) {
    const _ = parseInt(value, 10);
    if (isNaN(_)) {
      throw new Error("文字列から数値への変換ができませんでした。");
    }
    return _;
  });
};
