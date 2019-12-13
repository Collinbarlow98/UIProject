fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1&region=US")
.then((response) => {
  return response.json()
})
.then(json => {
  let results = json.results
  let upcoming = results.map((result) => {
    let poster = result.poster_path
    return `<a id="margin25" class="tile" href="reviews.html#${result.title}">
              <div class="tile__media">
                <img class="tile__img_nowplaying" src="https://image.tmdb.org/t/p/w500/${result.poster_path}" alt="No Image" onerror="this.src='timages/noImage.jpg'">
              </div>
              <div class="tile__details">
                <div class="tile__title">
                ${result.title} Release Date: ${result.release_date}
                </div>
              </div>
            </a>`
  })
  for(let index = 0; index < 5; index++) {
    let movie = upcoming[index]
    zeroThroughFive.innerHTML += movie
  }
  for(let index = 5; index < 10; index++) {
    let movie = upcoming[index]
    fiveThroughTen.innerHTML += movie
  }
  for(let index = 10; index < 15; index++) {
    let movie = upcoming[index]
    tenThroughFifteen.innerHTML += movie
  }
  for(let index = 15; index < 20; index++) {
    let movie = upcoming[index]
    fifteenThroughTwenty.innerHTML += movie
  }
})











/*let results = json.results
let nowplaying = results.map((result) => {
  return `<a href="reviews.html#${result.title}" class="linkReview">
  <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" alt="No Image" onerror="this.src='timages/noImage.jpg'" style="height: 250; width: 200"/>
  <div style="text-align: center; max-width: 200;">
  <li style="list-style-type: none;">${result.title}</li>
  <li style="list-style-type: none;">Release Date:${result.release_date}</li>
  </div>
  </a>`
})
moviesUL.innerHTML = nowplaying.join('')
})*/
