function formatVanityPlate(string) {
  let words = string.split(' ')
  words = words.map(word => word.toUpperCase())
  return words.join('')
}

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)

const two = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlate(two) }`)


/*

1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/