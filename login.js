
let register = document.querySelector(".login-btn1");
let login = document.querySelector(".login-btn2");
let title = document.querySelector(".login-header h1");
let emailInput = document.querySelector(".email-input");
let emaillogo = document.querySelector(".email-logo");
let inputblock = document.querySelector(".input-block");
let usernameInput = document.querySelector(".username-input");
let passwordInput = document.querySelector(".password-input");

let  usersave ="";
let passsave ="";


console.log( localStorage.getItem("inputuser"));

//let register = document.querySelector(".login-btn2");
 if(localStorage.getItem("inputuser") === "" && localStorage.getItem("inputpass") === ""){
 

register.addEventListener("click", () => {
  title.innerHTML = "Register";
   console.log("reg")
 emailInput.style.display = "block";
 emaillogo.style.display = "block";
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
                 console.log("log3")
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
                  console.log(usersave)
                  console.log(passsave)
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

login.addEventListener("click", () => {
  
  title.innerHTML = "Login";
  emailInput.style.display = "none";
  emaillogo.style.display = "none";
  register.classList.add("login-btn2");
  login.classList.remove("login-btn2");
  console.log("log");
      login.addEventListener("click", () => {
       
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
