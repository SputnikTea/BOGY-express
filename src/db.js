const Users = [
  {
    userId: "0123",
    name: "Alice",
    balance: 20,
    transfers: ["0987"],
  },
  {
    userId: "3210",
    name: "Bob",
    balance: 0,
    transfers: ["0987"],
  },
];

const Transfers = [
  { transferId: "0987", from: "0123", to: "3210", amount: 10 },
];

const db = { Users, Transfers };

export default db;
