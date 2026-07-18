let buttons = document.querySelectorAll(".plus");
let addcart = document.querySelector(".addcart");
 let pricecount = document.querySelectorAll("span");
 let pricetotal = document.querySelector(".total-price");
 console.log(pricecount);
buttons.forEach((button,index) => {

    button.addEventListener("click", () => {

        let product = button.closest(".rolex-container");
        let name = product.querySelector(".rolex-name").innerText;
        let price = product.querySelector(".rolex-price").innerText;
       
         addcart.innerHTML += `
        <div class="card">
            <h4>${name} </h4>
            <h3>${price}</h3>
            <img src="del.png" alt="del" class="del">
            <hr class="hr">
        </div>`;
        let currenttotal =  Number(pricetotal.innerText);
        let currentprice = Number(pricecount[index].innerText);
         
         pricetotal.innerHTML = currenttotal + currentprice;
         addcart.addEventListener("click",(e,index) => {
    
         pricetotal.innerHTML =pricetotal.innerHTML - pricecount[index];
        
});
    });
    
});
addcart.addEventListener("click",(e,index) => {
    if (e.target.classList.contains("del")) {
        e.target.closest(".card").remove();
    }
});

