
let movieids = document.getElementById('movieid')

movieSearch.addEventListener('click', () => {
  let movieid = movieids.value
  moviesUL.innerHTML = ''

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&query=${movieid}&page=1&include_adult=false`)
    .then((response) => {
      return response.json()
    })
    .then(json => {
      let results = json.results
      let nowplaying = results.map((result) => {
        let id = result.id
        let title = result.title

        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1`)
          .then((response) => {
            return response.json()
          })
          .then(json => {
            let reviewArray = json.results
            let reviews = reviewArray.map((review) => {
              return `<h5 class="mt-0">${review.author}</h5><p class="reviewText">${review.content}</p>`
            })

            let reviewsGrouped = reviews.join('')
            let group = `<div class="media">
                          <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" class="align-self-auto mr-3" alt="noImage" onerror="this.src='timages/noImage.jpg'" style="hieght: 300; width: 200;"/>
                          <div class="media-body">
                            <h1 class="mt-0" style="padding-top: 10;">${result.title}</h1>
                            <p>${reviewsGrouped}</p>
                            <div id="${id}div">
                            </div>
                          </div>
                        </div>`

            let submitReviews = `<div class="form-group mx-sm-3 mb-2" style="display: flex; align-items: baseline; margin: 10 0;">
                                  <div style="width: 275;">Submit Review or Edit Review</div>
                                  <input type="text" class="form-control" id='${id}' placeholder="Enter Review" style="margin: 0 10;">
                                  <button id="movieSearch" onClick='addReview(${id}, "${title}")' type="submit" class="btn btn-primary mb-2">
                                    Submit
                                  </button>
                                </div>`

            db.collection(`${id}`).get()
              .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                  let grab = document.getElementById(`${id}div`)
                  let review = doc.data();
                  let reviewContent = `<h5 class="mt-0">${review.username}</h5>
                                       <p class="reviewText">${review.review}</p>`
                  grab.innerHTML += reviewContent
                });
              })
            moviesUL.innerHTML += group
            moviesUL.innerHTML += submitReviews
          });
      })
    })
})

function addReview(id, title) {
  let input = document.getElementById(`${id}`)
  let movieReview = input.value
  if(movieReview != null) {
    db.collection(`${id}`).doc(userNow).set({
      username: userNow,
      title: title,
      review: movieReview,
    })
    db.collection(`${id}`).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let grab = document.getElementById(`${id}div`)
          grab.innerHTML = ''
          let review = doc.data();
          let reviewContent = `<h5 class="mt-0">${review.username}</h5>
                               <p class="reviewText">${review.review}</p>`
          grab.innerHTML += reviewContent
        });
      })
  }
}

function linkedFromOtherPage() {
  let movieTitle = location.hash.substring(1);
  let movieid = movieTitle;
  moviesUL.innerHTML = ''
  if(movieid != '') {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&query=${movieid}&page=1&include_adult=false`)
      .then((response) => {
        return response.json()
      })
      .then(json => {
        let results = json.results
        let nowplaying = results.map((result) => {
          let id = result.id
          let title = result.title

          fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1`)
            .then((response) => {
              return response.json()
            })
            .then(json => {
              let reviewArray = json.results
              let reviews = reviewArray.map((review) => {
                return `<h5 class="mt-0">${review.author}</h5>
                        <p class="reviewText">${review.content}</p>`
              })
              let reviewsGrouped = reviews.join('')
              let group = `<div class="media">
                            <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" class="align-self-auto mr-3" alt="noImage" onerror="this.src='timages/noImage.jpg'" style="hieght: 300; width: 200;"/>
                            <div class="media-body">
                              <h1 id="padding10" class="mt-0">${result.title}</h1>
                              <p>${reviewsGrouped}</p>
                              <div id="${id}div">
                              </div>
                            </div>
                           </div>`
              let submitReviews = `<div class="form-group mx-sm-3 mb-2" style="display: flex; align-items: baseline; margin: 10 0;">
                                    <div style="width: 120;">Submit Review</div>
                                    <input type="text" class="form-control" id='${id}' placeholder="Enter Review" style="margin: 0 10;">
                                    <button id="movieSearch" onClick='addReview(${id}, "${title}")' type="submit" class="btn btn-primary mb-2">
                                      Submit
                                    </button>
                                   </div>`

              db.collection(`${id}`).get()
                .then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {
                    let grab = document.getElementById(`${id}div`)
                    let review = doc.data();
                    let reviewContent = `<h5 class="mt-0">${review.username}</h5>
                                         <p class="reviewText">${review.review}</p>`
                    grab.innerHTML += reviewContent
                  });
                })
                moviesUL.innerHTML += group
                moviesUL.innerHTML += submitReviews
            });
        })
      })
  }
}
linkedFromOtherPage()
