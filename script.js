// Tag selection
const products = document.querySelector(".products")
const rating = document.querySelector(".rating")
// buttons
const filters = document.querySelector(".product_filters")
const men = document.querySelector("#men")
const women = document.querySelector("#women")
const women_acc = document.querySelector("#women_acc")
const men_acc = document.querySelector("#men_acc")
const deals = document.querySelector("#deals")

// Global Variable
let productApi;
let productClicked;
// Fake store API

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    productApi = json
    renderProducts("men's clothing","electronics")     
    filters.addEventListener("click",(e)=>{
        if(e.target.id == "women"){
            products.innerHTML = ''
            renderProducts("women's clothing")
            console.log(true)
        } else if(e.target.id == "women_acc"){
            products.innerHTML = ''
            renderProducts("jewelery","electronics")    
        }else if(e.target.id == "men_acc"){
            products.innerHTML = ''
            renderProducts("electronics")         
        }else if(e.target.id =="deals"){
            products.innerHTML = ''
            renderProducts("men's clothing","women's clothing",10)  
        }else{
            products.innerHTML = ''
            renderProducts("men's clothing","electronics")    
        }
        
    })
  });


function renderProducts(categoryOne,categoryTwo,discount=0){
    // Loop for product render

    
    
    for (let i = 0; i < 6; i++) {
        let productObj = productApi.filter((obj)=>{
            return obj["category"] === categoryOne || obj["category"] === categoryTwo
        });


        // console.log(productObj.length)

        function ratingStar(){
            let fullStar = '';
            let nullStar = ''; 
            let star = Math.ceil(productObj[i].rating.rate);
                for (let z = 0; z < star; z++) {
                    fullStar += `<i class="ri-star-fill"></i>`
                }
                for (let t = 0; t < 5 - star ; t++) {
                    nullStar += `<i class="ri-star-line"></i>`
                }
            return fullStar + nullStar
        }

        products.innerHTML += `
        <div class="product_card" id="${productObj[i].id}">
        <!-- image -->
        <div class="product_img">
            <img src="${productObj[i].image}" alt="fake">
        </div>
        <!-- details -->
        <div class="product_details">
            <div class="product_info">
                <div>
                    <h3>${productObj[i].title.slice(0,(-productObj[i].title.length+12))}...</h3>
                    <p>${productObj[i].category}</p>
                </div>
                <div class ="rating">
                    ${ratingStar()}
                </div>
            </div>
            <!-- customer details -->
            <div class="customer_details">
                <p>(${productObj[i].rating.count}k) Customer Reviews</p>
            </div>
            <div class="price_container">
                <h4 class="price">$${productObj[i].price - discount}</h4>
                <span class="status">Almost Sold Out</span>
            </div>
        </div>
    </div>
        ` 
    }
     // product click function
      // product click function
      let productCards = document.querySelectorAll(".product_card");
      productCards.forEach(card => {
          card.addEventListener("click", (e) => {
              const productId = e.currentTarget.id;
              window.location.href = `./Pages/Product_page/ProductPage.html?id=${productId}`;
          });
      });
} 




