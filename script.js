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

// Fake store API

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    productApi = json
    menProducts()     
    filters.addEventListener("click",(e)=>{
        if(e.target.id == "women"){
            products.innerHTML = ''
            womenProducts()
            console.log(true)
        } else if(e.target.id == "women_acc"){
            products.innerHTML = ''
            womenAccProducts()    
        }else if(e.target.id == "men_acc"){
            products.innerHTML = ''
            menAccProducts()         
        }else if(e.target.id =="deals"){
            products.innerHTML = ''
            dealsProducts()  
        }else{
            products.innerHTML = ''
            menProducts()    
        }
        
    })
  });


function menProducts(){
    // Loop for product render

    
    
    for (let i = 0; i < 6; i++) {
        let productObj = productApi.filter((obj)=>{
            return obj["category"] === "men's clothing" || obj["category"] === "electronics"
        });


        // console.log(productObj.length)

        function rating(){
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
        <div class="product_card">
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
                    ${rating()}
                </div>
            </div>
            <!-- customer details -->
            <div class="customer_details">
                <p>(${productObj[i].rating.count}k) Customer Reviews</p>
            </div>
            <div class="price_container">
                <h4 class="price">$${productObj[i].price}</h4>
                <span class="status">Almost Sold Out</span>
            </div>
        </div>
    </div>
        ` 
    }
} 
function womenProducts(){
    // Loop for product render

    
    
    for (let i = 0; i < 6; i++) {
        let productObj = productApi.filter((obj)=>{
            return obj["category"] === "women's clothing" 
        });


        // console.log(productObj.length)

        function rating(){
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
        <div class="product_card">
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
                    ${rating()}
                </div>
            </div>
            <!-- customer details -->
            <div class="customer_details">
                <p>(${productObj[i].rating.count}k) Customer Reviews</p>
            </div>
            <div class="price_container">
                <h4 class="price">$${productObj[i].price}</h4>
                <span class="status">Almost Sold Out</span>
            </div>
        </div>
    </div>
        ` 
    }
} 
function womenAccProducts(){
    // Loop for product render

    
    
    for (let i = 0; i < 6; i++) {
        let productObj = productApi.filter((obj)=>{
            return obj["category"] === "jewelery" || obj["category"] === "electronics"
        });


        // console.log(productObj.length)

        function rating(){
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
        <div class="product_card">
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
                    ${rating()}
                </div>
            </div>
            <!-- customer details -->
            <div class="customer_details">
                <p>(${productObj[i].rating.count}k) Customer Reviews</p>
            </div>
            <div class="price_container">
                <h4 class="price">$${productObj[i].price}</h4>
                <span class="status">Almost Sold Out</span>
            </div>
        </div>
    </div>
        ` 
    }
} 
function menAccProducts(){
    // Loop for product render

    
    
    for (let i = 0; i < 6; i++) {
        let productObj = productApi.filter((obj)=>{
            return obj["category"] === "electronics"
        });


        // console.log(productObj.length)

        function rating(){
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
        <div class="product_card">
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
                    ${rating()}
                </div>
            </div>
            <!-- customer details -->
            <div class="customer_details">
                <p>(${productObj[i].rating.count}k) Customer Reviews</p>
            </div>
            <div class="price_container">
                <h4 class="price">$${productObj[i].price}</h4>
                <span class="status">Almost Sold Out</span>
            </div>
        </div>
    </div>
        ` 
    }
} 
function dealsProducts(){
    // Loop for product render

    
    
    for (let i = 0; i < 6; i++) {
        let productObj = productApi.filter((obj)=>{
            return obj["category"] === "men's clothing" || obj["category"] === "women's clothing"
        });


        // console.log(productObj.length)

        function rating(){
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
        <div class="product_card">
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
                    ${rating()}
                </div>
            </div>
            <!-- customer details -->
            <div class="customer_details">
                <p>(${productObj[i].rating.count}k) Customer Reviews</p>
            </div>
            <div class="price_container">
                <h4 class="price">$${productObj[i].price-10}</h4>
                <span class="status">Almost Sold Out</span>
            </div>
        </div>
    </div>
        ` 
    }
} 






