const gte = require("../code");

describe("gte", () => {
  it("should return true if 'a' is greater than 'b'", () => {
    const result = gte(4, 2);
    expect(result).toBe(true);
  });

  it("should return false if 'a' is lower than 'b'", () => {
    const result = gte(5, 8);
    expect(result).toBe(false);
  });

  it("should return true if 'a' is equal with 'b'", () => {
    const result = gte(9, 9);
    expect(result).toBe(true);
  });
});
