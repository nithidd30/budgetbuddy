import React from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import Pricing from './Pricing';
// import Footer from '../../components/Footer/Footer';

import MainPage from '../MainPage/MainPage';
import BottomSection from './BottomSection';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#ADD8E6', padding: '20px' }}>
      <HeroSection />
      <MainPage />
      <Pricing />
      <Features />
      <BottomSection />
      <ContactUs />
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
