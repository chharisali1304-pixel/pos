
let register = document.querySelector(".login-btn1");                         // register button call
let login = document.querySelector(".login-btn2");                            // login button call
let title = document.querySelector(".login-header h1");                       // login container title call
let emailInput = document.querySelector(".email-input");                      // email input call
let emaillogo = document.querySelector(".email-logo");                        // email input logo call
let inputblock = document.querySelector(".input-block");                      // input block call
let usernameInput = document.querySelector(".username-input");                // username input call
let passwordInput = document.querySelector(".password-input");                // password input call

let  usersave ="";
let passsave ="";

 if(localStorage.getItem("inputuser") === "" && localStorage.getItem("inputpass") === "")   // uses local storage for login 
  {
 
                                                   // register button functionality
register.addEventListener("click", () => {
 title.innerHTML = "Register";
 emailInput.style.display = "block";
 emaillogo.style.display = "block";
 register.classList.remove("login-btn2");
 login.classList.add("login-btn2");
                                                         
  if(emailInput.value === "" && usernameInput.value === "" && passwordInput.value === ""){
     alert("Please fill in all the fields.");
   }
   else{
                                                       // register addevent listener for login and storing local storage
        register.addEventListener("click", () =>
         {                                              // register condition
                                                        //  if inputs are filled 
                                                        // then go to login page.
                                                        // Otherwise shows alert
            if(emailInput.value !== "" && usernameInput.value !== "" && passwordInput.value !== "")
              {
                                                                    
                title.innerHTML = "Login";
                emailInput.style.display = "none";
                emaillogo.style.display = "none";
                
                register.classList.add("login-btn2");            
                login.classList.remove("login-btn2");
                localStorage.setItem("inputuser",usernameInput.value);
                localStorage.setItem("inputpass",passwordInput.value);
                usersave = usernameInput.value;
                passsave = passwordInput.value;
                localStorage.setItem("user",usernameInput.value);
                localStorage.setItem("pass",passwordInput.value);
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

 login.addEventListener("click", () => {                             //login addEventListener
  
  title.innerHTML = "Login";
  emailInput.style.display = "none";
  emaillogo.style.display = "none";
  register.classList.add("login-btn2");
  login.classList.remove("login-btn2");
  console.log("log");
      login.addEventListener("click", () => {                       // login addEventlistener for POS.html file
       if(localStorage.getItem("user") === usernameInput.value &&  localStorage.getItem("pass") ===  passwordInput.value)
        { 
         window.location.href = "POS.html";
         }
       else if(usernameInput.value === "" && passwordInput.value === ""){
     alert("Please enter your username and password.");
   }
     })
   
});
}
else{
 window.location.href = "POS.html";
 }
