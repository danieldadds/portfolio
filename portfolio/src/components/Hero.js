import React from "react";
import Showcase from "./Showcase";

export default function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-heading-one">Daniel Dadds</h1>
      <h1 className="hero-heading-one">I build things for the web.</h1>
      <h3 className="hero-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        similique molestias excepturi fugiat at tempora.
      </h3>
      {/* <button className="hero-button">Projects</button> */}
      <Showcase />
    </div>
  );
}
