const { menu, clear, puts, waitThenCall } = require('./utils')
const Animal = require('./models/animal')

function displayAll() {
  Animal.all().forEach((animal, index) => {
    puts(`${index+1}. ${animal.name}`)
  })
}

function mainMenu() {
  clear()

  menu([
    '1. List all',
  ], (choice) => {
    if (choice == '1') {
      displayAll()
    }
    else {
      puts(`Unknown choice: ${choice}`)
    }
    // Show menu again
    waitThenCall(mainMenu, 1)
  })
}

mainMenu()
