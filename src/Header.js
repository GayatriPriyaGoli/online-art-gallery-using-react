import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './art.css';

function Header({ cartCount, wishlistCount, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Handle the change in search input
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value); // Pass the search term to parent component
    };
    

    return (
        <header>
            <img src="logo.png" alt="Craftopia Logo" width="100" height="100" />
            <div className="header-right">
                <input 
                    type="text" 
                    id="searchInput" 
                    placeholder="Search for arts, artists, and more" 
                    value={searchTerm}
                    onChange={handleSearchChange} // Update state when user types
                />
            </div>
            <div id="user-info" className="hidden">
                <span className="user-initial" id="user-initial"></span>
            </div>
            <div className="header-icons" style={{ position: 'absolute', top: '70px', right: '20px' }}>
    <Link to="/cart">
        <img 
            src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" 
            alt="Cart" 
            className="cart-icon" 
            style={{ width: '32px', height: '32px', marginLeft: '10px' }}
        />
    </Link>
    <Link to="/wishlist">
        <img 
            src="https://cdn-icons-png.flaticon.com/128/8532/8532001.png" 
            alt="Wishlist" 
            className="heart-icon" 
            style={{ width: '32px', height: '32px', marginLeft: '10px' }}
        />
    </Link>
</div>


            <nav>
                <ul className="nav-links">
                    <li><Link to="/Painting">Painting</Link></li>
                    <li><Link to="/Sculptures">Sculptures</Link></li>
                    <li><Link to="/DigitalArts">Digital Arts</Link></li>
                    <li><Link to="/FacePortraits">Face Portraits</Link></li>
                    <li><Link to="/Login" id="loginLink">Login</Link></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;
