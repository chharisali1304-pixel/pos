
let buttons = document.querySelectorAll<HTMLButtonElement>(".plus")!;                                                       // plus button
let addcart = document.querySelector<HTMLDivElement>(".addcart")!;                                                         // add to cart section
 let pricecount = document.querySelectorAll<HTMLSpanElement>("span")!;                                                    // price count
 let pricetotal = document.querySelector<HTMLDivElement>(".total-price")!;                                               // total price
 let pricecounter;                                                                                  // price counter



buttons.forEach((button,index) => {                                                // for each button add event listener

    button.addEventListener("click", () => {                                          // add event listener to each button

        let product = button.closest(".rolex-container")!;                                                               // get the closest product container
        let name = product.querySelector<HTMLHeadingElement>(".rolex-name")!.innerText;                                 // get the product name
        let price = product.querySelector<HTMLSpanElement>(".rolex-price")!.innerText;                                 // get the product price
       
         addcart.innerHTML += `
        <div class="card">
            <h4>${name} </h4>
            <div class ="add-price"><h3><span>${price}</span>$</h3>
            <div class="product-quantity"><button class="minus-btn">-</button>
            <h3 class="counter">1<h3><button class="plus-btn">+</button></div></div>
            <img src="del.png" alt="del" class="del">
            <hr class="hr">
        </div>`;
         
        let card = addcart.lastElementChild!;                                                                      // get the last added card
        let counter = card.querySelector<HTMLHeadingElement>(".counter")!;                                        // get the counter element
        let minusbtn = card.querySelector<HTMLButtonElement>(".minus-btn")!;                                     // get the minus button
        let plusbtn = card.querySelector<HTMLButtonElement>(".plus-btn")!;                                      // get the plus button
        let currenttotal =  Number(pricetotal.innerText);                                                      // get the current total price
        let currentprice = Number(pricecount[index]!.innerText);                                              // get the current product price
         
        
     plusbtn.addEventListener("click",()=>{                                                     // add event listener to plus button
            counter.innerHTML =  String(Number(counter.innerHTML) + 1);                                       // increment the counter
            pricetotal.innerText = String(Number(pricetotal.innerText) + Number(price));                     // increment the total price
        })

     minusbtn.addEventListener("click",()=>{                                                     // add event listener to minus button
            counter.innerHTML =  String(Number(counter.innerHTML) - 1);                                      // decrement the counter
             pricetotal.innerText =  String(Number(pricetotal.innerText) - Number(price)); 
             if (Number(counter.innerHTML) === 0) {
                 pricetotal.innerText =  String(Number(pricetotal.innerText) + Number(price));
                 counter.innerHTML =  String(Number(counter.innerHTML) + 1);
             }
        })

         pricetotal.innerHTML = String(currenttotal + currentprice);                                          // update the total price
         localStorage.setItem("totalprice" , pricetotal.innerHTML);                                  // store the total price in local storage
        
    });
   
});
                                                                                                          // addeventlistener delete add to cart
 addcart.addEventListener("click",(e) => {                                                                     // add event listener to the cart
    if (e.target instanceof Element && e.target.classList.contains("del")) {                          // if the clicked element is a delete button
        e.target.closest(".card")!.remove();                                                                         // remove the closest card
       let card = e.target.closest(".card")!;                                                                       // get the closest card
       let currentPrice = Number(card.querySelector<HTMLSpanElement>("span")!.innerText);                          // get the current product price
       let currentTotal = Number(pricetotal.innerText);                                                           // get the current total price
       pricetotal.innerText = String(currentTotal - currentPrice);                                               // update the total price
       localStorage.setItem("totalprice" , pricetotal.innerHTML);                                               // store the total price in local storage
    }
});
