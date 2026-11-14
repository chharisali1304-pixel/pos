let titlebar = document.querySelectorAll(".title-btn");                                         // title bar buttons
let rolsection = document.querySelector(".rolex-section");                                     // rolex section
let longsection = document.querySelector(".longines-section");                                // longines section
let calsection = document.querySelector(".calvin-section");                                  // calvin section
let seisection = document.querySelector(".seiko-section");                                  // seiko section
let rol = document.querySelector(".ti1");                                                  // rolex button
let long = document.querySelector(".ti2");                                                // longines button
let cal = document.querySelector(".ti3");                                                // calvin button
let sei = document.querySelector(".ti4");                                               // seiko button

let arr = Array.from(titlebar);                                                      // convert nodelist to array

  longsection.style.display = "none";                                                      // longines section hide
  rolsection.style.display = "block";                                                     // rolex section show
  calsection.style.display = "none";                                                     // calvin section hide
  seisection.style.display = "none";                                                    // seiko section hide
  rol.style.backgroundColor="#14467a";                                               // rolex button background color
  rol.style.color = "white";                                                          // rolex button text color
 arr.forEach(titlebar => {                                                                      // loop through titlebar buttons

    titlebar.addEventListener("click",(e) => {                                                  // add event listener to each button

        const text = e.target.textContent.trim();                                        // get the text content of the clicked button and trim whitespace
         if(text == "ROLEX"){                                                                       // check if the text is "ROLEX"
            rol.style.backgroundColor="#14467a";                                                                  // set background color for rolex button
            rol.style.color = "white";                                                                             // set text color for rolex button
            sei.style.backgroundColor="white";                                                                    // set background color for seiko button
            sei.style.color = "black";                                                                           // set text color for seiko button
            long.style.backgroundColor="white";                                                                 // set background color for longines button
            long.style.color = "black";                                                                        // set text color for longines button
            cal.style.backgroundColor="white";                                                                // set background color for calvin button
            cal.style.color = "black";                                                                       // set text color for calvin button
            longsection.style.display = "none";                                                             // hide longines section
            calsection.style.display = "none";                                                             // hide calvin section
            seisection.style.display = "none";                                                            // hide seiko section
            rolsection.style.display = "block";                                                          // show rolex section
            console.log("foreachroool")
         }
         else if(text == "LONGINES"){                                                       // check if the text is "LONGINES"
            long.style.backgroundColor="#14467a";                                                             // set background color for longines button
            long.style.color = "white";                                                                        // set text color for longines button
            rol.style.backgroundColor="white";                                                                // set background color for rolex button
            rol.style.color = "black";                                                                       // set text color for rolex button
            sei.style.backgroundColor="white";                                                              // set background color for seiko button
            sei.style.color = "black";                                                                     // set text color for seiko button
            cal.style.backgroundColor="white";                                                            // set background color for calvin button
            cal.style.color = "black";                                                                   // set text color for calvin button
            longsection.style.display = "block";                                                        // show longines section
            rolsection.style.display = "none";                                                         // hide rolex section
            calsection.style.display = "none";                                                        // hide calvin section
            seisection.style.display = "none";                                                       // hide seiko section
            console.log("foreachlooon")
        }
         else if(text == "CALVIN KLEIN"){                                                   // check if the text is "CALVIN KLEIN"
             cal.style.backgroundColor="#14467a";                                                          // set background color for calvin button
            cal.style.color = "white";                                                                      // set text color for calvin button
               long.style.backgroundColor="white";                                                         // set background color for longines button
            long.style.color = "black";                                                                   // set text color for longines button
             sei.style.backgroundColor="white";                                                          // set background color for seiko button
            sei.style.color = "black";                                                                  // set text color for seiko button
             rol.style.backgroundColor="white";                                                        // set background color for rolex button
            rol.style.color = "black";                                                                // set text color for rolex button
             longsection.style.display = "none";                                                     // hide longines section
             rolsection.style.display = "none";                                                     // hide rolex section
               calsection.style.display = "block";                                                 // show calvin section
              seisection.style.display = "none";                                                  // hide seiko section
              console.log("foreachlooon")
        } else if(text == "SEIKO"){                                                          // check if the text is "SEIKO"
             sei.style.backgroundColor="#14467a";                                                          // set background color for seiko button
            sei.style.color = "white";                                                                      // set text color for seiko button
             rol.style.backgroundColor="white";                                                            // set background color for rolex button
            rol.style.color = "black";                                                                    // set text color for rolex button
             long.style.backgroundColor="white";                                                         // set background color for longines button
            long.style.color = "black";                                                                 // set text color for longines button
             cal.style.backgroundColor="white";                                                        // set background color for calvin button
            cal.style.color = "black";                                                                // set text color for calvin button
             longsection.style.display = "none";                                                     // hide longines section
             rolsection.style.display = "none";                                                     // hide rolex section
               calsection.style.display = "none";                                                  // hide calvin section
              seisection.style.display = "block";                                                 // show seiko section
              console.log("foreachlooon")
        }
    })
});
let logout = document.querySelector(".siz");                                                          // logout button
logout.addEventListener("click" ,() =>{                                                   // add event listener to logout button
  console.log("ygyg")
 
  window.location.href = "login.html";                                                          // redirect to login page
  window.localStorage.setItem("inputuser","");                                                 // clear inputuser in local storage
  window.localStorage.setItem("inputpass","");                                                // clear inputpass in local storage
})
