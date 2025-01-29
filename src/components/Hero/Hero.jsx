import React from "react";
import HeroAvatar from "./HeroAvatar";
import HeroText from "./HeroText";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <HeroAvatar />
      <HeroText />
    </div>
  );
};

export default Hero;
