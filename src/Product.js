// Product.js
import React from 'react';
import './art.css';

function Product({ id, image, title, artist, price }) {
    const toggleWishlist = () => {
        console.log(`Toggled wishlist for product ${id}`);
    };
    const addToCart = () => {
        console.log(`Added product ${id} to cart`);
    };

    return (
        <div className="product" data-price={price}>
            <span className="heart-icon" onClick={toggleWishlist}>&#9825;</span>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>Artist: {artist}</p>
            <p>Price: ₹{price}</p>
            <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;
