import React from "react";
import "./Web.css";

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#about">About</a>
      </div>

      <div className="web-option">
        <a href="#skills">Skills</a>
      </div>

      <div className="web-option">
        <a href="#projects">Projects</a>
      </div>

      <div className="web-option">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Web;
