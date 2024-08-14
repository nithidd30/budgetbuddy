import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import FeatureSection from "../Services/Services";

export default function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  function handleSearch() {
    navigate("/login");
  }

  function handleExplore() {
    navigate("/Services"); // Replace with the correct path for your "Explore" page
  }

  return (
    <>
      <section className="home_section">
        <Navbar/>
        <div className="main_container bg_color_2">
          <div data-aos-duration="2000" className="left_container align-center">
            <h1 className="homeh1">BudgetBuddy</h1>
            <h2 className="homeh2">Spend Smart, Save More!</h2>
            <button className="btn-transparent" onClick={handleSearch}>
              Use Now
            </button>
          </div>
          <div className="right_container align-center">
            <img src="src/assets/pages/Homepage/img1.jpeg" alt="image" />
          </div>
        </div>
        <div className="first_container bg_color_4">
          <div className="image_container">
            <img src="src/assets/pages/Homepage/expenses.jpg" alt="" />
          </div>
          <div data-aos-duration="2500" className="description_container">
            <h2 className="homeh2">Expense - Check Expenses</h2>
            <p className="homep">
              Expenses are an integral part of financial management, representing the 
              costs incurred in the process of acquiring goods and services or maintaining 
              operations. Effective expense management is crucial for both individuals and businesses, 
              as it directly impacts financial stability and growth. Individuals must balance 
              their spending against their income to ensure they can meet their needs and save for 
              future goals. This involves budgeting, tracking expenses, and making conscious decisions 
              about spending priorities.
            </p>
          </div>
        </div>
        <div className="second_container bg_color_3">
          <h2 className="tag_line">Spend less than you earn.</h2>
          <button className="btn-transparent" onClick={handleExplore}>
            Explore Now
          </button>
        </div>
        <Footer/>
        {/* <FeatureSection /> */}
        {/* <ContactForm /> */}
      </section>
    </>
  );
}
