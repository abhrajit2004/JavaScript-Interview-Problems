function calculateTotal() {
    let products = {
        1: 9000,
        2: 15000,
        3: 20000,
        4: 25000,
        5: 30000
  };
  let sum = 0;
  for (quantity in products) {
        sum += products[quantity];
  }
  return sum;
}
console.log("Total price from the cart:", calculateTotal());