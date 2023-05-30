const service = require("../service");
const { calculateDiscount } = require("../shop");

describe("calculateDiscount", () => {
  beforeEach(() => {
    service.sendEmail = jest.fn();
  });
  it("should return 50 if user has more than 3 purchase", () => {
    service.getUserById = jest.fn().mockReturnValue({
      id: 1,
      name: "ali",
      purchasesCount: 5,
    });
    expect(calculateDiscount(1)).toBe(50);
  });
  it("should return 10 if user has less than 3 purchase", () => {
    service.getUserById = jest.fn().mockReturnValue({
      id: 1,
      name: "alice",
      purchasesCount: 2,
    });
    expect(calculateDiscount(1)).toBe(10);
  });
  it("should send an email", () => {
    service.getUserById = jest.fn().mockReturnValue({
      id: 1,
      name: "alice",
      purchasesCount: 2,
    });
    calculateDiscount();
    expect(service.sendEmail).toHaveBeenCalled();
    expect(service.sendEmail.mock.calls[0][0]).toBe("alice");
    expect(service.sendEmail.mock.calls[0][1]).toContain("10%");
  });
  afterEach(() => {});
});
