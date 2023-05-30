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

function login(password) {
  if (password !== "1234") {
    throw new Error("password is wrong!");
  }
  return { jwt: "token" };
}

module.exports = { gte, welcomeMessage, shoppingList, getUser, login };
