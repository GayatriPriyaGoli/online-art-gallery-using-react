import React, { useState } from 'react';

function UserDropdown({ user, setUser }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/login';
  };

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return user ? (
    <div id="userInitialContainer" style={{ display: 'inline-block', position: 'relative' }}>
      {/* User Initial Button */}
      <button
        id="userInitial"
        onClick={toggleDropdown}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          fontSize: '20px',
          borderRadius: '50%',
          padding: '10px',
          width: '40px',
          height: '40px',
          textAlign: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {user.username.charAt(0).toUpperCase()}
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div
          id="userDropdown"
          style={{
            position: 'absolute',
            top: '50px',
            right: '0',
            backgroundColor: '#333',
            color: 'white',
            borderRadius: '5px',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
            zIndex: 1,
            width: '200px',
            padding: '10px',
            display: 'block',
          }}
        >
          <p id="fullUsername" style={{ margin: '0', padding: '8px 0', fontSize: '16px' }}>
            {user.name}
          </p>
          <button
            id="logoutLink"
            onClick={handleLogout}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer',
              borderRadius: '5px',
              width: '100%',
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  ) : (
    <a id="loginLink" href="/login" style={{ textDecoration: 'none', color: '#4CAF50', fontSize: '16px' }}>
      Login
    </a>
  );
}

export default UserDropdown;
