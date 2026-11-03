function searchProduct() {

    const input =
    document.getElementById("searchInput").value;

    if(input.trim() === ""){
        alert("Please enter a product name.");
        return;
    }

    alert("Searching for: " + input);
}

/* HERO TEXT SLIDER */

const titles = [

    "Welcome To ABBY MART",

    "Beauty Starts Here",

    "Step Into Fashion",

    "Shop The Latest Trends",

    "Elegant Styles For Everyone"

];

const descriptions = [

    "Skincare • Shoes • Sandals • Fashion",

    "Premium beauty products at amazing prices",

    "Comfortable and stylish footwear collections",

    "Discover new arrivals every week",

    "Quality products for men and women"

];

let index = 0;

setInterval(() => {

    index++;

    if(index >= titles.length){
        index = 0;
    }

    document.getElementById("heroTitle").textContent =
    titles[index];

    document.getElementById("heroText").textContent =
    descriptions[index];

}, 4000);


function subscribeNewsletter(){

    const email =
    document.getElementById("newsletterEmail").value;

    const message =
    document.getElementById("newsletterMessage");

    if(email.trim() === ""){

        message.style.color = "#fff";

        message.textContent =
        "Please enter your email address.";

        return;
    }

    message.style.color = "#fff";

    message.textContent =
    "✅ Thank you for subscribing to ABBY MART!";

    document.getElementById(
    "newsletterEmail"
    ).value = "";
}


let cart = JSON.parse(
localStorage.getItem("cart")
) || [];

updateCartCount();



function addToCart(name, price, quantity){

    let existingItem = cart.find(
        item => item.name === name
    );

    if(existingItem){

        existingItem.quantity =
        Number(existingItem.quantity) + Number(quantity);

    }else{

        cart.push({
            name: name,
            price: price,
            quantity: Number(quantity)
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(
        quantity + " x " + name + " added to cart."
    );
}


function updateCartCount(){

    const count =
    document.getElementById("cart-count");

    if(count){

        count.textContent = cart.length;
    }
}


function updateWishlistCount(){

    const count =
    document.getElementById("wishlist-count");

    if(count){

        count.textContent =
        wishlist.length;
    }
}



function displayCart(){

    const cartContainer =
    document.getElementById("cart-items");

    const totalElement =
    document.getElementById("total");

    if(!cartContainer) return;

    cartContainer.innerHTML = "";

    if(cart.length === 0){

        cartContainer.innerHTML =
        "<p>Your cart is empty.</p>";

        totalElement.textContent = "0";

        return;
    }

    let total = 0;

    cart.forEach((item,index)=>{

        let itemTotal =
        item.price * item.quantity;

        total += itemTotal;

        cartContainer.innerHTML += `

        <div class="cart-item">

            <div>

                <h3>${item.name}</h3>

                <p>Quantity: ${item.quantity}</p>

                <p>GH₵${itemTotal}</p>

            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>

        </div>

        `;
    });

    totalElement.textContent = total;
}


function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

    updateCartCount();
}

displayCart();


function closeCart(){

    if(window.history.length > 1){

        window.history.back();

    }else{

        window.location.href = "index.html";

    }
}


let quantity = 1;

function increaseQuantity(){

    quantity++;

    document.getElementById(
        "quantity"
    ).textContent = quantity;
}

function decreaseQuantity(){

    if(quantity > 1){

        quantity--;

        document.getElementById(
            "quantity"
        ).textContent = quantity;
    }
}


function scrollLeftCategory(){

    document.getElementById("categorySlider")
    .scrollBy({
        left: -350,
        behavior: "smooth"
    });
}

function scrollRightCategory(){

    document.getElementById("categorySlider")
    .scrollBy({
        left: 350,
        behavior: "smooth"
    });
}


function scrollLeftProduct(){

    document.getElementById("product-slider")
    .scrollBy({
        left:-350,
        behavior:"smooth"
    });

}

function scrollRightProduct(){

    document.getElementById("product-slider")
    .scrollBy({
        left:350,
        behavior:"smooth"
    });

}


function scrollLeftFlashSale(){

    document.getElementById("flashSlider")
    .scrollBy({
        left: -350,
        behavior: "smooth"
    });

}

function scrollRightFlashSale(){

    document.getElementById("flashSlider")
    .scrollBy({
        left: 350,
        behavior: "smooth"
    });

}


function scrollLeftArrival(){

    document.getElementById("arrivalSlider")
    .scrollBy({
        left: -350,
        behavior: "smooth"
    });

}

function scrollRightArrival(){

    document.getElementById("arrivalSlider")
    .scrollBy({
        left: 350,
        behavior: "smooth"
    });

}


let wishlist = JSON.parse(
localStorage.getItem("wishlist")
) || [];


function displayWishlist(){

    const wishlistContainer =
    document.getElementById("wishlist-items");

    if(!wishlistContainer) return;

    wishlistContainer.innerHTML = "";

    if(wishlist.length === 0){

        wishlistContainer.innerHTML =
        "<p>Your wishlist is empty.</p>";

        return;
    }

    wishlist.forEach((item,index)=>{

        wishlistContainer.innerHTML += `

        <div class="wishlist-item">

            <div>

                <h3>${item.name}</h3>

                <p>GH₵${item.price}</p>

            </div>

            <div class="wishlist-buttons">

                <button
                class="move-btn"
                onclick="moveToCart(${index})">

                    Move To Cart

                </button>

                <button
                class="remove-btn"
                onclick="removeWishlistItem(${index})">

                    Remove

                </button>

            </div>

        </div>

        `;
    });
}


function removeWishlistItem(index){

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();
}


function moveToCart(index){

    let item = wishlist[index];

    addToCart(
        item.name,
        item.price,
        1
    );

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();
}


function closeWishlist(){

    window.location.href =
    "index.html";
}

displayWishlist();


updateWishlistCount();

function addToWishlist(name, price){

    let existingItem = wishlist.find(
        item => item.name === name
    );

    if(existingItem){

        alert(name + " is already in wishlist.");

        return;
    }

    wishlist.push({

        name: name,

        price: price

    });

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistCount();

    alert(name + " added to wishlist ❤️");
}