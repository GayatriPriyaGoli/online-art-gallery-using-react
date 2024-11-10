import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <div>
      {/* Button to open the navigation */}
      <button
        id="openNavBtn"
        onClick={() => setNavOpen(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Open Nav
      </button>

      {/* Side navigation */}
      {navOpen && (
        <div
          id="sideNav"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '250px',
            backgroundColor: '#333',
            color: 'white',
            transition: '0.3s',
            paddingTop: '60px',
            boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Close Button */}
          <button
            id="closeNav"
            onClick={() => setNavOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '25px',
              fontSize: '36px',
              color: 'white',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>

          {/* Navigation items */}
          <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
            <li style={{ padding: '8px 16px', borderBottom: '1px solid #555' }}>
              <Link
                to="/Home"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  display: 'block',
                }}
                onClick={() => setNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li style={{ padding: '8px 16px', borderBottom: '1px solid #555' }}>
              <Link
                to="/Painting"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  display: 'block',
                }}
                onClick={() => setNavOpen(false)}
              >
                Paintings
              </Link>
            </li>
            <li style={{ padding: '8px 16px', borderBottom: '1px solid #555' }}>
              <Link
                to="/Sculptures"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  display: 'block',
                }}
                onClick={() => setNavOpen(false)}
              >
                Sculptures
              </Link>
            </li>
            <li style={{ padding: '8px 16px', borderBottom: '1px solid #555' }}>
              <Link
                to="/DigitalArts"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  display: 'block',
                }}
                onClick={() => setNavOpen(false)}
              >
                Digital Arts
              </Link>
            </li>
            <li style={{ padding: '8px 16px', borderBottom: '1px solid #555' }}>
              <Link
                to="/FacePortraits"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  display: 'block',
                }}
                onClick={() => setNavOpen(false)}
              >
                Face Portraits
              </Link>
            </li>
            <li style={{ padding: '8px 16px', borderBottom: '1px solid #555' }}>
              <Link
                to="/Login"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  display: 'block',
                }}
                onClick={() => setNavOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navigation;
