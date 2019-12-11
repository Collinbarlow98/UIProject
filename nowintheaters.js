fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ddcb97784f13102b72af6aa3e89493b4")
.then((response) => {
  return response.json()
})
.then(json => {
console.log(json)
let results = json.results
let nowplaying = results.map((result) => {
  console.log(result)
  return `<li>${result.original_title}</li>`
})
moviesUL.innerHTML = nowplaying.join('')
})
