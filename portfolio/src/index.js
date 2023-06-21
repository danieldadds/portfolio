import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./components/App";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PageContainer from "./components/PageContainer";
import Showcase from "./components/Showcase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main-layout">
      <Sidebar />
      <div className="main-container">
        <Navbar />
        <Hero />
        {/* <PageContainer
          title="About me"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius lorem vel est pellentesque viverra. Nulla ullamcorper est libero, vel vulputate dolor aliquet non. In."
        /> */}
      </div>
    </div>
  </React.StrictMode>
);
