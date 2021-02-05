export const subtract = (numbers: number[]): Number | string => {
  const total: number = numbers.reduce(function (a, b) {
    return a - b;
  });
  return total < 0 ? "negative number" : total;
};
