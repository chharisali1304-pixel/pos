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
            <h3><span>${price}</span>$</h3>
            <img src="del.png" alt="del" class="del">
            <hr class="hr">
        </div>`;
        let currenttotal =  Number(pricetotal.innerText);
        let currentprice = Number(pricecount[index].innerText);
         
         pricetotal.innerHTML = currenttotal + currentprice;
        
    });
    
});
                                        // addeventlistener delete add to cart
 addcart.addEventListener("click",(e) => {
    if (e.target.classList.contains("del")) {
        e.target.closest(".card").remove();
       let card = e.target.closest(".card");

       let currentPrice = Number(card.querySelector("span").innerText);

       let currentTotal = Number(pricetotal.innerText);

        pricetotal.innerText = currentTotal - currentPrice;
    }
     
});


