import React from 'react';
import './BottomSection.css';
import { FaShieldAlt, FaUsers, FaLock, FaDollarSign } from 'react-icons/fa';

const BottomSection = () => {
  return (
    <div className="quicken-page">
      {/* Navigation Bar
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo">Quicken</span>
          <ul className="nav-links">
            <li><a href="#">I want to</a></li>
            <li><a href="#">Why Quicken</a></li>
            <li><a href="#">Plans & Pricing</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="#" className="sign-in">Sign in</a>
          <button className="get-started">Get started</button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="bhero">
        <h1>Over <span className="highlight">20 million</span> better financial lives built, and counting</h1>
      </section>

      {/* Info Cards */}
      <section className="binfo-cards">
        <div className="bcard">
          <FaUsers size={50} className="bcard-icon" />
          <h3>Trusted for over 40 years</h3>
          <p>#1 best-selling with 20+ million customers over 4 decades.</p>
        </div>
        <div className="bcard">
          <FaShieldAlt size={50} className="bcard-icon" />
          <h3>Bank-grade security</h3>
          <p>We protect your data with industry-standard 256-bit encryption.</p>
        </div>
        <div className="bcard">
          <FaLock size={50} className="bcard-icon" />
          <h3>Your privacy matters</h3>
          <p>Rest assured, we’ll never sell your personal data.</p>
        </div>
        <div className="bcard">
          <FaDollarSign size={50} className="bcard-icon" />
          <h3>No surprise charges or ads</h3>
          <p>No hidden fees or annoying ads. What you see is what you get.</p>
        </div>
      </section>
    </div>
  );
};

export default BottomSection;
