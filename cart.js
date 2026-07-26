let buttons = document.querySelectorAll(".plus");
let addcart = document.querySelector(".addcart");
 let pricecount = document.querySelectorAll("span");
 let pricetotal = document.querySelector(".total-price");
 let pricecounter;



buttons.forEach((button,index) => {

    button.addEventListener("click", () => {

        let product = button.closest(".rolex-container");
        let name = product.querySelector(".rolex-name").innerText;
        let price = product.querySelector(".rolex-price").innerText;
       
         addcart.innerHTML += `
        <div class="card">
            <h4>${name} </h4>
            <div class ="add-price"><h3><span>${price}</span>$</h3>
            <div class="product-quantity"><button class="minus-btn">-</button>
            <h3 class="counter">1<h3><button class="plus-btn">+</button></div></div>
            <img src="del.png" alt="del" class="del">
            <hr class="hr">
        </div>`;
         
        let card = addcart.lastElementChild;
        let counter = card.querySelector(".counter");
        let minusbtn = card.querySelector(".minus-btn");
        let plusbtn = card.querySelector(".plus-btn");

        let currenttotal =  Number(pricetotal.innerText);
        let currentprice = Number(pricecount[index].innerText);
         
        
     plusbtn.addEventListener("click",()=>{
            counter.innerHTML =  Number(counter.innerHTML) + 1;
            pricetotal.innerText = Number(pricetotal.innerText) + Number(price);
        })

     minusbtn.addEventListener("click",()=>{
            counter.innerHTML =  Number(counter.innerHTML) - 1;
             pricetotal.innerText =  Number(pricetotal.innerText) - Number(price);
        })

         pricetotal.innerHTML = currenttotal + currentprice;
         localStorage.setItem("totalprice" , pricetotal.innerHTML);
        
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
        localStorage.setItem("totalprice" , pricetotal.innerHTML);
    }
     
});


