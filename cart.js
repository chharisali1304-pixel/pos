let buttons = document.querySelectorAll(".plus");                                                       // plus button
let addcart = document.querySelector(".addcart");                                                      // add to cart section
 let pricecount = document.querySelectorAll("span");                                                  // price count
 let pricetotal = document.querySelector(".total-price");                                            // total price
 let pricecounter;                                                                                  // price counter



buttons.forEach((button,index) => {                                                // for each button add event listener

    button.addEventListener("click", () => {                                          // add event listener to each button

        let product = button.closest(".rolex-container");                                           // get the closest product container
        let name = product.querySelector(".rolex-name").innerText;                                 // get the product name
        let price = product.querySelector(".rolex-price").innerText;                              // get the product price
       
         addcart.innerHTML += `                                                                 // add the product to the cart
        <div class="card">                                                                     // card container
            <h4>${name} </h4>
            <div class ="add-price"><h3><span>${price}</span>$</h3>
            <div class="product-quantity"><button class="minus-btn">-</button>
            <h3 class="counter">1<h3><button class="plus-btn">+</button></div></div>
            <img src="del.png" alt="del" class="del">
            <hr class="hr">
        </div>`;
         
        let card = addcart.lastElementChild;                                                  // get the last added card
        let counter = card.querySelector(".counter");                                        // get the counter element
        let minusbtn = card.querySelector(".minus-btn");                                    // get the minus button
        let plusbtn = card.querySelector(".plus-btn");                                     // get the plus button
        let currenttotal =  Number(pricetotal.innerText);                                 // get the current total price
        let currentprice = Number(pricecount[index].innerText);                          // get the current product price
         
        
     plusbtn.addEventListener("click",()=>{                                                     // add event listener to plus button
            counter.innerHTML =  Number(counter.innerHTML) + 1;                                       // increment the counter
            pricetotal.innerText = Number(pricetotal.innerText) + Number(price);                     // increment the total price
        })

     minusbtn.addEventListener("click",()=>{                                                     // add event listener to minus button
            counter.innerHTML =  Number(counter.innerHTML) - 1;                                      // decrement the counter
             pricetotal.innerText =  Number(pricetotal.innerText) - Number(price);                  // decrement the total price
        })

         pricetotal.innerHTML = currenttotal + currentprice;                                          // update the total price
         localStorage.setItem("totalprice" , pricetotal.innerHTML);                                  // store the total price in local storage
        
    });
   
});
                                                                                                          // addeventlistener delete add to cart
 addcart.addEventListener("click",(e) => {                                                                     // add event listener to the cart
    if (e.target.classList.contains("del")) {                                                            // if the clicked element is a delete button
        e.target.closest(".card").remove();                                                                         // remove the closest card
       let card = e.target.closest(".card");                                                                       // get the closest card
       let currentPrice = Number(card.querySelector("span").innerText);                                           // get the current product price
       let currentTotal = Number(pricetotal.innerText);                                                          // get the current total price
        pricetotal.innerText = currentTotal - currentPrice;                                                     // update the total price
        localStorage.setItem("totalprice" , pricetotal.innerHTML);                                             // store the total price in local storage
    }
});


