let sidebarmainbtn = document.querySelector(".main");
let sidebarhistorybtn = document.querySelector(".history");
let producttitle = document.querySelector(".product-title");
let rolexsection = document.querySelector(".rolex-section");
let historysection =  document.querySelector(".history-section");
  sidebarmainbtn.style.backgroundColor = "#a9c6e4";
  historysection.style.display = "none";
  sidebarhistorybtn.addEventListener("click",()=>{
    sidebarmainbtn.style.backgroundColor = "";
    historysection.style.display = "block";
    sidebarhistorybtn.style.backgroundColor = "#a9c6e4";
    producttitle.style.display = "none";
    rolexsection.style.display = "none";
      historysection.style.display ="flex";
     historysection.style.justify.content = "center";
  })

  sidebarmainbtn.addEventListener("click",()=>{

    sidebarmainbtn.style.backgroundColor = "#a9c6e4";
    sidebarhistorybtn.style.backgroundColor = "";
     producttitle.style.display = "block";
     historysection.style.display = "none";
    rolexsection.style.display = "block";
      producttitle.style.margin.top = "2%";
    producttitle.style.display = "flex";
    producttitle.style.justify.content = "center";
    producttitle.style.width = "100%";
  })