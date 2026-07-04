let register = document.querySelector(".login-btn1");
let login = document.querySelector(".login-btn2");
let title = document.querySelector(".login-header h1");
let emailInput = document.querySelector(".email-input");
let usernameInput = document.querySelector(".username-input");
let passwordInput = document.querySelector(".password-input");
let inputuser;
let inputpass;

//let register = document.querySelector(".login-btn2");

login.addEventListener("click", () => {
  title.innerHTML = "Login";
  emailInput.style.display = "none";
  register.classList.add("login-btn2");
  login.classList.remove("login-btn2");
      login.addEventListener("click", () => {
       if(usernameInput.value === inputuser && passwordInput.value === inputpass)
        
        {
         window.location.href = "POS.html";
       }
       else if(usernameInput.value === "" && passwordInput.value === ""){
     alert("Please enter your username and password.");
   }
     })
   
});

register.addEventListener("click", () => {
  title.innerHTML = "Register";
 emailInput.style.display = "block";
  register.classList.remove("login-btn2");
  login.classList.add("login-btn2");
  if(emailInput.value === "" && usernameInput.value === "" && passwordInput.value === ""){
     alert("Please fill in all the fields.");
   }
   else{
        register.addEventListener("click", () =>
         {
            if(emailInput.value !== "" && usernameInput.value !== "" && passwordInput.value !== "")
              {

                title.innerHTML = "Login";
                emailInput.style.display = "none";
                register.classList.add("login-btn2");
                login.classList.remove("login-btn2");
                inputuser = usernameInput.value;
                inputpass = passwordInput.value;
                usernameInput.value = "";
                passwordInput.value = "";
              
              }
              else if(emailInput.value === "" || usernameInput.value === "" || passwordInput.value === "")
              {
                alert("Please fill in all the fields.");
              }
           })
        }
});

