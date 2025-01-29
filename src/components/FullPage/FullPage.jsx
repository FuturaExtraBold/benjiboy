import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import gsap from "gsap";
import Hero from "../Hero/Hero";
import Hooky from "../Hooky/Hooky";
import Kajabi from "../Kajabi/Kajabi";
import MouseFollowHand from "../MouseFollowHand/MouseFollowHand";
import "./FullPage.scss";

const Fullpage = () => {
  const [enableCustomCursor, setEnableCustomCursor] = useState(false);
  const [hookyAnimated, setHookyAnimated] = useState(false);
  const [kajabiAnimated, setKajabiAnimated] = useState(false);

  const afterLoad = (origin, destination, direction, trigger) => {
    console.log("afterLoad", { origin, destination, direction, trigger });
    console.log("destination.index:", destination.index);

    if (destination.index === 0) {
      // Hero Section
      console.log("Hero Section");
      setEnableCustomCursor(false);
    }
    if (destination.index === 1) {
      // Kajabi Section
      console.log("Kajabi Section");
      triggerKajabiAnimation();
      setEnableCustomCursor(false);
    }
    if (destination.index === 2) {
      // Hooky Section
      console.log("Hooky Section");
      triggerHookyAnimation();
      setEnableCustomCursor(true);
    } else {
      setEnableCustomCursor(false);
    }
  };

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });

    // Define an array of colors for each section
    const colors = ["#040302", "#2e91fc", "#2ecc71"];
    const circleColors = ["#ff0000", "#ffffff", "#0000ff"];

    // Get the color based on the destination index, falling back to a default if needed
    const newColor = colors[destination.index % colors.length] || "#ffffff";
    const newCircleColor =
      circleColors[destination.index % circleColors.length] || "#ffffff";

    // Target the bokeh background and apply the new background color
    const bokehBackground = document.querySelector(".bokeh-background");
    gsap.to(bokehBackground, { backgroundColor: newColor, duration: 1 });

    const circles = document.getElementsByClassName("bokeh-circle");
    Array.from(circles).forEach((circle) => {
      gsap.to(circle, { backgroundColor: newCircleColor, duration: 1 });
    });

    if (destination.index === 1) {
      setEnableCustomCursor(false);
    }
    if (destination.index === 2) {
      setEnableCustomCursor(true);
    } else {
      setEnableCustomCursor(false);
    }
  };

  // Function to trigger GSAP animation for Kajabi Section
  const triggerKajabiAnimation = () => {
    if (!kajabiAnimated) {
      gsap.fromTo(
        "#kajabi .sample",
        {
          scale: 1.1,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.inout",
        }
      );
      setKajabiAnimated(true);
    }
  };

  // Function to trigger GSAP animation for Hooky Section
  const triggerHookyAnimation = () => {
    if (!hookyAnimated) {
      gsap.fromTo(
        "#hooky .sample",
        {
          scale: 1.1,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.inout",
        }
      );
      setHookyAnimated(true);
    }
  };

  return (
    <>
      <MouseFollowHand enable={enableCustomCursor} />
      <ReactFullpage
        //fullpage options
        afterLoad={afterLoad}
        licenseKey={process.env.REACT_APP_FULL_PAGE_KEY}
        navigation={true}
        navigationPosition={"right"}
        navigationTooltips={[]}
        onLeave={onLeave}
        scrollingSpeed={400}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" id="hero">
                <Hero />
              </div>
              <div className="section" id="kajabi">
                <Kajabi />
              </div>
              <div className="section" id="hooky">
                <Hooky />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Fullpage;
