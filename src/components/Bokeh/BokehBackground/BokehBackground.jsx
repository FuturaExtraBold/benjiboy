import React from 'react';
import './BokehBackground.css';

const BokehBackground = () => {
  const circles = Array.from({ length: 100 });

  return (
    <div className="bokeh-background">
      {circles.map((_, index) => {
        const size = Math.random() * 50 + 10;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        const duration = Math.random() * 20 + 10;

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
              animationDuration: `${duration}s`
            }}
          ></div>
        );
      })}
      <div className="content">
        {/* Your content goes here */}
        <h1>Hello, World!</h1>
      </div>
    </div>
  );
};

export default BokehBackground;