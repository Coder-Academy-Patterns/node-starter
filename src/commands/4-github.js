const { ask, clear, puts, confirmThenCall } = require('../utils')
const github = require('../models/github')

function mainMenu() {
  clear()

  ask('Please enter username:', (username) => {
    github.reposBy(username)
      .then(res => {
        const repos = res.data
        puts(`Found ${repos.length} repos:`)
        repos.forEach(repo => {
          puts(`${repo.name}`)
        })

        // Show menu again
        confirmThenCall(mainMenu)
      })
      .catch(error => {
        console.error(error)

        // Show menu again
        confirmThenCall(mainMenu)
      })
  })
}

mainMenu()
