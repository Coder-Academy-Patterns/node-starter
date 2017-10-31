const { ask, clear, puts, waitThenCall } = require('../utils')
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
        waitThenCall(mainMenu, 10)
      })
      .catch(error => {
        console.error(error)

        // Show menu again
        waitThenCall(mainMenu, 10)
      })
  })
}

mainMenu()
