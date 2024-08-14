import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <ul>
          <li><Link to="/admin/users">User Management</Link></li>
          <li><Link to="/admin/stats">System Stats</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      <main className="admin-content">
        <h1>Welcome to the Admin Dashboard</h1>
        {/* Render content based on route */}
      </main>
    </div>
  );
};

export default Dashboard;
