import { subtract } from "../src/subtract";

describe("subtractのテスト", () => {
  test("渡された引数に対して計算を行い、結果を返す", () => {
    expect(subtract([3, 10, 3])).toBe("negative number");
    expect(subtract([0, 1])).toBe("negative number");
    expect(subtract([1, 1])).toBe(0);
  });
});
