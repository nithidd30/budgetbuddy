import React from 'react';
import './ServicesDescription.css'; // Add any CSS you need for styling
import Services from './Services';
import Navbar from '../../components/Navbar/Navbar';

const ServicesDescription = () => {
  return (
    <div className='sd'>
      <Navbar/>
    <div className="services-description">
      <h1 className="services-title">Welcome to Our Services</h1>
      <p className="services-intro">
        The Services page is your gateway to the core features of Budget Buddy. Explore the tools we offer to help you manage your finances effectively.
      </p>
      
      <h2 className="services-heading">Our Services</h2>
      <ul className="services-list">
        <li className="services-item">
          <strong>Analysis Graph:</strong> Visualize your spending patterns with detailed graphs. <a href="/Analytics" className="services-link">Learn More</a>
        </li>
        <li className="services-item">
          <strong>Transaction Record:</strong> Review your transactions in an organized manner. <a href="/ExpenseCalculator" className="services-link">Learn More</a>
        </li>
        <li className="services-item">
          <strong>Luck vs Expense:</strong> Toss a coin to make light-hearted decisions about your expenses. <a href="/CoinFlip" className="services-link">Learn More</a>
        </li>
      </ul>

      <p className="services-note">More services will be added soon. Stay tuned!</p>
      <Services />
    </div>
    </div>
  );
};

export default ServicesDescription;
