let sidebarmainbtn = document.querySelector(".main");                                                                 // main button
let sidebarhistorybtn = document.querySelector(".history");                                                          // history button
let producttitle = document.querySelector(".product-title");                                                        // product title
let rolexsection = document.querySelector(".rolex-section");                                                       // rolex section
let longinesection = document.querySelector(".longines-section");                                                 // longines section
let calvinsection = document.querySelector(".calvin-section");                                                   // calvin section
let seikosection = document.querySelector(".seiko-section");                                                    // seiko section
let historysection =  document.querySelector(".history-section");                                              // history section

  sidebarmainbtn.style.backgroundColor = "#a9c6e4";                                                            // main button background color
  historysection.style.display = "none";                                                                        // history section display none

  sidebarhistorybtn.addEventListener("click",()=>{                                                            // history button add event listener
    sidebarmainbtn.style.backgroundColor = "";                                                                           // main button background color
    historysection.style.display = "block";                                                                             // history section display block
    sidebarhistorybtn.style.backgroundColor = "#a9c6e4";                                                             // history button background color
    producttitle.style.display = "none";                                                                              // product title display none
    rolexsection.style.display = "none";                                                                             // rolex section display none
    longinesection.style.display = "none";                                                                          // longines section display none  
    calvinsection.style.display = "none";                                                                          // calvin section display none
    seikosection.style.display = "none";                                                                          // seiko section display none
    historysection.style.display ="flex";                                                                        // history section display flex
    historysection.style.justify = "center";                                                                    // history section justify center
  })

  sidebarmainbtn.addEventListener("click",()=>{                                                              // main button add event listener

    sidebarmainbtn.style.backgroundColor = "#a9c6e4";                                                                   // main button background color
    sidebarhistorybtn.style.backgroundColor = "";                                                                        //history button background color
    producttitle.style.display = "block";                                                                               //product title display block
    historysection.style.display = "none";                                                                             //history section display none
    rolexsection.style.display = "block";                                                                             //rolex section display block
    producttitle.style.margin.top = "2%";                                                                            //product title margin top 2%
    producttitle.style.display = "flex";                                                                            //product title display flex
    producttitle.style.justify = "center";                                                                         //product title justify center
    producttitle.style.width = "100%";                                                                            //product title width 100%
  })