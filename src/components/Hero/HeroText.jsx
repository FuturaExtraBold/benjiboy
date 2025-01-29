import React from "react";
// import { gsap } from "gsap";
import "./HeroText.scss";

const HeroText = () => {
  return (
    <div className="hero-text">
      <h1 className="display--1 hero-text__title">
        THIS...
        <br />
        IS BEN HAYS
      </h1>
      <h2 className="secondary-font display--2 hero-text__subtitle">
        He writes code, so you don't have to.
      </h2>
    </div>
  );
};

export default HeroText;
