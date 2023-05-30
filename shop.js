const service = require("./service");

function calculateDiscount(id) {
  let discount = 10;
  const user = service.getUserById(id);
  if (user && user.purchasesCount > 3) {
    discount = 50;
  }
  service.sendEmail(user.name, `you have got ${discount}% discount`);
  return discount;
}

module.exports = {
  calculateDiscount,
};
