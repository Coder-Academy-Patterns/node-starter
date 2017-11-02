const github = require('../models/github')

github.reposBy('facebook')
  .then(res => {
    const repos = res.data
    console.log(`Found ${repos.length} repos:`)
    repos.forEach(repo => {
      console.log(`${repo.name}`)
    })
  })
