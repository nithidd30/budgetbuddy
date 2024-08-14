// src/components/EmiCalculator/EmiCalculator.js
import React, { useEffect, useState } from 'react';
import './EmiCalculator.css';

const EmiCalculator = ({ targetAmount, timePeriod }) => {
  const [emi, setEmi] = useState(null);

  useEffect(() => {
    if (targetAmount && timePeriod) {
      const P = parseFloat(targetAmount);
      const R = 0.01; // Example interest rate per month (1%)
      const N = parseFloat(timePeriod);
      const emi = (P * R * (Math.pow(1 + R, N))) / (Math.pow(1 + R, N) - 1);
      setEmi(emi.toFixed(2));
    }
  }, [targetAmount, timePeriod]);

  return (
    <div className="emi-calculator-container">
      <h2 className='emih'>EMI Calculation</h2>
      {emi !== null && (
        <div className="emi-result">
          <h3 className='emi3'>Your Monthly EMI is: ${emi}</h3>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
