import React, { useState } from 'react';
import Footer from './Footer'; // Import the Footer component
import './art.css'; // Assuming you have the necessary styles

const Painting = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ price: '', sort: '' });

  // Sample product data (this should ideally come from a backend)
  const products = [
    {
      id: 9,
      name: 'Deer Gond Painting',
      artist: 'Snehal Lande',
      price: 22229,
      image: 'https://i.etsystatic.com/24774829/r/il/281804/3339768472/il_600x600.3339768472_e7tv.jpg'
    },
    {
      id: 10,
      name: 'Avocados',
      artist: 'Chanshali Bia',
      price: 11449,
      image: 'https://cdn.pixabay.com/photo/2018/07/03/03/48/avocados-3513048_960_720.jpg'
    },
    {
      id: 11,
      name: 'Modern Abstract Painting',
      artist: 'Chanshali Bia',
      price: 19949,
      image: 'https://i.etsystatic.com/24618956/r/il/6f0334/5067298702/il_570xN.5067298702_318i.jpg'
    },
    {
      id: 12,
      name: 'Three Girl Paintings',
      artist: 'Rose',
      price: 12000,
      image: 'https://i.etsystatic.com/26521544/r/il/683ade/3039490765/il_fullxfull.3039490765_a0qn.jpg'
    },
    {
      id: 13,
      name: 'Girl Painting',
      artist: 'Linda Marcco',
      price: 9800,
      image: 'https://cdn.pixabay.com/photo/2020/04/16/09/57/watercolor-5049980_1280.jpg'
    },
    {
      id: 14,
      name: 'Sketch Hand Drawn Man',
      artist: 'Shery',
      price: 12120,
      image: 'https://cdn.pixabay.com/photo/2020/01/07/23/01/sketch-4748895_1280.jpg'
    },
    {
      id: 15,
      name: 'Love Birds Living Room Wall Art',
      artist: 'Luwis',
      price: 18000,
      image: 'https://i.etsystatic.com/39138153/r/il/6715a4/4618332691/il_794xN.4618332691_2fgw.jpg'
    },
    {
      id: 16,
      name: 'The Beauty of Night',
      artist: 'Aaryana',
      price: 12000,
      image: 'https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_1280.jpg'
    }
  ];

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Add item to cart
  const handleAddToCart = (id) => {
    setCart([...cart, id]);
  };

  // Add/remove item to/from wishlist
  const handleToggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter products based on search and filters
  const filteredProducts = products.filter(product => {
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    if (filters.price) {
      const [min, max] = filters.price.split('_').map(Number);
      if (product.price < min || (max && product.price > max)) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    if (filters.sort === 'low_to_high') return a.price - b.price;
    if (filters.sort === 'high_to_low') return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <header>
        <div className="header-left">
          <img src="/path/to/your/logo.png" alt="Craftopia Logo" width="100" height="100" />
        </div>
        <div className="header-right">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for arts, artists and More"
            style={{ width: '500px' }}
          />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            {/* Add more nav items if needed */}
          </ul>
        </nav>
      </header>

      <div id="sideNav">
        <div id="filters">
          <h3>Filters</h3>
          <label>
            <input type="radio" name="price" value="10000_25000" onChange={handleFilterChange} /> ₹10,000 to ₹25,000
          </label><br />
          <label>
            <input type="radio" name="price" value="25000_50000" onChange={handleFilterChange} /> ₹25,000 to ₹50,000
          </label><br />
        </div>
        <div id="sortBy">
          <h3>Sort By</h3>
          <label>
            <input type="radio" name="sort" value="low_to_high" onChange={handleFilterChange} /> Price: Low to High
          </label><br />
          <label>
            <input type="radio" name="sort" value="high_to_low" onChange={handleFilterChange} /> Price: High to Low
          </label><br />
        </div>
        <button id="resetBtn" style={{ backgroundColor: '#f7f8fa', padding: '10px', border: 'none', cursor: 'pointer', margin: '20px' }}>
          RESET
        </button>
      </div>

      <main>
        <div className="product-container">
          {filteredProducts.map(product => (
            <div className="product" key={product.id} data-price={product.price}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.artist}</p>
              <p>₹{product.price}</p>
              <span
                className="heart-icon"
                onClick={() => handleToggleWishlist(product.id)}
                style={{ color: wishlist.includes(product.id) ? 'red' : 'black' }}
              >
                &#9825;
              </span>
              <button className="add-to-cart" onClick={() => handleAddToCart(product.id)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Render the imported Footer component */}
      <Footer />
    </div>
  );
};

export default Painting;
