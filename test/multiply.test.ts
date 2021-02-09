import { multiply } from "../src/multiply";

describe("multiplyのテスト", () => {
  test("渡された引数に対して計算を行い、結果を返す", () => {
    expect(multiply([0])).toBe(0);
    expect(multiply([1])).toBe(1);
    expect(multiply([1, 2])).toBe(2);
    expect(multiply([3, 10, 3])).toBe(90);
  });
  test("引数が数字以外だとエラーが発生する", () => {
    // typescriptで弾く
  });
  test("足し算の場合、計算結果が1000を超える場合は合計ではなく「too big」と文字列が返る", () => {
    expect(multiply([1000, 1])).toBe(1000);
    expect(multiply([1001, 1])).toBe("big big number");
  });
});
