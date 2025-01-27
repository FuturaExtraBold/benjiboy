import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./Hero.scss";
import heroImage from "../../assets/images/dipshitV2.jpg";

const Hero = () => {
  const [initialAnimationComplete, setInitialAnimationComplete] =
    useState(false);

  useEffect(() => {
    console.log("Hero component mounted");
    // GSAP animation for the image
    gsap.fromTo(
      ".hero__image-frame",
      { scale: 3, opacity: 0 }, // Initial state
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        onComplete: setInitialAnimationComplete(true),
      } // Final state
    );
  }, []);

  useEffect(() => {
    console.log("Initial animation complete:", initialAnimationComplete);
    if (initialAnimationComplete) {
      // Continuous random animation for the frame
      const animateFrame = () => {
        gsap.to(".hero__image-frame", {
          x: gsap.utils.random(-15, 15), // Random X movement
          y: gsap.utils.random(-15, 15), // Random Y movement
          rotation: gsap.utils.random(-3, 3), // Random rotation
          scale: gsap.utils.random(1, 1.05), // Random scale
          duration: 2, // Duration for each cycle
          delay: 0.5, // Delay before starting the animation
          ease: "power1.inOut", // Smooth easing
          onComplete: animateFrame, // Recursively call the animation
        });
      };
      animateFrame(); // Start the animation
    }
  }, [initialAnimationComplete]);

  return (
    <div className="hero">
      <div className="hero__image-container">
        <div className="hero__image-frame">
          <div className="hero__image-container-inset">
            <img alt="Dipshit" className="hero__image" src={heroImage} />
          </div>
          <p className="hero__image-title">Actual Photo</p>
        </div>
      </div>
      <div className="hero__content">
        <h1 className="display--1 hero__title">
          THIS...
          <br />
          IS BEN HAYS
        </h1>
        <h2 className="secondary-font display--2 hero__subtitle">
          He writes code, so you don't have to.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
