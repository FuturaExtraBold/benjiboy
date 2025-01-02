import React from "react";
import "./Bokeh.scss";

const Bokeh = () => {
  const circles = Array.from({ length: 100 });

  return (
    <div className="bokeh-background">
      {circles.map((_, index) => {
        const size = Math.random() * 200 + 10;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.1 + 0.2;
        const duration = Math.random() * 200 + 10;

        return (
          <div
            key={index}
            className="bokeh-circle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              opacity: opacity,
              animationDuration: `${duration}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Bokeh;
