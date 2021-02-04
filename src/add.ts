export const add = (numbers: number[]): Number | string => {
  if (numbers.length > 30) {
    throw new Error("配列数が過剰です。30要素数以下にしてください。");
  }
  const total: number = numbers.reduce(function (a, b) {
    return a + b;
  });
  return total > 1000 ? "too big" : total;
};
