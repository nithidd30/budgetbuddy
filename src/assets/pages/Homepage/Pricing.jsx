import React from 'react';
import './Pricing.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Pricing</h2>
      <div className="pricing-content">
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Free</h3>
            <p>$0 / month</p>
            <p>Basic features</p>
            <Link to="/login" className="btn">Sign Up</Link>  {/* Use Link to navigate to login */}
          </div>
          <div className="pricing-card">
            <h3>Premium</h3>
            <p>$9.99 / month</p>
            <p>Advanced features</p>
            <Link to="/login" className="btn">Sign Up</Link>  {/* Use Link to navigate to login */}
          </div>
        </div>
        <div className="pcarousel-container">
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
              <img src="src/assets/pages/Homepage/pimage1.png" alt="Slide 1" />
            </div>
            <div>
              <img src="src/assets/pages/Homepage/pimage2.png" alt="Slide 2" />
            </div>
            <div>
              <img src="src/assets/pages/Homepage/imagesp.jpeg" alt="Slide 3" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
