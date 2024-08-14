import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import './About.css';
import Services from "../Services/Services";
import Footer from "../../components/Footer/Footer";
import Overview from "../Overview/Overview";
import FAQ from '../FAQ/FAQ';
// import ProfilePage from "../ProfilePage/ProfilePage";
import AboutPage from "./AboutPage";
// import ProfilePage from "../ProfilePage/ProfilePage";
const About = () => {
  // function handleExploreus() {
  //   navigate("/Services"); // Replace with the correct path for your "Explore" page
  // }
  return (
    <section>
      <Navbar />
      <AboutPage/>
      <div className="second_container bg_color_2" >
          <h2 data-aos-duration ="2500" className="abth2" >
            <br></br>
            About Expenses
          
          <br></br></h2 >
          <br></br>
          <p data-aos-duration="2500" className="abtp">
          Expenses are the costs individuals or organizations incur to acquire goods and services or to 
          maintain operations. Effective management of these costs is essential for
          financial health. For individuals, this means budgeting, tracking spending, and 
          prioritizing needs over wants to ensure that they live within their means and 
          save for future goals. For businesses, controlling expenses is crucial to maintaining profitability and
          ensuring long-term growth. This requires careful planning, regular monitoring, 
          and strategic adjustments to minimize unnecessary costs while maximizing value. 
          By understanding and managing expenses, both individuals and businesses can achieve 
          greater financial stability and security.For businesses, managing expenses is essential for maintaining profitability 
          and ensuring long-term sustainability. This involves careful planning, regular monitoring, and adjusting strategies to control 
          costs while maximizing value. Understanding and managing expenses effectively can lead to better financial health, reduced stress, 
          and the ability to invest in future opportunities.
          </p>
          
        </div>
        <Services/>
        <Overview/>
        <FAQ/>
        {/* <ProfilePage/> */}
       
        <Footer/>
    </section>
  );
};

export default About;
