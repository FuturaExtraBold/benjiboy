import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./HeroAvatar.scss";
import heroImage from "../../assets/images/dipshitV2.jpg";

const HeroAvatar = () => {
  const [initialAnimationComplete, setInitialAnimationComplete] =
    useState(false);

  useEffect(() => {
    console.log("Hero component mounted");
    // GSAP animation for the image
    gsap.fromTo(
      ".hero-avatar__image-frame",
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
        gsap.to(".hero-avatar__image-frame", {
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
    <div className="hero-avatar">
      <div className="hero-avatar__image-frame">
        <div className="hero-avatar__container-inset">
          <img alt="Dipshit" className="hero-avatar__image" src={heroImage} />
        </div>
        <p className="hero-avatar__image-title">Actual Photo</p>
      </div>
    </div>
  );
};

export default HeroAvatar;
