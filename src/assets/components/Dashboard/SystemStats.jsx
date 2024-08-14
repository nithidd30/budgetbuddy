import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SystemStats.css';

const SystemStats = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Fetch system stats from the backend
    axios.get('/api/stats')
      .then(response => setStats(response.data))
      .catch(error => console.error('Error fetching system stats:', error));
  }, []);

  return (
    <div className="system-stats">
      <h2>System Statistics</h2>
      <div className="stat-item">
        <h3>Total Users</h3>
        <p>{stats.totalUsers}</p>
      </div>
      <div className="stat-item">
        <h3>Total Transactions</h3>
        <p>{stats.totalTransactions}</p>
      </div>
      {/* Add more stats as needed */}
    </div>
  );
};

export default SystemStats;
