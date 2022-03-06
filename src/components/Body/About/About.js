import React from "react";
import SocialContact from "../../common/SocialContact/SocialContact";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There, I am a
          <br />
          <span className="info-name">Frontend Developer</span>.
          <br />I love experimenting with the web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            alt="hero picture"
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
};

export default About;
