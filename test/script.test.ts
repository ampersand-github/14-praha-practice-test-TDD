import { convertStringListToNumberList } from "../src/utils/convertStringListToNumberList";
import { add } from "../src/add";
import { argLengthWithinRange } from "../src/utils/argLengthWithinRange";

describe("scriptのテスト", () => {
  test("convertNumberList", () => {
    expect(convertStringListToNumberList(["1", "2"])).toStrictEqual([1, 2]);
    expect(() => {
      convertStringListToNumberList(["a", "2"]);
    }).toThrowError();
  });

  test("argLengthWithinRange", () => {
    const MAX_LENGTH = 30;
    const MINIMUM_LENGTH = 1;
    //
    expect(
      argLengthWithinRange(new Array(1).fill(1), MAX_LENGTH, MINIMUM_LENGTH)
    ).toStrictEqual([1]);
    expect(
      argLengthWithinRange(new Array(30).fill(1), MAX_LENGTH, MINIMUM_LENGTH)
    ).toStrictEqual(new Array(30).fill(1));
    expect(() => {
      argLengthWithinRange([], MAX_LENGTH, MINIMUM_LENGTH);
    }).toThrowError();
    expect(() => {
      argLengthWithinRange(new Array(31), MAX_LENGTH, MINIMUM_LENGTH);
    }).toThrowError();
  });
});
