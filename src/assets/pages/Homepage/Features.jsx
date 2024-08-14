import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="Fh2">Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>Track Expenses</h3>
          <p>Monitor your spending with ease.</p>
        </div>
        <div className="feature-item">
          <h3>Set Budgets</h3>
          <p>Define your monthly budget and stick to it.</p>
        </div>
        <div className="feature-item">
          <h3>Get Insights</h3>
          <p>Analyze your spending patterns.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
