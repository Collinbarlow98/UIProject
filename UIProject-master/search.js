
let movieid = document.getElementById('movieid')


function linkedFromOtherPage() {
  let movieTitle = location.hash.substring(1);
  let movieid = movieTitle;
  moviesUL.innerHTML = ''
  if(movieid != '') {
    fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=ddcb97784f13102b72af6aa3e89493b4&language=en-US`)
      .then((response) => {
        return response.json()
      })
      .then(json => {
        
        let result = json
        let id = result.id
        let title = result.title
        console.log(result)
              let group = `<div class="media">
                            <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" class="align-self-auto mr-3" alt="noImage" onerror="this.src='timages/noImage.jpg'" style="hieght: 300; width: 200;"/>
                            <div class="media-body">
                              <h1 id="movieTitle" class="mt-0">${result.title}</h1>
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
                    let reviewContent = `<h5 class="mt-0" id="reviewUser">${review.username}</h5>
                                         <p class="reviewText" id="userReview">${review.review}</p>`
                    grab.innerHTML += reviewContent
                  });
                })
                moviesUL.innerHTML += group
                moviesUL.innerHTML += submitReviews
            });

  }
}

linkedFromOtherPage()

function addReview(id, title) {
  let input = document.getElementById(`${id}`)
  let movieReview = input.value
  if(movieReview != null) {
    db.collection(`${id}`).doc(userNow).set({
      username: userNow,
      title: title,
      review: movieReview,
    })
  }
}
