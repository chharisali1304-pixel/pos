let paybtn = document.querySelector(".pay");
let paybar = document.querySelector(".pay-bar");
let receiveprice = document.querySelector(".receiveprice");
let received = document.querySelector(".received");
let confirmbtn = document.querySelector(".confirm-details");
let totprice = document.querySelector(".tot-price");
let returns = document.querySelector(".return");
let paycash = document.querySelector(".pay-cash");
 let holdername = document.querySelector(".holder-name");
      let cardnumber = document.querySelector(".card-number");
      let expirydate = document.querySelector(".date");
      let cvv = document.querySelector(".cvv");
let cardblock =  document.querySelector(".card-block");
let cashblock =  document.querySelector(".cash-block");
let cashbtn =  document.querySelector(".cash-btn");
let cardbtn =  document.querySelector(".card-btn");
paybtn.addEventListener("click",() => {
paybar.style.transform = "translate(0px)";
totprice.innerText = window.localStorage.getItem("totalprice");
})

cardblock.style.display = "none";
cashbtn.addEventListener("click",()=>{
    cashbtn.style.backgroundColor = "#0379f86b";
     cashbtn.style.color="white";
      cardbtn.style.backgroundColor = "white";
     cardbtn.style.color="black";
    cardblock.style.display = "none";
    cashblock.style.display = "block";
confirmbtn.addEventListener("click",()=>{
received.innerText =  receiveprice.value;
returns.innerHTML = received.innerText - totprice.innerText;

paycash.addEventListener("click",()=>{
    
     received.innerText = 0;
     totprice.innerText = 0;
     receiveprice.value = 0;
     returns.innerHTML = 0;
     paybar.style.transform = "translate(350px)";
     alert("PAID");
      
 })
})
 
 })
 cardbtn.addEventListener("click",()=>{
    
    cardblock.style.display = "block";
    cashblock.style.display = "none";
    cardbtn.style.backgroundColor = "#0379f86b";
     cardbtn.style.color="white";
      cashbtn.style.backgroundColor = "white";
     cashbtn.style.color="black";

     
     paycash.addEventListener("click",()=>{
        
        console.log(holdername.value);
        console.log(cardnumber.value);
        console.log(expirydate.value);
        console.log(cvv.value);
       
    if(holdername.value !== "" && cardnumber.value !== "" && expirydate.value !==  "" &&cvv.value !== ""){
     paybar.style.transform = "translate(350px)";
     holdername.value  = "";
     cardnumber.value  = "";
     expirydate.value  = "";
     cvv.value  = "";
     alert("PAID");
     }
    else{
        alert("Fill in all the fields");
    }
   })

 })


