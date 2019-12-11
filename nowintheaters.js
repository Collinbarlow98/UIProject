fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1&region=US")
  .then((response) => {
    return response.json()
  })
  .then(json => {
    let results = json.results
    let nowplaying = results.map((result) => {
      let poster = result.poster_path
      return `<div style="display: flex"><img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" style="height: 250; width: 200"/>${result.title}</div>`

    })
    moviesUL.innerHTML += nowplaying.join('')
  })
