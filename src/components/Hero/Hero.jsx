import React from "react";
import "./Hero.scss";
import heroImage from "../../assets/images/dipshit.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__image-container">
        <div className="hero__image-container-inset">
          <img alt="Dipshit" className="hero__image" src={heroImage} />
        </div>
      </div>
      <div className="hero__content">
        <h1 className="display--1">
          THIS...
          <br />
          IS BEN HAYS
        </h1>
        <h3 className="other-font">He writes code, so you don't have to.</h3>
      </div>
    </div>
  );
};

export default Hero;
