const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function menu(choices, callback) {
  rl.question(choices.join('\n') + '\n> ', callback)
}

function ask(question, callback) {
  rl.question(question + '\n> ', callback)
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

function confirmThenCall(f) {
  rl.question('Press enter to continue…', f)
}

module.exports = { menu, ask, clear, puts, waitThenCall, confirmThenCall }