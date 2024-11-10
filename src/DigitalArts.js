import React, { useState } from 'react';
import './art.css'; // assuming the CSS is in this file

const DigitalArts = () => {
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

  const products = [
    { id: 32, name: 'Kira', artist: 'Freepik', price: 12926, image: 'https://img.freepik.com/premium-photo/fantasy-beautiful-girl-digital-art-3d-illustration-landscape-wallpaper_579873-4162.jpg' },
    { id: 33, name: 'The Nature', artist: 'Monad Nomad', price: 11499, image: 'https://img.artpal.com/260182/67-23-6-25-0-8-55m.jpg' },
    { id: 34, name: 'The future', artist: 'Laxvi', price: 99999, image: 'https://i.pinimg.com/736x/9c/21/fe/9c21fee25ea7ec191bd336f998a510b3.jpg' },
    { id: 35, name: 'Aka', artist: 'Graphicvil', price: 12000, image: 'https://img.freepik.com/premium-photo/digital-painting-woman-with-blue-orange-light-her-face_759095-16029.jpg' },
    { id: 36, name: 'Whale', artist: 'Linda', price: 91980, image: 'https://c4.wallpaperflare.com/wallpaper/890/812/834/fantasy-art-landscape-whale-sunset-wallpaper-preview.jpg' },
    { id: 37, name: 'Mushroom city', artist: 'Jhon Reck', price: 13000, image: 'https://i.etsystatic.com/42464190/r/il/9a4fba/4792884116/il_570xN.4792884116_p5tc.jpg' },
    { id: 38, name: 'Floating Rock', artist: 'Arya', price: 22222, image: 'https://wallpaperaccess.com/full/1141048.jpg' },
    { id: 39, name: 'Magic', artist: 'Sansa', price: 12000, image: 'https://w0.peakpx.com/wallpaper/288/373/HD-wallpaper-fantasy-girl-forest-voltairis-fairy-fantasy-art-magical-girl.jpg' },
  ];

  // Filtering products based on search term and filters
  const getFilteredProducts = () => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.artist.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    if (filters.price) {
      if (filters.price === 'below_10000') {
        filtered = filtered.filter((product) => product.price < 10000);
      } else if (filters.price === '10000_25000') {
        filtered = filtered.filter((product) => product.price >= 10000 && product.price <= 25000);
      } else if (filters.price === '25000_50000') {
        filtered = filtered.filter((product) => product.price >= 25000 && product.price <= 50000);
      } else if (filters.price === '50000_100000') {
        filtered = filtered.filter((product) => product.price >= 50000 && product.price <= 100000);
      } else if (filters.price === 'above_100000') {
        filtered = filtered.filter((product) => product.price > 100000);
      }
    }

    // Sort by price if sortBy is selected
    if (filters.sortBy === 'low_to_high') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'high_to_low') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

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

  // Get filtered products
  const filteredProducts = getFilteredProducts();

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

export default DigitalArts;
