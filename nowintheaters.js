fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1&region=US")
  .then((response) => {
    return response.json()
  })
  .then(json => {
    let results = json.results
    let nowplaying = results.map((result) => {
      let poster = result.poster_path
      return `<a href="reviews.html#${result.title}" style="display: flex; flex-direction: column; margin: 20; align-items: center;">
      <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" style="height: 250; width: 200; margin: 24;"/>
      <div style="text-align: center; max-width: 200;">
      <li style="list-style-type: none;">${result.title}</li>
      </div>
      </a>`
    })
    moviesUL.innerHTML += nowplaying.join('')
  })
