fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1&region=US")
.then((response) => {
  return response.json()
})
.then(json => {
console.log(json)
let results = json.results
let nowplaying = results.map((result) => {
  console.log(result)
  return `<div><img src="https://image.tmdb.org/t/p/w500/${result.poster_path}"style="height: 250; width: 200"/> <li>${result.title}</li>
  <li>${result.vote_average}</li></div>`
})
moviesUL.innerHTML = nowplaying.join('')
})
