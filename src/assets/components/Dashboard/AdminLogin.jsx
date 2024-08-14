// src/pages/AdminLogin.js
import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Correctly call useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Example validation logic
    if (username === 'admin@admin' && password === 'admin123') {
      alert('Login successful!');
      navigate('/Admin'); // Redirect to admin dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container bg_color_6">
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
