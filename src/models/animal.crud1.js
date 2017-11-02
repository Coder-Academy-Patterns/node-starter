let items = [
  {
    id: 1,
    name: 'Gorillas',
    count: 4
  },
  {
    id: 2,
    name: 'Zebra',
    count: 14
  },
  {
    id: 3,
    name: 'Meercats',
    count: 26
  }
]

const all = () => items
  .slice() // Make copy
  .sort((a, b) => { // Sort by name
    if (a.name < b.name) {
      return -1
    }
    else if (a.name > b.name) {
      return 1
    }
    else {
      return 0
    }
})

const find = (id) => {
  const index = parseInt(id, 10)
  return items[index]
}

const search = (query) => {
  query = query.toLowerCase()
  return items.filter(item => {
    return item.name.toLowerCase().indexOf(query) !== -1
  })
}

const create = ({ name, count }) => {
  const animal = {
    id: items.length + 1,
    name,
    count: parseInt(count, 10)
  }
  items.push(animal)
  return animal
}

module.exports = { all, find, search, create }