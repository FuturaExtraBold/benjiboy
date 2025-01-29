import React from "react";
import "./Bokeh.scss";

const Bokeh = () => {
  const circles = Array.from({ length: 60 });

  return (
    <div className="bokeh-background">
      {circles.map((_, index) => {
        const size = Math.random() * 200 + 10; // Random size
        const top = Math.random() * 100; // Random top position
        const left = Math.random() * 100; // Random left position
        const fadeOpacity = Math.random() * 0.35 + 0.05; // Slightly lower opacity (0.05 to 0.4)
        const duration = Math.random() * 20 + 10; // Random animation duration

        return (
          <div
            key={index}
            className="bokeh-circle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              "--fade-opacity": fadeOpacity, // Pass as a CSS variable
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Bokeh;
