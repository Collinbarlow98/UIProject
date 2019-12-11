
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
        let title = result.title

        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US&page=1`)
          .then((response) => {
            return response.json()
          })
          .then(json => {
            let reviewArray = json.results
            let reviews = reviewArray.map((review) => {
              return `${review.author}<li>${review.content}</li>`
            })

            let reviewsGrouped = reviews.join('')
            let group = `<div id="${id}div" style="margin: 10 0"><img src="https://image.tmdb.org/t/p/w500/${result.poster_path}"style="height: 250; width: 200"/><li>${result.title}</li>${reviewsGrouped}</div>`
            let submitReview = `Submit Review<input id='${id}' type="text" style="margin: 0 10"/><button onClick='addReview(${id}, "${title}")'>Submit</button>`
            db.collection(`${id}`).get()
              .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                  let grab = document.getElementById(`${id}div`)
                  let review = doc.data();
                  let reviewContent = `${review.username}<li>${review.review}</li>`
                  grab.innerHTML += reviewContent
                });
              })

            moviesUL.innerHTML += group
            moviesUL.innerHTML += submitReview
        });
      })
    })
})

function addReview(id, title) {
  let input = document.getElementById(`${id}`)
  let movieReview = input.value
  if(movieReview != null) {
    db.collection(`${id}`).doc().set({
      username: userNow,
      title: title,
      review: movieReview,
    })
    let grab = document.getElementById(`${id}div`)
    let reviewContent = `${userNow}<li>${movieReview}</li>`
    grab.innerHTML += reviewContent
  }
}
