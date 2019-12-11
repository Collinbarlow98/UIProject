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
      let nowplaying = results.map((result1) => {
        let id = result1.id
        let movietitle = `<li>${result1.original_title}</li>`

        fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en`)
          .then((response) => {
            return response.json()
          })
          .then(json => {
            let results = json.posters
            let filepath = results[0]

            return poster = `<img src="https://image.tmdb.org/t/p/w500/${filepath.file_path}" style="height: 250; width: 200"/>`
        })

        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1`)
          .then((response) => {
            return response.json()
          })
          .then(json => {
            let results = json.results
            let nowplaying = results.map((result) => {
              return `<li>${result.content}</li>`
            })
            if(json.results != 0) {
              let div = document.createElement("DIV")
              div.innerHTML += poster
              div.innerHTML += movietitle
              div.innerHTML += nowplaying.join('')
              document.body.append(div);
            }
          })
          })
      })
    })
