// src/components/PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css';
import Navbar from './assets/components/Navbar/Navbar';
const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <br></br>
      <h2><br></br>Privacy Policy</h2>
      <br></br>
      <h4>Your privacy is important to us. This privacy policy explains how we collect, 
        use, and protect your information when you use our expense tracker app.
      
        Dear User, welcome to our mobile application "Daily Expense Tracker." Before you start using this application, please read and understand this Privacy Policy carefully. This Privacy Policy is intended to explain how we collect, use, and protect your personal information.
</h4>
<br></br>
<h3>1. Information Collection</h3>
<br></br>
<h4>Our "Daily Expense Tracker" application is designed to provide you with expense tracking and income analysis services. To fulfill these features, we may collect the following information:

1.1 Information provided by the user

- When using the application, you may enter financial details, including income, expenses, and notes.

1.2 Automatically collected information

- To enhance user experience and improve our services, we may use technological means to collect device information, such as device model, operating system version, and application version.
</h4><br></br>
<h3>2. Use of Information</h3>
<br></br>
<h4>We will use the collected information for the following purposes:

- Provide expense tracking and income analysis services.

- Process your financial data to enable you to view and manage your financial information.

- Analyze user patterns to enhance and optimize application performance and features.

- Send updates and notifications related to the application to users.
</h4>
<br></br>
<h3>3. Information Sharing</h3>
<br></br>
<h4>We promise not to sell, trade, or transfer your personal information to any third party. Your personal information will not be shared with other companies, organizations, or individuals unless we obtain your explicit consent or when required by law.
We value the security of your personal information. We will take reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</h4>
<br></br>
<br></br>
      <Navbar/>
    </div>
    
  );
};

export default PrivacyPolicy;
