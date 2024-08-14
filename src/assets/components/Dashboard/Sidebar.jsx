import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaFileInvoiceDollar, FaChartLine, FaCog, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/admin/users"><FaUsers /> User Management</Link></li>
        <li><Link to="/admin/transactions"><FaFileInvoiceDollar /> Transaction Management</Link></li>
        <li><Link to="/admin/analytics"><FaChartLine /> Analytics</Link></li>
        <li><Link to="/admin/settings"><FaCog /> Settings</Link></li>
        <li><Link to="/admin/support"><FaEnvelope /> Support</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
