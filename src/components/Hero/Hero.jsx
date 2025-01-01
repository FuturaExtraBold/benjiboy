import React from "react";
import "./Hero.scss";
import heroImage from "../../assets/images/dipshit.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image-container">
        <img alt="Dipshit" className="hero-image" src={heroImage} />
      </div>
      <h1>Hero</h1>
    </div>
  );
};

export default Hero;
