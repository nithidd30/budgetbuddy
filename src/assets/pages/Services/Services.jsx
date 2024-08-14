import React from 'react';
import './Services.css'; // Adjust the path based on your project structure
// import ServicesDescription from './ServicesDescription';

const cardData = [
  { id: 1, title: 'Analysis Graph', description: 'Get your expense analysed by graphs', url: '/Analytics' },
  { id: 2, title: 'Transaction Record', description: 'Get your transaction date-wise and category wise', url: '/ExpenseCalculator' },
  { id: 3, title: 'Luck vs Expense', description: 'Toss a coin,plan your expense', url: '/CoinFlip' },
  // { id: 4, title: 'Creative Design', description: 'Card 4', url: '/creative-design' },
  // Add more cards as needed
];

const Services = () => {
  return (
    <div className="container">
      {/* <ServicesDescription/> */}
      <h1 className='Sh1'>Check your Service</h1>
      <br></br>
      {cardData.map((card) => ( 
        <div className="card" key={card.id}>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="content">
            <h2 className="title">{card.title}</h2>
            <span>{card.description}</span>
            <a href={card.url} className="go-to-link">Go to</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
