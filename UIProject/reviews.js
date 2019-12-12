let movieids = document.getElementById('movieid')

moviesearch.addEventListener('click', () => {
  let movieid = movieids.value
  moviesUL.innerHTML = ''

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&query=${movieid}&page=1&include_adult=true`)
    .then((response) => {
      return response.json()
    })
    .then(json => {
      let results = json.results
      let nowplaying = results.map((result) => {
        let id = result.id

        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1`)
          .then((response) => {
            return response.json()
          })
          .then(json => {
            let reviewArray = json.results
            if(reviewArray != 0) {
              let reviews = reviewArray.map((review) => {
                return `<li>${review.content}</li>`
              })              
              let reviewsGrouped = reviews.join('')
              let group = `<div><img src="https://image.tmdb.org/t/p/w500/${result.poster_path}"style="height: 250; width: 200"/><li>${result.title}</li>${reviewsGrouped}`
              moviesUL.innerHTML += group
            }
          })
      })
    })
})
