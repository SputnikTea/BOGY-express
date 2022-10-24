import { Router } from 'express'
// import {v4 as uuid} from "uuid";
// import db from '../db.js'

const router = Router()
// const { Users, Transfers } = db

// Express routing guide
// https://expressjs.com/en/guide/routing.html
// An shorter way to write functions (Arrow Functions)
// https://javascript.info/arrow-functions-basics

// Express-01
// Build an endpoint that response with the first user Object from the db
// the URL should be http://localhost:3000/exercises/express/user/<userId>
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


// Express-02
// Build an endpoint that creates a new user in the db and returns the new total count of users in the db
// the URL should be http://localhost:3000/exercises/express/user
// https://www.restapitutorial.com/lessons/httpmethods.html
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/push


// Express-03
// Build an endpoint that allows user A to make a transaction to user B
// The request body should look like that: {"from":"0123","to":"3210","amount":10}
// https://javascript.info/object-copy
// https://www.npmjs.com/package/uuid


export default router