const axios = require('axios')

const github = axios.create({
  baseURL: 'https://api.github.com'
})

function reposBy(username) {
  return github.get(`/users/${username}/repos`)
}

module.exports = { reposBy }