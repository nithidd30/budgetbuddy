import React from 'react';
import './HeroSection.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/LNavbar';

const HeroSection = () => {
  return (
    <div>
      <Navbar/>
    <div className="hero-container">
     
      <div className="hero-content">
        <div className="rcarousel-container">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={3000}
            transitionTime={1000}
          >
            <div>
              <img src="src/assets/pages/Homepage/expenses.jpg" alt="Slide 1" />
            </div>
            <div>
              <img src="src/assets/pages/Homepage/img1.jpeg" alt="Slide 2" />
            </div>
            <div>
              <img src="src/assets/pages/Homepage/image2.jpg" alt="Slide 3" />
            </div>
          </Carousel>
        </div>
        <div className="text-container">
          <h1>Welcome to BudgetBuddy</h1>
          <p>Track your expenses effortlessly</p>
          <div className="hero-btns">
            <Link to="/login" className="btn">Find your plan</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
