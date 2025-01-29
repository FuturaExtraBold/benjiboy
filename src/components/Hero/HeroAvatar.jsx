import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./HeroAvatar.scss";
import heroImage from "../../assets/images/dipshitV2.jpg";

const HeroAvatar = () => {
  const [initialAnimationComplete, setInitialAnimationComplete] =
    useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  // Initial animation when the image is loaded
  useEffect(() => {
    if (imageLoaded) {
      console.log("Hero component mounted");
      gsap.fromTo(
        ".hero-avatar__image-frame",
        { scale: 3, opacity: 0 }, // Initial state
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => setInitialAnimationComplete(true),
        }
      );
    }
  }, [imageLoaded]);

  useEffect(() => {
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
          <img
            alt="Dipshit"
            className="hero-avatar__image"
            src={heroImage}
            style={{ visibility: imageLoaded ? "visible" : "hidden" }} // Hide until loaded
          />
        </div>
        <p className="hero-avatar__image-title">Actual Photo</p>
      </div>
    </div>
  );
};

export default HeroAvatar;
