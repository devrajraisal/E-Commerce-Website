const wrapper = document.querySelector(".sliderWrapper");

  const products = [
    {
        id: 1,
        title:"Air Force",
        price: 119,
        colors:[
            {
                code: "black",
                img: "./Images/air.png",
            },
            {
                code: "dark blue",
                img: "./Images/air2.png",
            },
        ],
    },
    
    {
        id: 2,
        title:"Jordan",
        price: 223,
        colors:[
            {
                code: "lightgray",
                img: "./Images/jordan.png",
            },
            {
                code: "green",
                img: "./Images/jordan2.png",
            },
        ],
    },

    {
        id: 3,
        title:"Blazer",
        price: 190,
        colors:[
            {
                code: "lightgray",
                img: "./Images/blazer.png",
            },
            {
                code: "green",
                img: "./Images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title:"Crater",
        price: 139,
        colors:[
            {
                code: "black",
                img: "./Images/crater.png",
            },
            {
                code: "lightgray",
                img: "./Images/crater2.png",
            },
        ],
    },

    {
        id: 5,
        title:"Hippie",
        price: 200,
        colors:[
            {
                code: "gray",
                img: "./Images/Hippie.png",
            },
            {
                code: "black",
                img: "./Images/Hippie2.png",
            },
        ],
    },
  ];


    let choosenProduct = products[0];
    const currentproductImg = document.querySelector(".productImg");
    const currentproductTitle = document.querySelector(".productTitle");
    const currentproductPrice = document.querySelector(".productPrice");
    const currentproductColor = document.querySelectorAll(".color");
    const currentproductSize = document.querySelectorAll(".size");

  const menuItem = document.querySelectorAll(".menuItem");
  menuItem.forEach((item,index) => {
     item.addEventListener("click", ()=>{
      console.log(`you clicked` + index);
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
      choosenProduct = products[index];

      currentproductTitle.textContent = choosenProduct.title;
      currentproductPrice.textContent = "$" + choosenProduct.price;
      currentproductImg.src = choosenProduct.colors[0].img;

      currentproductColor.forEach((color,index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });

     });
    });

    currentproductColor.forEach((color,index) => {
        color.addEventListener("click", ()=> {
            currentproductImg.src =choosenProduct.colors[index].img;
        });
      });

      currentproductSize.forEach((size,index)=>{
        size.addEventListener("click",()=>{
            currentproductSize.forEach((size)=>{
                size.style.backgroundColor="white";
            size.style.color = "black";
            });
            size.style.backgroundColor="black";
            size.style.color = "white";
        });
      });


      const productButton = document.querySelector(".productBtn");
      const payment = document.querySelector(".payment");
      const close = document.querySelector(".close");

      productButton.addEventListener("click",()=>{
        payment.style.display = "flex";
      });
      close.addEventListener("click",()=>{
        payment.style.display = "none";
      });