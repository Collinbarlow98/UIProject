
let movieids = document.getElementById('movieid')
movieSearch.addEventListener('click', () => {
  let movieid = movieids.value


  fetch(`https://api.themoviedb.org/3/search/movie?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&query=${movieid}&page=1&include_adult=false`)
    .then((response) => {
      return response.json()
          })
          .then(json => {
            let results = json.results
            let topcharts = results.map((result) => {
              let poster = result.poster_path
              return `<a id="margin25" class="tile" href="search.html#${result.id}">
                        <div class="tile__media">
                          <img class="tile__img_nowplaying" src="https://image.tmdb.org/t/p/w500/${poster}" alt="No Image" onerror="this.src='timages/noImage.jpg'">
                        </div>
                        <div class="tile__details">
                          <div class="tile__title">
                            ${result.title} Rating: ${result.vote_average}
                          </div>
                        </div>
                      </a>`
            })
            for(let index = 0; index < 5; index++) {
              let movie = topcharts[index]
              zeroThroughFive.innerHTML += movie
            }
            for(let index = 5; index < 10; index++) {
              let movie = topcharts[index]
              fiveThroughTen.innerHTML += movie
            }
            for(let index = 10; index < 15; index++) {
              let movie = topcharts[index]
              tenThroughFifteen.innerHTML += movie
            }
            for(let index = 15; index < 20; index++) {
              let movie = topcharts[index]
              fifteenThroughTwenty.innerHTML += movie
            }
          })
        })
  