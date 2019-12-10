let registerEmailText = document.getElementById('registerEmailText')
let registerPasswordText = document.getElementById('registerPasswordText')
let registerButton = document.getElementById('registerButton')

let signinEmailText = document.getElementById('signinEmailText')
let signinPasswordText = document.getElementById('signinPasswordText')
let signinButton = document.getElementById('signinButton')

registerButton.addEventListener('click', () => {

  let email = registerEmailText.value
  let password = registerPasswordText.value

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
})

signinButton.addEventListener('click', () => {
  let email = signinEmailText.value
  let password = signinPasswordText.value
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  // ...
  });
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

  } else {
    // User is signed out.
    // ...
  }
