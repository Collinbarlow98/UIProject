// listen for auth status change
//var userNow;
auth.onAuthStateChanged(user =>{
  if (user) {
    console.log('user logged in', user)
    setupUI(user);
  }  else{
    setupUI();
    console.log('user logged out')
  }

})

//create
let movieTitle = document.getElementById("movieTitle")
let movieReview = document.getElementById("movieReview")
let submitButton = document.getElementById("submitButton")

//submitButton.addEventListener('click', (e) =>{

  //e.preventDefault()

  //db.collection('').add({
    //title: movieTitle.value,
    //review: movieReview.value
  //})
//})
// register
let registerEmail = document.getElementById("register-email")
let registerPassword = document.getElementById("register-password")
let loginEmail = document.getElementById('login-email')
let loginPassword = document.getElementById('login-password')
let registerForm = document.getElementById("registerButton")
let logoutButton = document.getElementById("signoutButton")
let loginForm = document.getElementById('loginButton')


registerForm.addEventListener('click', (e) => {

  e.preventDefault();

  // get user info

  const email = registerEmail.value;
  const password = registerPassword.value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email,password).then(cred =>{
    console.log(cred.user.email)
  })
})

//sign out user
logoutButton.addEventListener('click' , (e) =>{
  e.preventDefault();
  auth.signOut().then(() =>{

  })
})

//log in user

loginForm.addEventListener('click', (e) => {

  e.preventDefault();

  // get user info

  const email = loginEmail.value;
  const password = loginPassword.value;

  // sign up the user
  auth.signInWithEmailAndPassword(email,password).then(cred =>{
    console.log(cred.user.email)
  })
}) 

// ui identifier

const loginLink = document.querySelectorAll(".login")
const logoutlink = document.querySelectorAll(".logout")

const setupUI = (user =>{
  if (user){
    loginLink.forEach(item => item.style.display = 'block')
    logoutlink.forEach(item => item.style.display = 'none')
  }   else{
    loginLink.forEach(item => item.style.display = 'none')
    logoutlink.forEach(item => item.style.display = 'block')
  }
  
})