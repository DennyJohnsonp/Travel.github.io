const loginForm = document.getElementById("login-form");
const closeLoginDialog = document.getElementById("closebtn")
const signupForm = document.getElementById("signup-form");
const loginButton = document.getElementById("login-form-submit");
const signupButton = document.getElementById("signup-form-submit");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");


closeLoginDialog.addEventListener("click", (e) => {
  e.preventDefault();
  window.location='index.html'
})

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    //Change Value to change login credentials
    if (username === "admin" && password === "123" || username === "chaithanya" && password === "456") {
      errorMsg.style.display = 'none';
      successMsg.innerText = "Login Successful"
      successMsg.style.display = 'block';
      setTimeout(() =>  window.location='index.html', 2000);
      
    } else {
      errorMsg.innerText = "Invalid username or password"
      errorMsg.style.display = 'block';
    }
})

signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = signupForm.username.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  

  if (username !== " " && password !== " " && email !== " " && email.includes('@')) {
    errorMsg.style.display = 'none';
    successMsg.innerText = "Sign Up Successful"
    successMsg.style.display = 'block';
    setTimeout(() =>  window.location='index.html', 2000);
  } else {
    errorMsg.innerText = "Invalid username or email or password entered";
    errorMsg.style.display = 'block';
  }
})