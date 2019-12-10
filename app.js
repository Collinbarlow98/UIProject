
let movieTitleText = document.getElementById('movieTitleText')
let movieReviewText = document.getElementById('movieReviewText')
let submitReviewButton = document.getElementById('submitReviewButton')
let signoutButton = document.getElementById('signoutButton')

let database = firebase.database();
let root = database.ref()
let movieList = root.child('Movie List')

submitReviewButton.addEventListener('click', () => {
  let title = movieTitleText.value
  let review = movieReviewText.value
  let movie = movieList.child(title)
  movie.push({
    review: review
  })
})

function displayMovies(movieList) {
  movieListUL.innerHTML = ``
  const movies = Object.keys(movieList)
  for(const key of movies) {
    let movieItems = `<li>${key}</li>`
    movieListUL.innerHTML += movieItems

    let reviewList = movieList[`${key}`]
    const reviews = Object.values(reviewList)
    for(const value of reviews) {
      let review = `<p>${value.review}</p>`
      movieListUL.innerHTML += review
    }
  }
}

function setupObservers() {
  movieList.on('value', (snapshot) => {
    let snapshotValue = snapshot.val()

    displayMovies(snapshotValue)
  })
}

setupObservers()
