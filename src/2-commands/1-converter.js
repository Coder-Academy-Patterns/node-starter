const { ask, clear, puts, waitThenCall } = require('../utils')

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

function mainMenu() {
  clear()

  ask('Please enter temperature in Celsius:', (celsiusString) => {
    const celsius = parseFloat(celsiusString)
    const fahrenheit = convertCelsiusToFahrenheit(celsius)
    puts(`${celsius}°C is ${fahrenheit}°F`)

    // Show menu again
    waitThenCall(mainMenu, 10)
  })
}

mainMenu()

/*

Challenges:
1. Extend with main menu that asks for either Celsius of Fahrenheit

*/
