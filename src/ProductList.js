import React, { useState, useEffect } from 'react';

function ProductList({ addToCart, addToWishlist, wishlist }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    // Insert your products here
    const initialProducts = [
      { id: 1, title: "Digital Arts", artist: "Robb", price: 1926, category: "Digital Art", image: "https://static.vecteezy.com/system/resources/previews/023/574/133/non_2x/fashion-art-portrait-of-beautiful-woman-with-creative-make-up-ai-generative-image-free-photo.jpg" },
      { id: 2, title: "Encounter the Nature", artist: "Chanshali Bia", price: 1499, category: "Painting", image: "https://plus.unsplash.com/premium_photo-1667238544336-17a1cbfd4801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBhaW50aW5nfGVufDB8fDB8fHww" },
      { id: 3, title: "The Art from 1786", artist: "Leo Lewis", price: 99999, category: "Sculpture", image: "https://images.unsplash.com/photo-1583590019972-a146a712d72a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG9pbCUyMHBhaW50aW5nfGVufDB8fDB8fHww" },
      { id: 4, title: "Sculpture of Lord Ganesha", artist: "Indian arts", price: 12000, category: "Sculpture", image: "https://images.unsplash.com/photo-1508133111629-be3f6e535a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNjdWxwdHVyZXMlMjBnYW5lc2glMjBtZXRhbHxlbnwwfHwwfHx8MA%3D%3D" },
      { id: 5, title: "Mountains & Hills", artist: "Renu Lande", price: 1980, category: "Painting", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3RyYWl0JTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D" },
      { id: 6, title: "Outbreak", artist: "Jhon Snow", price: 13000, category: "Painting", image: "https://img.artpal.com/481862/82-23-2-26-9-5-28m.jpg" },
      { id: 7, title: "Mini Home Decor Lippan", artist: "Arya", price: 2222, category: "Home Decor", image: "https://m.media-amazon.com/images/I/91ulI3MK9LL.jpg" },
      { id: 8, title: "Buddha Oil Painting", artist: "Sansa", price: 120, category: "Oil Painting", image: "https://images.woodenstreet.de/image/data/da-monica/buddha-oil-paint-art-teakwood-canvas-stretched-and-framed-wall-painting/updated/1.jpg" },
      { id: 9, title: "Deer Gond Painting", artist: "Snehal Lande", price: 22229, category: "Painting", image: "https://i.etsystatic.com/24774829/r/il/281804/3339768472/il_600x600.3339768472_e7tv.jpg" },
      { id: 10, title: "Avocados", artist: "Chanshali Bia", price: 11449, category: "Digital Art", image: "https://cdn.pixabay.com/photo/2018/07/03/03/48/avocados-3513048_960_720.jpg" },
      // Add more products here if necessary...
    ];

    setProducts(initialProducts);
    setFilteredProducts(initialProducts);
  }, []);

  useEffect(() => {
    let result = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting logic
    if (sortOrder === 'low_to_high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high_to_low') {
      result.sort((a, b) => b.price - a.price);
    }

    // Price filter logic
    if (priceFilter) {
      result = result.filter(product => {
        const price = product.price;
        switch (priceFilter) {
          case 'below_10000':
            return price < 10000;
          case '10000_25000':
            return price >= 10000 && price <= 25000;
          case '25000_50000':
            return price >= 25000 && price <= 50000;
          case '50000_100000':
            return price >= 50000 && price <= 100000;
          case 'above_100000':
            return price > 100000;
          default:
            return true;
        }
      });
    }

    setFilteredProducts(result);
  }, [searchTerm, sortOrder, priceFilter, products]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div>
        <label>
          <input
            type="radio"
            name="sort"
            value="low_to_high"
            onChange={() => setSortOrder('low_to_high')}
          />
          Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="high_to_low"
            onChange={() => setSortOrder('high_to_low')}
          />
          High to Low
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="price"
            value="below_10000"
            onChange={() => setPriceFilter('below_10000')}
          />
          Below 10,000
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="10000_25000"
            onChange={() => setPriceFilter('10000_25000')}
          />
          10,000 - 25,000
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="25000_50000"
            onChange={() => setPriceFilter('25000_50000')}
          />
          25,000 - 50,000
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="50000_100000"
            onChange={() => setPriceFilter('50000_100000')}
          />
          50,000 - 100,000
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="above_100000"
            onChange={() => setPriceFilter('above_100000')}
          />
          Above 100,000
        </label>
      </div>
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>Artist: {product.artist}</p>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button
                onClick={() => addToWishlist(product)}
                style={{
                  backgroundColor: wishlist.some(item => item.id === product.id)
                    ? 'green'
                    : 'gray',
                }}
              >
                {wishlist.some(item => item.id === product.id)
                  ? 'In Wishlist'
                  : 'Add to Wishlist'}
              </button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
