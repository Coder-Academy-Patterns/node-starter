const { ask, clear, puts, waitThenCall } = require('../utils')

function sum(numbers) {
  let total = 0
  numbers.forEach(number => {
    total = total + number
  })
  return total
}

function sumNumbersInput(numbersString) {
  const numbers = numbersString
    .split(',')
    .map(string => parseFloat(string))

  return sum(numbers)
}

function mainMenu() {
  clear()

  ask('Please enter numbers to sum up:', (numbersString) => {
    const total = sumNumbersInput(numbersString)
    puts(`Your numbers added up to ${total}`)

    // Show menu again
    waitThenCall(mainMenu, 10)
  })
}

mainMenu()
