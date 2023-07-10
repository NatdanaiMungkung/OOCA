const { calculatePrice } = require("../index");
// Unit test using Jest
describe("calculatePrice", () => {
  it("calculates the total price correctly without a member card", () => {
    const order = {
      Red: 1,
      Green: 1,
      Blue: 3,
      Yellow: 1,
      Pink: 1,
      Purple: 1,
      Orange: 1,
    };
    const hasMemberCard = false;

    const totalPrice = calculatePrice(order, hasMemberCard);

    expect(totalPrice).toBe(520);
  });

  it("calculates the total price correctly with a member card", () => {
    const order = {
      Red: 1,
      Green: 1,
      Blue: 3,
      Yellow: 1,
      Pink: 1,
      Purple: 1,
      Orange: 1,
    };
    const hasMemberCard = true;

    const totalPrice = calculatePrice(order, hasMemberCard);

    // Expected total price with member card discount: 920 * 0.9 = 828
    expect(totalPrice).toBe(468);
  });

  it("calculates the total price correctly with doubled Orange, Pink, and Green sets", () => {
    const order = {
      Orange: 2,
      Pink: 4,
      Green: 3,
    };
    const hasMemberCard = false;

    const totalPrice = calculatePrice(order, hasMemberCard);

    // Expected total price with doubled sets discount: (120 * 2 * 0.95) = 228 + (80 * 4 * 0.95) = 304 + (40 * 3 * 0.95) = 114 = 1012.8
    expect(totalPrice).toBe(646);
  });

  it("calculates the total price correctly with doubled Orange, Pink, and Green sets and a member card", () => {
    const order = {
      Orange: 2,
      Pink: 4,
      Green: 3,
    };
    const hasMemberCard = true;

    const totalPrice = calculatePrice(order, hasMemberCard);

    // Expected total price with doubled sets discount and member card discount: 646 * 0.9 = 581.4
    expect(totalPrice).toBe(581.4);
  });

  it("throws an error for an invalid menu item", () => {
    const order = {
      Red: 1,
      InvalidItem: 2,
    };
    const hasMemberCard = false;

    expect(() => calculatePrice(order, hasMemberCard)).toThrow(
      "Invalid menu item: InvalidItem"
    );
  });
});
