
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        // Fetch product details based on productId
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                // Render product details on the details page
                renderProductDetails(product);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    } else {
        console.error('Product ID not found in URL parameter');
    }
});

function renderProductDetails(product) {
    const productImg = document.querySelector(".product-big-img")
    const imgTag = document.createElement("img")
    const productTitle = document.querySelector(".product_cart_title");
    const productRating = document.querySelector(".rating_cart_star");
    const productPrice = document.querySelector(".cart-price");
    const productDiscount = document.querySelector(".discount_cart");
    const productTimer = document.querySelector(".timer");
    
    imgTag.src = product.image
    productImg.appendChild(imgTag)
    productTitle.textContent = product.title;
    productRating.textContent = `${product.rating.rate} / 5`;
    productPrice.textContent = `$${product.price}`;
    productDiscount.textContent = ""; // You need to handle discount calculation here
    productTimer.textContent = ""; // You need to handle timer calculation here
    
    // You can populate other sections similarly
}
