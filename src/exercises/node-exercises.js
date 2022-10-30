import { Router } from 'express'

const router = Router()

// TODO: Node exercises ohne express, dann sind die express speziefischen statements wie z.B. "router.get" verwirrend.

// Java Script basics crash course
// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#language_basics_crash_course | Im Crash-Course geht es um JavaScript im Browser, vieleicht Fragen sich manche wo ein Knopf sein soll, der in dem Crash-Course genannt wurde

// The exercises are inspired by:
// https://javascript.info/


// Console output
// https://developer.mozilla.org/en-US/docs/Web/API/Console/log
function exercise01(inputString) {
  console.log(inputString)
  console.error(inputString)
}
router.get('/node-01/', (req, res) => {
  const functionInput = req.query.id
  exercise01(functionInput)
  res.json({result : req.query.id})
})

// Data Types
// https://javascript.info/types#type-typeof
function exercise02(inputString) {
  console.log(typeof inputString)

  try {
    console.log(Number(inputString))
  }
  catch (e)  {
    console.log(e.error)
  }
  return typeof inputString
}
router.get('/node-02/:functionInput', (req, res) => {
  const functionInput = req.params?.functionInput
  res.json({res : exercise02(functionInput)})
})

function exercise03(inputString) {
  return typeof inputString
}
router.get('/node-03/:functionInput', (req, res) => {
  const functionInput = req.params?.functionInput
  const answer = exercise03(functionInput)
  res.json({exercise: 'Return type of input', result: answer})
})


// Conversion
// https://javascript.info/type-conversions#numeric-conversion
function exercise04(inputString) {
  if (isNaN(inputString)) {
    return "Input is not a string"
  } else {
    return inputString * 2
  }
}
router.get('/node-04/:functionInput', (req, res) => {
  const functionInput = req.params?.functionInput
  const answer = exercise04(functionInput)
  res.json({exercise: 'Multiply the input by 2', result: answer})
})


// Comparisons
// https://javascript.info/comparison
function exercise05(inputString) {
  if (!isNaN(inputString) && inputString > 10) {
    return "true"
  } else {
    return "false"
  }
}
router.get('/node-05/:functionInput', (req, res) => {
  const functionInput = req.params?.functionInput
  const answer = exercise05(functionInput)
  res.json({exercise: 'Is the input bigger than 10?', result: answer})
})


// Objects
// https://javascript.info/object
function exercise06(inputObject) {
  return inputObject.lastName
}
router.post('/node-06', (req, res) => {
  const functionInput = req.body // {"firstName": "John", "lastName": "Smith"}
  const answer = exercise06(functionInput)
  res.json({exercise: 'Return the last name of the user', result: answer})
})


// https://javascript.info/object#square-brackets
function exercise07(inputObject) {
  let new_obj = {}
  new_obj['propertyName'] = inputObject.propertyName
  new_obj['propertyValue'] = inputObject.propertyValue
  return new_obj
}
router.post('/node-07', (req, res) => {
  const functionInput = req.body  // {"propertyName": "isAdmin", "propertyValue": true}
  const answer = exercise07(functionInput)
  res.json({exercise: 'Create a new Object with the given property name and value', result: answer})
})


// Array
// https://javascript.info/array
// https://javascript.info/array#loops
function exercise08(inputArray) {
  return inputArray.join(" ")
}
router.post('/node-08', (req, res) => {
  const functionInput = req.body  // ["This", "is", "an", "array!"]
  const answer = exercise08(functionInput)
  res.json({exercise: 'Return the elements of the array as one string', result: answer})
})

// https://javascript.info/string#string-length
// https://javascript.info/array-methods#transform-an-array
// TODO: What is a loop -> Documentation link
function exercise09(inputArray) {
  return inputArray.join("").length
}
router.post('/node-09', (req, res) => {
  const functionInput = req.body  // ["This", "is", "an", "array!"]
  const answer = exercise09(functionInput)
  res.json({exercise: 'Calculate the sum of characters in the array', result: answer})
})


export default router