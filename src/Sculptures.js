import React, { useState } from 'react';
import './art.css'; // assuming the CSS is in this file

const Sculptures = () => {
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
    { id: 17, name: 'Classical Sculpture', artist: 'Luo li rung', price: 1726, image: 'https://i.pinimg.com/originals/59/a6/ce/59a6ce733f5e266249bf5ad342b517b3.jpg' },
    { id: 18, name: 'Swan Sculpture', artist: 'Chanshali Bia', price: 1499, image: 'https://www.htohshop.com/cdn/shop/files/CrystalSwanSculpture-Large_700x.jpg?v=1711301358' },
    { id: 19, name: 'Wood Sculpture', artist: 'Leo Lewis', price: 9999, image: 'https://i.pinimg.com/originals/09/05/b3/0905b34547c156ed7413684b5d9bda97.jpg' },
    { id: 20, name: 'Sculpture of Lord Ganesha', artist: 'Indian Arts', price: 12000, image: 'https://images.unsplash.com/photo-1508133111629-be3f6e535a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNjdWxwdHVyZXMlMjBnYW5lc2glMjBtZXRhbHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 21, name: 'Kinetic Sculpture', artist: 'Renu Lande', price: 1880, image: 'https://tse1.mm.bing.net/th?id=OIP.e9g2U3H8M3-YTbl0KsB54AHaFj&pid=Api&P=0&h=180' },
    { id: 22, name: 'Minimalist Sculpture', artist: 'Jhon Snow', price: 1000, image: 'https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/.width-340_4VxSRe2.jpg' },
    { id: 23, name: 'Statue', artist: 'Arya', price: 20222, image: 'http://thewowstyle.com/wp-content/uploads/2015/02/7831e2ec26dfa0a98d74679e538390ccfamous-statues.jpg' },
    { id: 24, name: 'Modern Sculpture', artist: 'Sansa', price: 1120, image: 'https://mymodernmet.com/wp/wp-content/uploads/2022/06/Daniel-Popper-Ginkgo-HumanNature-The-Morton-Arboretum-1.jpg' },
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

export default Sculptures;
