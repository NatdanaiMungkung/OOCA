const { calculatePrice } = require("./calculatePrice");
// Example usage
const order = {
  Red: 1,
  Green: 2,
  Blue: 3,
  Yellow: 1,
  Pink: 2,
  Purple: 1,
  Orange: 2,
  // Durian: 2,
};
const hasMemberCard = true;

try {
  const totalPrice = calculatePrice(order, hasMemberCard);
  console.log("Total Price:", totalPrice);
} catch (error) {
  console.error("Error:", error.message);
}
