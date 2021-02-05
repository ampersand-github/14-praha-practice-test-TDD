import { divide } from "../src/divide";

describe("divideのテスト", () => {
  test("渡された引数に対して計算を行い、結果を返す", () => {
    expect(divide([0])).toBe(0);
    expect(divide([0, 1])).toBe(0);
    expect(divide([10, 10])).toBe(1);
    expect(divide([10, 0.5])).toBe(20);
    expect(divide([1000, 10, 10])).toBe(10);
    expect(divide([10, 3])).toBe(3.3333333333333335);
  });
});
