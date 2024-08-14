import React from 'react';
import './AboutPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../Services/Services';
import Overview from '../Overview/Overview';
import FAQ from '../FAQ/FAQ';

const AboutPage = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>About BudgetBuddy</h1>
          <p>
            Welcome to BudgetBuddy, your ultimate expense tracking solution. Our app helps you manage your finances effortlessly by tracking your income and expenses, setting financial goals, and providing insightful analytics.
          </p>
          <h2>Features</h2>
          <ul>
            <li>Track your daily, weekly, and monthly expenses.</li>
            <li>Set and monitor your financial goals.</li>
            <li>Analyze your spending habits with detailed reports and charts.</li>
            <li>Easily add and categorize transactions.</li>
            <li>Secure login and user authentication.</li>
          </ul>
          <h2>Why Choose BudgetBuddy?</h2>
          <p>
            BudgetBuddy is designed with you in mind. We understand that managing finances can be challenging, so we've created a user-friendly app that simplifies the process. Whether you're saving for a big purchase, paying off debt, or just trying to get a better handle on your spending, BudgetBuddy has the tools you need to succeed.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals to take control of their finances, make informed decisions, and achieve their financial goals. We believe that everyone deserves financial peace of mind, and we're here to help you get there.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or feedback, we'd love to hear from you. Visit our <a href="/contact-us">Contact Us</a> page to get in touch.
          </p>
        </div>
        <Overview />
        <FAQ />
      </div>
    </div>
  );
};

export default AboutPage;
