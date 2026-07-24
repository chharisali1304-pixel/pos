let paybtn = document.querySelector(".pay");
let paybar = document.querySelector(".pay-bar");
let receiveprice = document.querySelector(".receiveprice");
let received = document.querySelector(".received");
let confirmbtn = document.querySelector(".confirm-details");
let totprice = document.querySelector(".tot-price");
let returns = document.querySelector(".return");
let paycash = document.querySelector(".pay-cash");


paybtn.addEventListener("click",() => {
    console.log("wefrfq");
paybar.style.transform = "translate(0px)";
 
totprice.innerText = window.localStorage.getItem("totalprice");
})
confirmbtn.addEventListener("click",()=>{
received.innerText =  receiveprice.value;
 

returns.innerHTML = received.innerText - totprice.innerText;
})
paycash.addEventListener("click",()=>{
   received.innerText = 0;
    totprice.innerText = 0;
     receiveprice.value = 0;
    returns.innerHTML = 0;
    paybar.style.transform = "translate(350px)";
     alert("PAID")
})
