import React from 'react';
import './art.css';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#2d4159', color: '#fff', textAlign: 'center', padding: '10px', bottom: '0', width: '100%' }}>
            <p>&copy; 2024 Craftopia. All Rights Reserved.</p>
            <p>Follow us on 
                <a href="https://www.instagram.com" style={{ color: '#7ddfee', textDecoration: 'none' }} aria-label="Instagram">Instagram</a>, 
                <a href="https://www.facebook.com" style={{ color: '#e0e38a', textDecoration: 'none' }} aria-label="Facebook">Facebook</a>, and 
                <a href="https://www.twitter.com" style={{ color: '#9ef5aa', textDecoration: 'none' }} aria-label="Twitter">Twitter</a>.
            </p>
        </footer>
    );
}

export default Footer;
