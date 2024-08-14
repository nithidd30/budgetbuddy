// src/pages/Analytics.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import './Analytics.css';
import Navbar from '../../components/Navbar/Navbar';
const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
];

const pieData = [
  { name: 'Food', value: 400 },
  { name: 'Transport', value: 300 },
  { name: 'Entertainment', value: 300 },
  { name: 'Healthcare', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics = () => {
  return (
   
    <div className="analytics-container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <h2 className='Analytics-h2'>Analytics</h2>
      <div className="chart-container">
        <h2 className='Analytics-h2'>Income vs Expenses</h2>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#82ca9d" />
          <Line type="monotone" dataKey="expense" stroke="#8884d8" />
        </LineChart>
      </div>

      <div className="chart-container">
        <h2 className='Analytics-h2'>Category Breakdown</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="chart-container">
        <h2 className='Analytics-h2'>Monthly Expenses</h2>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#8884d8" />
        </BarChart>
      
      </div>
    </div>
  );
};

export default Analytics;
