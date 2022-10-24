import { Router } from 'express'
import {v4 as uuid} from "uuid";
import db from '../db.js'

const router = Router()
const { Users, Transfers } = db

// Express routing guide
// https://expressjs.com/en/guide/routing.html
// An shorter way to write functions (Arrow Functions)
// https://javascript.info/arrow-functions-basics

// Build an endpoint that response with the first user Object from the db
// the URL should be http://localhost:3000/exercises/express/user/<userId>
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
router.get('/express/user/:userid', (req, res) => {
  const userId = req.params?.userid
  const user = Users.find((user) => user.userId === userId);
  if (user) {
    res.json(user)
  } else {
    res.send('No user with' + userId + 'found')
  }
})

// Build an endpoint that creates a new user in the db and returns the new total count of users in the db
// the URL should be http://localhost:3000/exercises/express/user
// https://www.restapitutorial.com/lessons/httpmethods.html
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/push
router.post('/express/user', (req, res) => {
  const user = req.body
  const amountOfUsers = Users.push(user)

  res.json({ totalUserAmount: amountOfUsers })
})

// Build an endpoint that allows user A to make a transaction to user B
// The request body should look like that: {"from":"0123","to":"3210","amount":10}
// https://javascript.info/object-copy
router.post('/express/transfer', (req, res) => {
  const transfer = req.body
  transfer.transferId = uuid()

  let fromUser = {}
  let toUser = {}

  try {
    fromUser = getUser(transfer.from)
    toUser = getUser(transfer.to)

    fromUser.balance -= transfer.amount
    fromUser.transfers.push(transfer.transferId)
    toUser.balance += transfer.amount
    toUser.transfers.push(transfer.transferId)

    Transfers.push(transfer)
  } catch (e) {
    console.log('An error occurred while processing a transfer', e)
    res.status(500).send('An error occurred while processing your transfer')
  }

  const returnObj = {
    fromUserBalance: fromUser.balance,
    toUserBalance: toUser.balance
  }
  res.json(returnObj)
})

function getUser(userId) {
  return Users.find((user) => user.userId === userId);
}

export default router