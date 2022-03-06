import React from "react";
import "./SocialContact.css";
import { SocialData } from "../../data/Social";

const SocialContact = () => {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item, index) => {
        return (
          <a href={item.link} target="_blank" key={index}>
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContact;
