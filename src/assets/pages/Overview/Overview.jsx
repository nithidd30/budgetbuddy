// FinancialOverview.js
import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <div className="financial-overview">
      <div className="financial-card">
        <img src="src\assets\pages\Overview\img1.jpeg" alt="See all your finances" />
        <h2>See all your finances</h2>
        <ul>
          <li>Automatic (or manual) download</li>
          <li>Checking, savings, credit cards</li>
          <li>Investments (including crypto)</li>
          <li>Partnerships</li>
          <li>401(k), IRA, retirement</li>
          <li>Educational, custodial, 529s</li>
          <li>Assets (e.g. home), debt</li>
          <li>Net worth over time</li>
        </ul>
      </div>
      <div className="financial-card">
        <img src="src\assets\pages\Overview\img2.jpeg" alt="Save more" />
        <h2>Save more</h2>
        <ul>
          <li>Track savings over time</li>
          <li>Uncover more ways to save money</li>
        </ul>
      </div>
      <div className="financial-card">
        <img src="\src\assets\pages\Overview\img3.jpeg" alt="Stay on budget" />
        <h2>Stay on budget</h2>
        <ul>
          <li>12-month budget</li>
          <li>Get budget suggestions</li>
          <li>See where you're over/under budget</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
