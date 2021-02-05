export const add = (numbers: number[]): Number | string => {
  const total: number = numbers.reduce(function (a, b) {
    return a + b;
  });
  return total > 1000 ? "too big" : total;
};
