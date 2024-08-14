import React from 'react';
import { FaHeadset, FaUserGraduate, FaUsers, FaRegSmile } from 'react-icons/fa';
import './MainPage.css';
import Navbar from '../../components/Navbar/Navbar';

const MainPage = () => {
  return (
    <div className="main-container">
      <section className="intro">
        <Navbar/>
        <h1>Helping people lead healthy financial lives</h1>
        <div className="mservices">
          <div className="mservice">
            <FaRegSmile size={50} /> {/* Increased icon size */}
            <h3>Support</h3>
            <p>Phone or chat, morning or night, get the help you need.</p>
          </div>
          <div className="mservice">
            <FaHeadset size={50} /> {/* Increased icon size */}
            <h3>Guided Onboarding</h3>
            <p>Need a little help getting going? Get a free 30 min appointment with a Quicken expert.</p>
          </div>
          <div className="mservice">
            <FaUserGraduate size={50} /> {/* Increased icon size */}
            <h3>Learn & Grow</h3>
            <p>Our blog and interactive tools will help you grow your knowledge.</p>
          </div>
          <div className="mservice">
            <FaUsers size={50} /> {/* Increased icon size */}
            <h3>Community</h3>
            <p>Learn from other users and get product news.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
