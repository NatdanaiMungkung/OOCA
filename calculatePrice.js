const Menu = {
  Red: { name: "Red", price: 50 },
  Green: { name: "Green", price: 40 },
  Blue: { name: "Blue", price: 30 },
  Yellow: { name: "Yellow", price: 50 },
  Pink: { name: "Pink", price: 80 },
  Purple: { name: "Purple", price: 90 },
  Orange: { name: "Orange", price: 120 },
};

function calculatePrice(order, hasMemberCard) {
  let totalPrice = 0;

  for (const [menuName, quantity] of Object.entries(order)) {
    const menuItem = Menu[menuName];
    if (!menuItem) {
      throw new Error(`Invalid menu item: ${menuName}`);
    }

    let itemPrice = menuItem.price * quantity;

    // Apply 5% discount for Orange, Pink, or Green sets if quantity is doubled
    if (
      menuItem === Menu.Orange ||
      menuItem === Menu.Pink ||
      menuItem === Menu.Green
    ) {
      if (quantity >= 2) {
        itemPrice *= 0.95;
      }
    }

    // Apply 10% discount for customers with a member card
    if (hasMemberCard) {
      itemPrice *= 0.9;
    }

    totalPrice += itemPrice;
  }

  return Number(totalPrice.toFixed(2)); // Round the final price to 2 decimal places
}

module.exports = {
  calculatePrice,
};
