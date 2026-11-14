let paybtn = document.querySelector(".pay");                                                                                               // pay button
let paybar = document.querySelector(".pay-bar");                                                                                          // pay bar
let receiveprice = document.querySelector(".receiveprice");                                                                              // receive price
let received = document.querySelector(".received");                                                                                     // received price
let confirmbtn = document.querySelector(".confirm-details");                                                                           // confirm button
let totprice = document.querySelector(".tot-price");                                                                                  // total price
let returns = document.querySelector(".return");                                                                                     // return price
let paycash = document.querySelector(".pay-cash");                                                                                  // pay cash button
let holdername = document.querySelector(".holder-name");                                                                           // holder name
let cardnumber = document.querySelector(".card-number");                                                                          // card number
let expirydate = document.querySelector(".date");                                                                                // expiry date
let cvv = document.querySelector(".cvv");                                                                                       // cvv
let cardblock =  document.querySelector(".card-block");                                                                        // card block
let cashblock =  document.querySelector(".cash-block");                                                                       // cash block
let cashbtn =  document.querySelector(".cash-btn");                                                                          // cash button
let cardbtn =  document.querySelector(".card-btn");                                                                         // card button
let  customername = document.querySelector(".customer-name");                                                              // customer name
let  payclose = document.querySelector(".pay-close");                                                                     // pay close button
let historysave = document.querySelector(".history-tr");                                                                 // history save
 window.pricetotal = document.querySelector(".total-price");                                                           // total price

 payclose.addEventListener("click",()=>{                                                                                   // pay close button add event listener
    paybar.style.transform = "translate(550px)";                                                                                   // pay bar transform
 })
paybtn.addEventListener("click",() => {                                                                             // pay button add event listener
    ;
    if( pricetotal.innerHTML != 0)                                                                                          // if total price is not zero
    {
     paybar.style.transform = "translate(0px)";                                                                                     // pay bar transform
     totprice.innerText = window.localStorage.getItem("totalprice");                                                               // total price inner text
    }
    else{                                                                                                                   // if total price is zero
        alert("Please Add Product");
    }
})

cardblock.style.display = "none";                                                                                           // card block display none


confirmbtn.addEventListener("click",()=>{                                                                       // confirm button add event listener
received.innerText =  receiveprice.value;                                                                                   // received price inner text
returns.innerHTML = received.innerText - totprice.innerText;                                                               // return price inner html

paycash.addEventListener("click",()=>{                                                                        // pay cash button add event listener
    localStorage.setItem("savehistory", `
    <td>${customername.value}</td>
    <td>Cash</td>
    <td>${received.innerText}</td>
    <td>${totprice.innerText}</td>`);
    console.log(localStorage.getItem("savehistory"));
    received.innerText = 0;                                                                                                // received price inner text
    totprice.innerText = 0;                                                                                               // total price inner text
    receiveprice.value = "";                                                                                             // receive price value
    customername.value = "";                                                                                            // customer name value
    returns.innerHTML = 0;                                                                                             // return price inner html
    paybar.style.transform = "translate(550px)";                                                                      // pay bar transform
    alert("PAID");                                                                                                   // alert paid
    historysave.innerHTML = window.localStorage.getItem("savehistory");
 })
})
                                                                 // history save inner html
cashbtn.addEventListener("click",()=>{                                                                      // cash button add event listener
    cashbtn.style.backgroundColor = "#0379f86b";                                                                        // cash button background color
    cashbtn.style.color="white";                                                                                         // cash button color
    cardbtn.style.backgroundColor = "white";                                                                            // card button background color
    cardbtn.style.color="black";                                                                                       // card button color
    cardblock.style.display = "none";                                                                                 // card block display none
    cashblock.style.display = "block";                                                                               // cash block display block
    confirmbtn.addEventListener("click",()=>{                                                                       // confirm button add event listener
    received.innerText =  receiveprice.value;                                                                      // received price inner text
    returns.innerHTML = received.innerText - totprice.innerText;                                                  // return price inner html

paycash.addEventListener("click",()=>{                                                                    // pay cash button add event listener
    historysave.style.width = "100%";                                                                                              // history save width 100%
    historysave.style.height = "100%";                                                                                            // history save height 100%
    historysave.innerHTML += `
    <td>${customername.value}</td>
    <td>${totprice.innerText}</td>
    <td>${received.innerText}</td>
    <td>${returns.innerHTML}</td>`;
    console.log(historysave.innerHTML);
    received.innerText = 0;                                                                                            // received price inner text
    totprice.innerText = 0;                                                                                           // total price inner text
    receiveprice.value = 0;                                                                                          // receive price value
    returns.innerHTML = 0;                                                                                          // return price inner html
    paybar.style.transform = "translate(550px)";                                                                   // pay bar transform
    alert("PAID");                
   
 })
})
 


 })
 cardbtn.addEventListener("click",()=>{                                                                 // card button add event listener
    
    cardblock.style.display = "block";                                                                              // card block display block
    cashblock.style.display = "none";                                                                              // cash block display none
    cardbtn.style.backgroundColor = "#0379f86b";                                                                // card button background color
    cardbtn.style.color="white";                                                                                 // card button color
    cashbtn.style.backgroundColor = "white";                                                                    // cash button background color
    cashbtn.style.color="black";                                                                               // cash button color

     paycash.addEventListener("click",()=>{                                                             // pay cash button add event listener
       
    if(holdername.value !== "" && cardnumber.value !== "" && expirydate.value !==  "" &&cvv.value !== ""){                      // if all fields are filled
     paybar.style.transform = "translate(550px)";                                                                                           // pay bar transform
     holdername.value  = "";                                                                                                               // holder name value
     cardnumber.value  = "";                                                                                                              // card number value
     expirydate.value  = "";                                                                                                             // expiry date value
     cvv.value  = "";                                                                                                                   // cvv value
     alert("PAID");                                                                                                                    // alert paid
     }
    else{                                                                                                                       // if any field is empty
        alert("Fill in all the fields");
    }
   })

 })


