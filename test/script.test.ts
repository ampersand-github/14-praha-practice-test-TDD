import { convertStringListToNumberList } from "../src/utils/convertStringListToNumberList";
import { add } from "../src/add";

describe("scriptのテスト", () => {
  test("convertNumberList", () => {
    expect(convertStringListToNumberList(["1", "2"])).toStrictEqual([1, 2]);
    expect(() => {
      convertStringListToNumberList(["a", "2"]);
    }).toThrowError();
  });
  test("argLengthWithinRange", () => {});
});
