// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Homepage/Home";
import Analytics from "./assets/pages/Analytics/Analytics";
// import About from "./assets/pages/About/About";
import Login from "./assets/pages/Login/Login";
import Signup from "./assets/pages/Signup/Signup";
import ContactUs from "./assets/pages/ContactUs/ContactUs";
import ExpenseCalculator from "./assets/pages/Expense/ExpenseCalculator";
// import Expense from "./assets/pages/Expense/Expense";
import TermsofService from "./assets/pages/TermsofService";
import PrivacyPolicy from "./PrivacyPolicy";
import CoinFlip from './assets/components/CoinFlip/CoinFlip';
import ServicesDescription from "./assets/pages/Services/ServicesDescription";
import Review from "./assets/pages/Reviews/Review";
import Dashboard from "./assets/components/Dashboard/Dashboard";
import Goals from "./assets/pages/Goals/Goals";
import AdminLogin from "./assets/components/Dashboard/AdminLogin";
import ProfilePage from "./assets/pages/ProfilePage/ProfilePage";
import FAQ from "./assets/pages/FAQ/FAQ";
import { UserProvider } from "./assets/pages/ProfilePage/UserContext"; // Import UserProvider
import AboutPage from "./assets/pages/About/AboutPage";
// import TDashboard from "./assets/pages/Transaction/TDashboard";
// import Transaction from "./assets/pages/Transaction/Transaction";

function App() {
  return (
    <UserProvider> {/* Wrap your app with UserProvider */}
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Admin" element={<Dashboard />} />
          <Route path="/Reviews" element={<Review />} />
          <Route path="/Goals" element={<Goals />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/static-page.html' element={<Dashboard.html />} />
          <Route path='/Services' element={<ServicesDescription />} />
          <Route path='/terms-of-service' element={<TermsofService />} />
          <Route path='/Expense' element={<ExpenseCalculator />} />
    
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/CoinFlip' element={<CoinFlip />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Analytics' element={<Analytics />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
