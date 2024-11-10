// Sample data for products (replace with real data or API call if needed)
const products = {
    1: { name: 'Product 1', img: 'image1.jpg', description: 'Description for product 1', price: '$100' },
    2: { name: 'Product 2', img: 'image2.jpg', description: 'Description for product 2', price: '$200' },
    3: { name: 'Product 3', img: 'image3.jpg', description: 'Description for product 3', price: '$300' }
};

// Embed CSS into the page using JavaScript
const style = document.createElement('style');
style.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
    }
    #wishlistModal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        overflow: auto;
    }
    .modal-content {
        position: absolute;
        background-color: white;
        margin: 5% auto;
        padding: 20px;
        width: 80%;
        max-width: 800px;
        border-radius: 8px;
    }
    .close {
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        position: absolute;
        top: 10px;
        right: 25px;
    }
    .close:hover, .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .wishlist-container {
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .item {
        background-color: #fff;
        border: 1px solid #ddd;
        margin: 10px;
        padding: 10px;
        width: calc(33% - 20px);
        box-sizing: border-box;
        border-radius: 8px;
        transition: transform 0.2s ease;
    }
    .item:hover {
        transform: scale(1.05);
    }
    .item img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
    .item h4 {
        margin-top: 10px;
        font-size: 18px;
    }
    .item p {
        font-size: 14px;
        color: #555;
    }
    .item button {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px;
        width: 100%;
        cursor: pointer;
        border-radius: 4px;
        margin: 5px 0;
    }
    .item button:hover {
        background-color: #218838;
    }
    .item .remove-button {
        background-color: #dc3545;
    }
    .item .remove-button:hover {
        background-color: #c82333;
    }
    .home-button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        font-size: 16px;
        border-radius: 4px;
        display: inline-block;
        margin: 20px;
    }
    .home-button:hover {
        background-color: #0056b3;
    }
    .wishlist-header {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .wishlist-footer {
        margin-top: 20px;
        text-align: center;
        font-size: 14px;
    }
`;
document.head.appendChild(style);

// Function to add product to wishlist
function addToWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(id)) {
        wishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        console.log(`Added product ${id} to wishlist`, wishlist);
    } else {
        console.log(`Product ${id} is already in the wishlist.`);
    }
}

// Function to remove product from wishlist
function removeFromWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(itemId => itemId !== id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    loadWishlist();
}

// Function to load wishlist from localStorage and display it
function loadWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistContainer = document.getElementById('wishlistItems');
    if (!wishlistContainer) return; // Ensure element exists
    wishlistContainer.innerHTML = '';  // Clear existing wishlist items
    wishlist.forEach(id => {
        const product = products[id];
        if (product) {
            wishlistContainer.innerHTML += `<div class="item">
                <img src="${product.img}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button onclick="addToCart(${id})">Add to Cart</button>
                <button class="remove-button" onclick="removeFromWishlist(${id})">Remove</button>
            </div>`;
        }
    });
}

// Function to clear the entire wishlist
function clearWishlist() {
    localStorage.removeItem('wishlist');
    loadWishlist();
}

// Function to add product to cart (for demonstration)
function addToCart(id) {
    console.log(`Product ${id} added to cart.`);
    alert(`Product "${products[id].name}" added to cart!`);
}

// Close the wishlist modal
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('wishlistModal');
    const closeModal = document.getElementsByClassName('close')[0];

    // Close the modal when the "X" button is clicked
    if (closeModal) {
        closeModal.onclick = function () {
            modal.style.display = 'none';
        };
    }

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Initialize the wishlist display
    loadWishlist();
});
