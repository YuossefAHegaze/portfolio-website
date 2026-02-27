import React from "react";
import "./logoMarquee.css";

const LogoMarquee = ({ logos = [] }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {logos.concat(logos).map((logo, index) => (
          <div className="marquee-item" key={index}>
            <img src={logo} alt="logo" />
          </div>
        ))}
      </div>

      {/* Blur left / right */}
      <div className="blur-left"></div>
      <div className="blur-right"></div>
    </div>
  );
};

export default LogoMarquee;
