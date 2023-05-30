const { gte, welcomeMessage, shoppingList } = require("../code");

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

describe("welcomeMessage", () => {
  it("should return a welcome message containing the name", () => {
    const result = welcomeMessage("salar");
    expect(result).toContain("salar");
  });
});

describe("shoppingList", () => {
  it("should pass if the shopping list has computer on it", () => {
    const result = shoppingList();
    expect(result).toContain("computer");
  });
});
