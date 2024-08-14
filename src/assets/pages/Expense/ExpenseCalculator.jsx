import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ExpenseCalculator.css';

const ExpenseCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/expenses')
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setExpenses(data))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
    
    fetch('http://localhost:8080/api/income')
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setIncome(data.amount || ''))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const addIncome = () => {
    fetch('http://localhost:8080/api/income', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: income }),
    })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  };

  const handleExpenseSubmit = () => {
    if (expenseName && expenseAmount && expenseCategory && expenseDate) {
      const newExpense = { name: expenseName, amount: parseFloat(expenseAmount), category: expenseCategory, date: expenseDate };

      fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExpense),
      })
        .then(response => {
          console.log(response);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          setExpenses([...expenses, data]);
          setExpenseName('');
          setExpenseAmount('');
          setExpenseCategory('');
          setExpenseDate('');
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
    }
  };

  const removeExpense = (id) => {
    fetch(`http://localhost:8080/api/expenses/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      setExpenses(expenses.filter(expense => expense.id !== id));
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
  };

  const filteredExpenses = expenses.filter(expense => {
    return (!filterCategory || expense.category === filterCategory) &&
           (!filterDate || expense.date === filterDate);
  });

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = income - totalExpenses;

  return (
    <section>
      <Navbar />
      <div className="expensecontainer">
        <div className='cal'>
          <br />
          <h1>Expense Calculator</h1>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Income</h2>
          <input
            type="number"
            value={income}
            onChange={handleIncomeChange}
            placeholder="Enter your income"
          />
          <button onClick={addIncome}>Add Income</button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Add/Edit Expense</h2>
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            placeholder="Expense name"
          />
          <input
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Expense amount"
          />
          <select
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
            placeholder="Expense category"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Housing">Housing</option>
            <option value="Insurance">Insurance</option>
            <option value="Savings">Savings</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
            placeholder="Expense date"
          />
          <div className='but'>
            <button onClick={handleExpenseSubmit}>
              {editIndex !== null ? 'Update Expense' : 'Add Expense'}
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }} className='nithi'>
          <h2>Expenses</h2>
          <div style={{ marginBottom: '20px' }}>
            <h3>Filter</h3>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Housing">Housing</option>
              <option value="Insurance">Insurance</option>
              <option value="Savings">Savings</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
          {filteredExpenses.map((expense) => (
            <div key={expense.id}>
              <h3>{expense.date}</h3>
              <ul>
                <li>
                  <span>
                    {expense.name} (${expense.amount.toFixed(2)}) - {expense.category}
                  </span>
                  <div>
                    <button onClick={() => setEditIndex(expense.id)} style={{ marginLeft: '30px' }}>
                      Edit
                    </button>
                    <button onClick={() => removeExpense(expense.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ))}
          <button onClick={() => setExpenses([])}>
            Clear All Expenses
          </button>
        </div>

        <div className="expensesummary">
          <h2>Summary</h2>
          <h4>Total Income: ${parseFloat(income || 0).toFixed(2)}</h4>
          <h4>Total Expenses: ${totalExpenses.toFixed(2)}</h4>
          <h4>Balance: ${balance.toFixed(2)}</h4>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ExpenseCalculator;
