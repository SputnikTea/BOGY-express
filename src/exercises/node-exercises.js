import { Router } from 'express'

const router = Router()

// Java Script basics crash course
// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#language_basics_crash_course

// The exercises are inspired by:
// https://javascript.info/


// Console output
// https://developer.mozilla.org/en-US/docs/Web/API/Console/log
function exercise01(inputString) {
  console.log(inputString)
}
router.get('/node-01/:functionInput', (req, res) => {
  const functionInput = req.params?.functionInput
  exercise01(functionInput)
  res.json({exercise: 'Log the input in the console'})
})

// Data Types
// https://javascript.info/types#type-typeof
function exercise02(inputString) {
  console.log(typeof inputString)
}
router.get('/node-02/:functionInput', (req, res) => {
  const functionInput = req.params?.functionInput
  exercise02(functionInput)
  res.json({exercise: 'Print type of input to console'})
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
  console.log(inputString * 2)
}
router.get('/node-04/:functionInput', (req, res) => {
  const functionInput = req.params?.functionInput
  const answer = exercise04(functionInput)
  res.json({exercise: 'Multiply the input by 2', result: answer})
})


// Comparisons
// https://javascript.info/comparison
function exercise05(inputString) {
  console.log(inputString > 10)
}
router.get('/node-05/:functionInput', (req, res) => {
  const functionInput = req.params?.functionInput
  const answer = exercise05(functionInput)
  res.json({exercise: 'Is the input bigger than 10?', result: answer})
})


// Objects
// https://javascript.info/object
function exercise06(inputObject) {

  console.log(inputObject.lastName)
  return inputObject.lastName

}
router.post('/node-06', (req, res) => {
  const functionInput = req.body // {"firstName": "John", "lastName": "Smith"}
  const answer = exercise06(functionInput)
  res.json({exercise: 'Return the last name of the user', result: answer})
})

// https://javascript.info/object#square-brackets
function exercise07(inputObject) {
  let newObject= {"propertyName": "isAdmin", "propertyValue": true}
  return newObject


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
  let array= ["this is an array!"]
  return array



}
router.post('/node-08', (req, res) => {
  const functionInput = req.body  // ["This", "is", "an", "array!"]
  const answer = exercise08(functionInput)
  res.json({exercise: 'Return the elements of the array as one string', result: answer})
})

// https://javascript.info/string#string-length
// https://javascript.info/array-methods#transform-an-array
function exercise09(inputArray) {

}
router.post('/node-09', (req, res) => {
  const functionInput = req.body  // ["This", "is", "an", "array!"]
  const answer = exercise09(functionInput)
  res.json({exercise: 'Calculate the sum of characters in the array', result: answer})
})


export default router