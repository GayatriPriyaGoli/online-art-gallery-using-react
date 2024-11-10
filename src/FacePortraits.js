import React, { useState } from 'react';
import './art.css'; // assuming the CSS is in this file

const FacePortraits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [Cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ price: '', sortBy: '' });

  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  const addToCart = (productId) => {
    setCart((prevCart) => [...prevCart, productId]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = [
    { id: 25, name: 'Thalapaty', artist: 'Amala kakkat', price: 14926, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4HidiHuDvdFzgcp0OppbA_8hH9wPYVjRKg&s' },
    { id: 26, name: 'The goat life', artist: 'Amal kakkat', price: 19499, img: 'https://i.pinimg.com/236x/04/4d/cb/044dcb99c46fc180848e826225e0efe9.jpg' },
    { id: 27, name: 'khadhi', artist: 'Amal kakkat', price: 99999, img: 'https://i.pinimg.com/236x/38/46/48/38464864a6fbb479e2f329c845a037ea.jpg' },
    { id: 28, name: 'Vikram', artist: 'Amal kakkat', price: 12000, img: 'https://i.pinimg.com/474x/77/5e/d7/775ed7619801bff94f98c33e08a1e27d.jpg' },
    { id: 29, name: 'Rolex', artist: 'Amal kakkat', price: 13000, img: 'https://i.pinimg.com/236x/5a/c5/4c/5ac54cbd7a6b68034b297f042134d88c.jpg' },
    { id: 30, name: 'vijay DevaraKonda', artist: 'Amal kakkat', price: 24222, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSI3EOn0BPAKVNEIHUCVZeLvyVvROEIrIP3w&s' },
    { id: 31, name: 'Sita Ramam', artist: 'Amal kakkat', price: 19120, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NB8_mxL0GlKrqYVCol1HXcDc6so94GIK-g&s' }
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleReset = () => {
    setFilters({ price: '', sortBy: '' });
  };

  const handleNavToggle = () => {
    const sideNav = document.getElementById('sideNav');
    sideNav.style.width = sideNav.style.width === '0' ? '250px' : '0';
  };

  return (
    <div>
      <header>
        <img
          src="C:\\Users\\gayat\\Downloads\\Screenshot 2024-09-20 005108-photoaidcom-cropped (1).png"
          alt="Craftopia Logo"
          width="100"
          height="100"
        />
        <div className="header-right">
          <img
            src="data:image/png;base64,..."
            alt="Search Icon"
            className="search-icon"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for arts, artists and More"
            style={{ width: '500px' }}
          />
          <div id="notFoundMessage" style={{ display: searchTerm ? 'block' : 'none', color: 'red' }}>
            No results found
          </div>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
          </ul>
          <div className="icons">
            <a href="Cart.js"><span>&#x1F6D2;</span></a>
            <a href="Wishlist.js"><span>&#9825;</span></a>
          </div>
        </nav>
      </header>

      <div id="sideNav" style={{ width: '0' }}>
        <a href="javascript:void(0)" className="closebtn" onClick={handleNavToggle}>&times;</a>
        <div id="filters">
          <h3>Filters</h3>
          <label>
            <input
              type="radio"
              name="price"
              value="below_10000"
              onChange={handleFilterChange}
            />
            Below ₹10,000
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="price"
              value="10000_25000"
              onChange={handleFilterChange}
            />
            ₹10,000 to ₹25,000
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="price"
              value="25000_50000"
              onChange={handleFilterChange}
            />
            ₹25,000 to ₹50,000
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="price"
              value="50000_100000"
              onChange={handleFilterChange}
            />
            ₹50,000 to ₹100,000
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="price"
              value="above_100000"
              onChange={handleFilterChange}
            />
            Above ₹100,000
          </label>
        </div>

        <div id="sortBy">
          <h3>Sort By</h3>
          <label>
            <input
              type="radio"
              name="sort"
              value="low_to_high"
              onChange={handleFilterChange}
            />
            Price: Low to High
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="sort"
              value="high_to_low"
              onChange={handleFilterChange}
            />
            Price: High to Low
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="sort"
              value="bestselling"
              onChange={handleFilterChange}
            />
            Bestselling
          </label>
        </div>
        <button
          id="resetBtn"
          style={{ backgroundColor: '#f7f8fa', padding: '10px', border: 'none', cursor: 'pointer', margin: '20px' }}
          onClick={handleReset}
        >
          RESET
        </button>
      </div>

      <main>
        <div className="product-container" id="product-list">
          {filteredProducts.map((product) => (
            <div className="product" key={product.id} data-price={product.price}>
              <span className="heart-icon" onClick={() => toggleWishlist(product.id)}>
                &#9825;
              </span>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p>Artist: {product.artist}</p>
              <p>Price: ₹{product.price}</p>
              <button
                className="add-to-cart"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <button id="openNavBtn" onClick={handleNavToggle}>
        &#9660; Filter
      </button>

      <footer
        style={{
          backgroundColor: '#2d4159',
          color: '#fff',
          textAlign: 'center',
          padding: '10px',
          bottom: 0,
          width: '100%',
        }}
      >
        <p>&copy; 2024 Craftopia. All Rights Reserved.</p>
        <p>
          Follow us on{' '}
          <a href="#" style={{ color: '#7ddfee', textDecoration: 'none' }}>
            Instagram
          </a>
          ,{' '}
          <a href="#" style={{ color: '#7ddfee', textDecoration: 'none' }}>
            Facebook
          </a>
          , and{' '}
          <a href="#" style={{ color: '#7ddfee', textDecoration: 'none' }}>
            Twitter
          </a>
        </p>
      </footer>
    </div>
  );
};

export default FacePortraits;
