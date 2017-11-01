function presentMovie(movie) {
  const title = movie.title
  const yearReleased = movie.yearReleased
  const stars = movie.stars

  let output = ''
  output += `## ${title} (${yearReleased}) ##`
  output += '\n'
  output += 'Starring: ' + stars.join(', ')
  
  return output
}

console.log(
  presentMovie({
    title: 'Blade Runner',
    yearReleased: 1982,
    stars: ['Harrison Ford']
  })
)
