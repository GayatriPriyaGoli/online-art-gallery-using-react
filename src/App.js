import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Painting from './Painting';
import Home from './Home';
import Sculptures from './Sculptures';
import DigitalArts from './DigitalArts';
import FacePortraits from './FacePortraits';
import Login from './Login';
import Cart from './Cart';
import Wishlist from './Wishlist';
import './art.css';

function App() {
    const [categoryFilter, setCategoryFilter] = useState(""); 
    const [priceFilter, setPriceFilter] = useState([0, 20000]);
    const location = useLocation();

    const handleFilter = ({ type, value }) => {
        if (type === "category") {
            setCategoryFilter(value); 
        } else if (type === "price") {
            setPriceFilter(value); 
        }
    };

    const hideHeaderFooterPaths = [
        '/painting', '/sculptures', '/digitalarts', '/faceportraits', '/login', '/wishlist', '/cart'
    ];
    const showHeaderFooter = location.pathname === '/' || !hideHeaderFooterPaths.includes(location.pathname.toLowerCase());

    return (
        <div>
            <ToastContainer />
            {showHeaderFooter && <Header />}
            {showHeaderFooter && (
                <SideNav 
                    handleFilter={handleFilter} 
                    categoryFilter={categoryFilter} 
                    priceFilter={priceFilter} 
                />
            )}
            <main>
                <Routes>
                    <Route 
                        path="/" 
                        element={<Home categoryFilter={categoryFilter} priceFilter={priceFilter} handleFilter={handleFilter} />} 
                    />
                    <Route path="/painting" element={<Painting />} />
                    <Route path="/sculptures" element={<Sculptures />} />
                    <Route path="/digitalarts" element={<DigitalArts />} />
                    <Route path="/faceportraits" element={<FacePortraits />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
            </main>
            {showHeaderFooter && <Footer />}
        </div>
    );
}

export default App;
