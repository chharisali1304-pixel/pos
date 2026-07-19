let titlebar = document.querySelectorAll(".title-btn");
let rolsection = document.querySelector(".rolex-section");
let longsection = document.querySelector(".longines-section");
let calsection = document.querySelector(".calvin-section");
let seisection = document.querySelector(".seiko-section");
let rol = document.querySelector(".ti1");
let long = document.querySelector(".ti2");
let cal = document.querySelector(".ti3");
let sei = document.querySelector(".ti4");

let arr = Array.from(titlebar);

  longsection.style.display = "none";
  calsection.style.display = "none";
  seisection.style.display = "none";

 arr.forEach(titlebar => {

    titlebar.addEventListener("click",(e) => {

        const text = e.target.textContent.trim();
         if(text == "ROLEX"){
            rol.style.backgroundColor="#14467a";
            rol.style.color = "white";
                 sei.style.backgroundColor="white";
            sei.style.color = "black";
             long.style.backgroundColor="white";
            long.style.color = "black";
             cal.style.backgroundColor="white";
            cal.style.color = "black";
            longsection.style.display = "none";
             calsection.style.display = "none";
              seisection.style.display = "none";
            rolsection.style.display = "block";
             console.log("foreachroool")
         }
         else if(text == "LONGINES"){
             long.style.backgroundColor="#14467a";
            long.style.color = "white";
             rol.style.backgroundColor="white";
            rol.style.color = "black";
               sei.style.backgroundColor="white";
            sei.style.color = "black";
             cal.style.backgroundColor="white";
            cal.style.color = "black";
             longsection.style.display = "block";
             rolsection.style.display = "none";
               calsection.style.display = "none";
              seisection.style.display = "none";
              console.log("foreachlooon")
        }
         else if(text == "CALVIN KLEIN"){
             cal.style.backgroundColor="#14467a";
            cal.style.color = "white";
               long.style.backgroundColor="white";
            long.style.color = "black";
             sei.style.backgroundColor="white";
            sei.style.color = "black";
             rol.style.backgroundColor="white";
            rol.style.color = "black";
             longsection.style.display = "none";
             rolsection.style.display = "none";
               calsection.style.display = "block";
              seisection.style.display = "none";
              console.log("foreachlooon")
        } else if(text == "SEIKO"){
             sei.style.backgroundColor="#14467a";
            sei.style.color = "white";
             rol.style.backgroundColor="white";
            rol.style.color = "black";
             long.style.backgroundColor="white";
            long.style.color = "black";
             cal.style.backgroundColor="white";
            cal.style.color = "black";
             longsection.style.display = "none";
             rolsection.style.display = "none";
               calsection.style.display = "none";
              seisection.style.display = "block";
              console.log("foreachlooon")
        }
    })
});
let logout = document.querySelector(".siz");
logout.addEventListener("click" ,() =>{
  console.log("ygyg")
 
  window.location.href = "login.html";
  
  window.localStorage.clear();
 
})
