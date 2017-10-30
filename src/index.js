const readline = require('readline')
const Animal = require('./models/animal')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function displayAll() {
  Animal.all().forEach((animal, index) => {
    rl.write(`${index+1}. `)
    rl.write(animal.name)
    rl.write('\n')
  })
}

function mainMenu() {
  rl.write('\033c')
  rl.write('\n')

  rl.question([
    '1. List all',
    ''
  ].join('\n') + '> ', (choice) => {
    if (choice == '1') {
      displayAll()
    }
    else {
      rl.write(`Unknown choice: ${choice}\n`)
    }
    // Show menu again
    setTimeout(mainMenu, 1000)
  })
}

mainMenu()
