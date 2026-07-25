let sidebarmainbtn = document.querySelector(".main");
let sidebarhistorybtn = document.querySelector(".history");
let producttitle = document.querySelector(".product-title");
let rolexsection = document.querySelector(".rolex-section");

  sidebarmainbtn.style.backgroundColor = "#a9c6e4";

  sidebarhistorybtn.addEventListener("click",()=>{
    sidebarmainbtn.style.backgroundColor = "";
    sidebarhistorybtn.style.backgroundColor = "#a9c6e4";
    producttitle.style.display = "none";
    rolexsection.style.display = "none";
  })

  sidebarmainbtn.addEventListener("click",()=>{

    sidebarmainbtn.style.backgroundColor = "#a9c6e4";
    sidebarhistorybtn.style.backgroundColor = "";
     producttitle.style.display = "block";
    rolexsection.style.display = "block";
      producttitle.style.margin.top = "2%";
    producttitle.style.display = "flex";
    producttitle.style.justify.content = "center";
    producttitle.style.width = "100%";
  })