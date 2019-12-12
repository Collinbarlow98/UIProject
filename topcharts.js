fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1&region=US")
.then((response) => {
  return response.json()
})
.then(json => {
let results = json.results
let nowplaying = results.map((result) => {
  return `<div style="display: flex; flex-direction: column; margin: 39; align-items: center;"><img src="https://image.tmdb.org/t/p/w500/${result.poster_path}"style="height: 250; width: 200"/><div style="text-align: center;"><li style="list-style-type: none;">${result.title}</li>
  <li style="list-style-type: none;">Rating: ${result.vote_average}</li></div></div>`
})
moviesUL.innerHTML = nowplaying.join('')
})
