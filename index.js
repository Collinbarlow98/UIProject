fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ddcb97784f13102b72af6aa3e89493b4")
  .then((response) => {
    return response.json()
  })
  .then(json => {
    let results = json.results
    let trending = results.map((result) => {
      let poster = `https://image.tmdb.org/t/p/w500/${result.poster_path}`
      let title = result.title
      return `<a class="tile" href="reviews.html#${title}">
                <div class="tile__media">
                  <img class="tile__img" src="${poster}" alt="No Image" onerror="this.src='timages/noImage.jpg'">
                </div>
                <div class="tile__details">
                  <div class="tile__title">
                    ${title}
                  </div>
                </div>
              </a>`
    })
    trendingCarousel.innerHTML = trending.join('')
  })

fetch("https://api.themoviedb.org/3/discover/movie?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18")
  .then((response) => {
    return response.json()
  })
  .then(json => {
    let results = json.results
    let drama = results.map((result) => {
      let poster = `https://image.tmdb.org/t/p/w500/${result.poster_path}`
      let title = result.title
      return `<a class="tile" href="reviews.html#${title}">
                <div class="tile__media">
                  <img class="tile__img" src="${poster}" alt="No Image" onerror="this.src='timages/noImage.jpg'">
                </div>
                <div class="tile__details">
                  <div class="tile__title">
                    ${title}
                  </div>
                </div>
              </a>`
    })
    dramaCarousel.innerHTML = drama.join('')
  })

fetch("https://api.themoviedb.org/3/discover/movie?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27")
  .then((response) => {
    return response.json()
  })
  .then(json => {
    let results = json.results
    let horror = results.map((result) => {
      let poster = `https://image.tmdb.org/t/p/w500/${result.poster_path}`
      let title = result.title
      return `<a class="tile" href="reviews.html#${title}">
                <div class="tile__media">
                  <img class="tile__img" src="${poster}" alt="No Image" onerror="this.src='timages/noImage.jpg'">
                </div>
                <div class="tile__details">
                  <div class="tile__title">
                      ${title}
                  </div>
                </div>
              </a>`
    })
    horrorCarousel.innerHTML = horror.join('')
  })

fetch("https://api.themoviedb.org/3/discover/movie?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749")
  .then((response) => {
    return response.json()
  })
  .then(json => {
    let results = json.results
    let romance = results.map((result) => {
      let poster = `https://image.tmdb.org/t/p/w500/${result.poster_path}`
      let title = result.title
      return `<a class="tile" href="reviews.html#${title}">
                <div class="tile__media">
                  <img class="tile__img" src="${poster}" alt="No Image" onerror="this.src='timages/noImage.jpg'">
                </div>
                <div class="tile__details">
                  <div class="tile__title">
                    ${title}
                  </div>
                </div>
              </a>`
    })
    romanceCarousel.innerHTML = romance.join('')
  })
