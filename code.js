function gte(a, b) {
  return a >= b;
}

function welcomeMessage(name) {
  return `Hello ${name}. Welcome to jest sample.`;
}

function shoppingList() {
  return ["computer", "laptop", "headphone"];
}

function getUser() {
  return {
    id: 1,
    name: "salar",
  };
}

module.exports = { gte, welcomeMessage, shoppingList, getUser };
