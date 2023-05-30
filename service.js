function getUserById(id) {
  console.log("reading data from DB...");
  const users = [
    { id: 1, name: "salar", purchasesCount: 4 },
    { id: 2, name: "ali", purchasesCount: 12 },
    { id: 3, name: "john", purchasesCount: 3 },
    { id: 4, name: "amir", purchasesCount: 1 },
  ];
  return users.find((user) => user.id === id);
}

function sendEmail(name, message) {
  console.log("Email was sended.");
}

module.exports = {
  getUserById,
  sendEmail,
};
