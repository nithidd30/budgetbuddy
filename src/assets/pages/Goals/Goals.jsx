// src/pages/Goals.js
import React, { useState } from 'react';
import './Goals.css';
// import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const EmiCalculator = ({ targetAmount, timePeriod }) => {
  const [interestRate, setInterestRate] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = (principal, rate, time) => {
    rate = rate / (12 * 100); // monthly interest rate
    time = time * 12; // time in months
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return emi;
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const emiValue = calculateEMI(targetAmount, interestRate, timePeriod);
    setEmi(emiValue);
  };

  return (
    <div className="emi-calculator " >
      <h2>EMI Calculator</h2>
      <form onSubmit={handleCalculate}>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (% per annum):</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate EMI</button>
      </form>
      {emi && (
        <div className="emi-result">
          <h3>Estimated EMI: ${emi.toFixed(2)} per month</h3>
        </div>
      )}
    </div>
  );
};

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleAddGoal = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Date.now(),
      name: goalName,
      target: parseFloat(targetAmount),
      current: parseFloat(currentAmount),
      timePeriod: parseFloat(timePeriod)
    };
    setGoals([...goals, newGoal]);
    setGoalName('');
    setTargetAmount('');
    setCurrentAmount('');
    setTimePeriod('');
  };

  const handleUpdateProgress = (id, amount) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, current: goal.current + parseFloat(amount) } : goal
    ));
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
    if (selectedGoal && selectedGoal.id === id) {
      setSelectedGoal(null);
    }
  };

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
  };

  return (
    <div className='g-cont bg_color_5'>
      <div className="goals-container">
        <Navbar />
        <h1 className='gh1'>Financial Goals</h1>
        <form onSubmit={handleAddGoal}>
          <div className="form-group">
            <label htmlFor="goalName">Goal Name:</label>
            <input
              type="text"
              id="goalName"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="targetAmount">Target Amount:</label>
            <input
              type="number"
              id="targetAmount"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentAmount">Current Amount:</label>
            <input
              type="number"
              id="currentAmount"
              value={currentAmount}
              onChange={(e) => setCurrentAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="timePeriod">Time Period (in months):</label>
            <input
              type="number"
              id="timePeriod"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Goal</button>
        </form>
        <div className="goals-list">
          {goals.map(goal => (
            <div key={goal.id} className="goal">
              <h2>{goal.name}</h2>
              <p>Target: ${goal.target.toFixed(2)}</p>
              <p>Current: ${goal.current.toFixed(2)}</p>
              <p>Time Period: {goal.timePeriod} months</p>
              <progress value={goal.current} max={goal.target}></progress>
              <div className="goal-actions">
                <button onClick={() => handleUpdateProgress(goal.id, 100)}>Add $100</button>
                <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
                <button onClick={() => handleSelectGoal(goal)}>Calculate EMI</button>
              </div>
            </div>
          ))}
        </div>
        {selectedGoal && (
          <EmiCalculator targetAmount={selectedGoal.target} timePeriod={selectedGoal.timePeriod} />
        )}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Goals;







