import { Router } from 'express'
// import {v4 as uuid} from "uuid";
import db from '../db.js'

const app = Router() // ich hab es app genannt, in index.js ist es auch app

const { Users, Transfers } = db

// requests immer mit /exercises am anfang

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.json(req.params)
})

// Express routing guide
// https://expressjs.com/en/guide/routing.html
// An shorter way to write functions (Arrow Functions)
// https://javascript.info/arrow-functions-basics

// Express-01
// Build an endpoint that response with the first user Object from the db
// the URL should be http://localhost:3000/exercises/express/user/<userId>
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

app.get('/user_db/:num', (req, res) => {
    console.log(Users[req.params['num']])
    res.json(Users[req.params['num']] !== undefined ? Users[req.params['num']] : "500: Internal Server error")
})

// Express-02
// Build an endpoint that creates a new user in the db and returns the new total count of users in the db
// the URL should be http://localhost:3000/exercises/express/user
// https://www.restapitutorial.com/lessons/httpmethods.html
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/push

app.post('/add_user', (req, res) => {
    Users.push(req.body)
    console.log(req.body)
    res.json(Users)
})

// Express-03
// Build an endpoint that allows user A to make a transaction to user B
// The request body should look like that: {"from":"0123","to":"3210","amount":10}
// https://javascript.info/object-copy
// https://www.npmjs.com/package/uuid | wofür ist das? und was soll ich mit dem array "Transfers" machen
// TODO: How does the URL in Postman look?

app.post('/express/transfer', (req, res) => {
    let body = req.body

    let from_user = Users.find(obj => {
        return obj.userId === body.from
    })

    let to_user = Users.find(obj => {
        return obj.userId === body.to
    })

    to_user.balance += body.amount
    from_user.balance -= body.amount

    res.send(Users)
})

export default app