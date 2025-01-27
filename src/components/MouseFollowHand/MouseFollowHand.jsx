import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import cartoonHandImage from "../../assets/images/cartoonHand.svg";

const MouseFollowHand = ({ enable }) => {
  const handRef = useRef(null);

  useEffect(() => {
    if (!enable) return;
    console.log("MouseFollowHand enabled");
    const hand = handRef.current;
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Using GSAP to animate the hand div following the cursor
      gsap.to(hand, {
        x: mouseX,
        y: mouseY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    // Hide the default cursor including pointer styles
    const styleElement = document.createElement("style");
    styleElement.innerHTML = "* { cursor: none !important; }";
    document.head.appendChild(styleElement);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(styleElement); // Restore cursor styles on cleanup
    };
  }, [enable]);

  if (!enable) return null;

  return (
    <div
      ref={handRef}
      className="cartoon-hand"
      style={{
        position: "absolute",
        top: -15,
        left: -15,
        width: "1000px",
        height: "auto",
        transform: "translate(-100%, -100%)", // Offset to make top-right of div match cursor
        pointerEvents: "none",
        zIndex: 10000,
      }}
    >
      <img
        alt="Cartoon Hand"
        className="cartoon-hand__image"
        src={cartoonHandImage}
      />
    </div>
  );
};

export default MouseFollowHand;
