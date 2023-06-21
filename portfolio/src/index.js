import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./components/App";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main-layout">
      <Sidebar />
      <div className="main-container">
        <Navbar />
        <Hero />
      </div>
    </div>
  </React.StrictMode>
);
