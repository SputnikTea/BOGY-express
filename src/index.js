import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { v4 as uuid } from "uuid";
import db from "./db.js";

const app = express();

console.log(db.Users[0].balance);

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Nothing here, try an other route");
});

app.get("/balance/:userId", (req, res) => {
  const userId = req.params.userId;

  const user = db.Users.find((user) => user.userId === userId);

  res.status(200).json({ balance: user.balance });
});

app.post("/transfer/:userId", (req, res) => {
  const userId = req.params.userId;
  const recipientId = req.body.recipientId;
  const amount = req.body.amount;

  const transfer = {
    transferId: uuid(),
    from: userId,
    to: recipientId,
    amount: amount,
  };

  const user = db.Users.find((user) => user.userId === userId);
  const recipient = db.Users.find((user) => user.userId === recipientId);

  user.balance = user.balance - amount;
  user.transfers.push(transfer.transferId);

  recipient.balance = user.balance + amount;
  recipient.transfers.push(transfer.transferId);

  db.Transfers.push(transfer);

  res.status(200).json({ balance: user.balance });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
