import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './art.css';

function Home({ categoryFilter, priceFilter, handleFilter }) {
    // Define the products
    const [products] = useState([
        { id: 1, title: "Digital Arts", artist: "Robb", price: 1926, category: "Digital Art", image: "https://static.vecteezy.com/system/resources/previews/023/574/133/non_2x/fashion-art-portrait-of-beautiful-woman-with-creative-make-up-ai-generative-image-free-photo.jpg" },
        { id: 2, title: "Encounter the Nature", artist: "Chanshali Bia", price: 1499, category: "Painting", image: "https://plus.unsplash.com/premium_photo-1667238544336-17a1cbfd4801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBhaW50aW5nfGVufDB8fDB8fHww" },
        { id: 3, title: "The Art from 1786", artist: "Leo Lewis", price: 99999, category: "Sculpture", image: "https://images.unsplash.com/photo-1583590019972-a146a712d72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww" },
        { id: 4, title: "Sculpture of Lord Ganesha", artist: "Indian Arts", price: 12000, category: "Sculpture", image: "https://images.unsplash.com/photo-1508133111629-be3f6e535a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNjdWxwdHVyZXMlMjBnYW5lc2glMjBtZXRhbHxlbnwwfHwwfHx8MA%3D%3D" },
        { id: 5, title: "Mountains & Hills", artist: "Renu Lande", price: 1980, category: "Painting", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3RyYWl0JTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D" },
        { id: 6, title: "Outbreak", artist: "Jhon Snow", price: 13000, category: "Sculpture", image: "https://img.artpal.com/481862/82-23-2-26-9-5-28m.jpg" },
        { id: 7, title: "Mini Home Decor Lippan", artist: "Arya", price: 2222, category: "Handicraft", image: "https://m.media-amazon.com/images/I/91ulI3MK9LL.jpg" },
        { id: 8, title: "Buddha Oil Paint Art", artist: "Sansa", price: 120, category: "Painting", image: "https://images.woodenstreet.de/image/data/da-monica/buddha-oil-paint-art-teakwood-canvas-stretched-and-framed-wall-painting/updated/1.jpg" }
    ]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist"));
        if (savedCart) setCart(savedCart);
        if (savedWishlist) setWishlist(savedWishlist);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Add product to cart
    const addToCart = (product) => {
        if (!cart.some(item => item.id === product.id)) {
            setCart([...cart, product]);
            toast.success("Added to cart!");
        } else {
            toast.error("Item already in cart!");
        }
    };

    // Add/remove product from wishlist
    const addToWishlist = (product) => {
        if (!wishlist.some(item => item.id === product.id)) {
            setWishlist([...wishlist, product]);
            toast.success("Added to wishlist!");
        } else {
            setWishlist(wishlist.filter(item => item.id !== product.id));
            toast.info("Removed from wishlist!");
        }
    };

    // Handle search query
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter products based on search query, category, and price range
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
        const matchesPrice = product.price >= priceFilter[0] && product.price <= priceFilter[1];
        return matchesSearch && matchesCategory && matchesPrice;
    });

    return (
        <div className="home">
            <ToastContainer />

            {/* Search Bar */}
            <div className="search-filter-bar">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <button onClick={() => handleFilter({ type: "reset" })}>Reset Filters</button>
            </div>

            {/* Product Listings */}
            <section className="product-container" id="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div className="product" key={product.id}>
                            <span
                                className={`heart-icon ${wishlist.some(item => item.id === product.id) ? "active" : ""}`}
                                onClick={() => addToWishlist(product)}
                            >
                                &#9825;
                            </span>
                            <img src={product.image} alt={product.title} />
                            <h4>{product.title}</h4>
                            <p>Artist: {product.artist}</p>
                            <p>Price: ₹{product.price}</p>
                            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                            <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
                        </div>
                    ))
                ) : (
                    <p>No products match your filters.</p>
                )}
            </section>
        </div>
    );
}

export default Home;