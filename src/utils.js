const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function menu(choices, callback) {
  rl.question(choices.join('\n') + '\n> ', callback)
}

function clear() {
  rl.write('\033c')
  rl.write('\n')
}

function puts(s) {
  rl.write(s + '\n')
}

function waitThenCall(f, delaySeconds = 1) {
  setTimeout(f, delaySeconds * 1000)
}

module.exports = { menu, clear, puts, waitThenCall }