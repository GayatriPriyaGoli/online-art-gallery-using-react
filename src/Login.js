import React, { useState, useEffect } from 'react';
import styles from './login.module.css'; // Ensure the path to the CSS file is correct

const Login = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [formVisibility, setFormVisibility] = useState({
    choiceBox: true,
    roleBox: false,
    customerLoginForm: false,
    customerForm: false,
    sellerLoginForm: false,
    sellerForm: false,
  });
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
  });

  useEffect(() => {
    fetchCsrfToken();
  }, []);

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch('/csrf-token', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  };

  const showLoginSignup = (option) => {
    setSelectedOption(option);
    setFormVisibility({
      choiceBox: false,
      roleBox: true,
      customerLoginForm: false,
      customerForm: false,
      sellerLoginForm: false,
      sellerForm: false,
    });
  };

  const goBackToChoice = () => {
    setFormVisibility({
      choiceBox: true,
      roleBox: false,
      customerLoginForm: false,
      customerForm: false,
      sellerLoginForm: false,
      sellerForm: false,
    });
    setWelcomeMessage('');
  };

  const showForm = (role) => {
    const formType =
      selectedOption === 'signup'
        ? role === 'customer'
          ? 'customerForm'
          : 'sellerForm'
        : role === 'customer'
        ? 'customerLoginForm'
        : 'sellerLoginForm';

    setFormVisibility((prevState) => ({
      ...prevState,
      roleBox: false,
      [formType]: true,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmission = async (event, roleType) => {
    event.preventDefault();
    const { username, password, email, confirmPassword } = formData;

    if (!validatePasswords(password, confirmPassword)) return;

    const userData = roleType.includes('Login')
      ? { username, password }
      : { email, username, password };

    const path = roleType.includes('Login') ? 'login' : 'register';

    try {
      const response = await fetch(`/${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'CSRF-Token': csrfToken,
        },
        body: JSON.stringify({ role: roleType.replace(/Login|Form/g, ''), ...userData }),
      });
      const result = await response.json();
      if (result.success) {
        showWelcomeMessage(username);
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        alert(result.message || `${path} failed`);
      }
    } catch (error) {
      alert(`${path.charAt(0).toUpperCase() + path.slice(1)} failed: ${error.message}`);
    }
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return false;
    }
    if (confirmPassword && password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
    return true;
  };

  const showWelcomeMessage = (username) => {
    setWelcomeMessage(`Welcome, ${username}!`);
    setTimeout(() => setWelcomeMessage(''), 3000);
  };

  return (
    <div>
      <a href="/" className={styles.homeButton} onClick={goBackToChoice}>Home</a>
      <a href="/" className={`${styles.homeButton} ${styles.hidden}`} onClick={goBackToChoice}>&larr; Back</a>
      

      {formVisibility.choiceBox && (
        <div className={styles.container}>
          <h2>Welcome!</h2>
          <p>Select an option to proceed:</p>
          <button className={styles.loginButton} onClick={() => showLoginSignup('login')}>Login</button>
          <button className={styles.loginButton} onClick={() => showLoginSignup('signup')}>Sign Up</button>
        </div>
      )}

      {formVisibility.roleBox && (
        <div className={styles.container}>
          <h2>Are you a Customer or a Seller?</h2>
          <button className={styles.loginButton} onClick={() => showForm('customer')}>Customer</button>
          <button className={styles.loginButton} onClick={() => showForm('seller')}>Seller</button>
        </div>
      )}

      {formVisibility.customerLoginForm && (
        <div className={styles.formBox}>
          <h3>Customer Login</h3>
          <form onSubmit={(e) => handleFormSubmission(e, 'customerLogin')}>
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className={styles.loginButton}>Log In</button>
          </form>
        </div>
      )}

      {formVisibility.customerForm && (
        <div className={styles.formBox}>
          <h3>Customer Sign Up</h3>
          <form onSubmit={(e) => handleFormSubmission(e, 'customerForm')}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input
              className={styles.input}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className={styles.loginButton}>Sign Up</button>
          </form>
        </div>
      )}

      {formVisibility.sellerLoginForm && (
        <div className={styles.formBox}>
          <h3>Seller Login</h3>
          <form onSubmit={(e) => handleFormSubmission(e, 'sellerLogin')}>
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className={styles.loginButton}>Log In</button>
          </form>
        </div>
      )}

      {formVisibility.sellerForm && (
        <div className={styles.formBox}>
          <h3>Seller Sign Up</h3>
          <form onSubmit={(e) => handleFormSubmission(e, 'sellerForm')}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input
              className={styles.input}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className={styles.loginButton}>Sign Up</button>
          </form>
        </div>
      )}

      {welcomeMessage && <div className={styles.welcomeMessage}>{welcomeMessage}</div>}
    </div>
);
};

export default Login;