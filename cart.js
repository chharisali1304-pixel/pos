// let cart1 = document.querySelector(".add-to-cart-btn1");
// let cart2 = document.querySelector(".add-to-cart-btn2");
// let cart3 = document.querySelector(".add-to-cart-btn3");
// let cart4 = document.querySelector(".add-to-cart-btn4");
// let cart5 = document.querySelector(".add-to-cart-btn5");
// let cart6 = document.querySelector(".add-to-cart-btn6");
// let cart7 = document.querySelector(".add-to-cart-btn7");
// let cart8 = document.querySelector(".add-to-cart-btn8"); // <p>${cart.rolex-price}.00<p>
// let cart9 = document.querySelector(".add-to-cart-btn9");
// let cart10 = document.querySelector(".add-to-cart-btn10");
// let cart11 = document.querySelector(".add-to-cart-btn11");
// let cart12 = document.querySelector(".add-to-cart-btn12");
// let cart13 = document.querySelector(".add-to-cart-btn13");
// let cart14 = document.querySelector(".add-to-cart-btn14");
// let cart15 = document.querySelector(".add-to-cart-btn15");
// let cart16 = document.querySelector(".add-to-cart-btn16");
// let cart17 = document.querySelector(".add-to-cart-btn17");
// let cart18 = document.querySelector(".add-to-cart-btn18");
// let cart19 = document.querySelector(".add-to-cart-btn19");
// let cart20 = document.querySelector(".add-to-cart-btn20");
// let cart21 = document.querySelector(".add-to-cart-btn21");
// let cart22 = document.querySelector(".add-to-cart-btn22");
// let cart23 = document.querySelector(".add-to-cart-btn23");
// let cart24 = document.querySelector(".add-to-cart-btn24");
// let cart25 = document.querySelector(".add-to-cart-btn25");
// let cart26 = document.querySelector(".add-to-cart-btn26");
// let cart27 = document.querySelector(".add-to-cart-btn27");
// let cart28 = document.querySelector(".add-to-cart-btn28");
// let cart29 = document.querySelector(".add-to-cart-btn29");
// let cart30 = document.querySelector(".add-to-cart-btn30");
// let cart31 = document.querySelector(".add-to-cart-btn31");
// let cart32 = document.querySelector(".add-to-cart-btn32");

// cart1.addEventListener("click", () => {
// console.log("hey");
// let watch = "Submariner"
// console.log(watch)
// })
let addcart = document.querySelector(".addcart");
let cartBox = document.querySelector(".cart-items");
let counter = document.querySelector("#counter");
let priceCount = document.querySelector("#priceCount");
let emptyCart = document.querySelector(".empty-cart");
let cart = document.querySelectorAll(".plus");
let count = 0;
let total = 0;

let items = Array.from(cart)
items.forEach((cart) => {
    
 
            
           
});

function addToCart(card) {
    let cardDetails = card.parentElement;
    let allElements = cardDetails.children;
  cartBox.innerHTML += `
  <div class="product-in-cart">
  <img src="${allElements[0].src}" alt="">
        <div class="product-name">${allElements[1].innerText}</div>
        <div class="product-price">${allElements[2].textContent}</div>
        <i class="ri-delete-bin-7-fill" onclick="remove(this);"></i>
        </div>
        `;
        emptyCart.style.display = "none"; 
        count++;
  counter.textContent = count;
  
  let price = allElements[2].textContent;
  let split = price.split("");
  split.shift();
  let join = split.join("");
  total += parseFloat(join);
  
  priceCount.textContent = "$" + total + ".00";
}

function remove(product) {
  let productInCart = product.parentElement;
  productInCart.remove();
  count--;
  counter.textContent = count;
  let currentProductPrice = product.previousElementSibling.textContent;
  let split = currentProductPrice.split("");
  split.shift();
  let join = split.join("");
  total -= parseFloat(join);
  priceCount.textContent = "$" + total + ".00";

  if (count === 0) {
  emptyCart.style.display = "block"; // jab sab remove ho jaye to show karo
  }
  
}