import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
// import { UserProvider } from './src/asset/context/UserContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <UserProvider> */}
    <App />
    {/* </UserProvider> */}
   
  </React.StrictMode>
);