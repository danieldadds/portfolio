import React from "react";
import Icon from "./icon";
import Logo from "./Logo";
import "../styles.css";

export default function Sidebar() {
  return (
    <div className="side-bar-container">
      <div className="icon-container">
        <Logo />
        <Icon src="fa-brands fa-github" />
        <Icon src="fa-brands fa-linkedin" />
        <Icon src="fa-brands fa-twitter" />
        <Icon src="fa-brands fa-facebook" />
        <Icon src="fa-brands fa-instagram" />
      </div>
    </div>
  );
}
