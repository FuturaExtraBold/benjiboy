import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import gsap from "gsap";
import Hero from "../Hero/Hero";
import Hooky from "../Hooky/Hooky";
import Kajabi from "../Kajabi/Kajabi";
import "./FullPage.scss";

const afterLoad = (origin, destination, direction, trigger) => {
  console.log("afterLoad", { origin, destination, direction, trigger });
  console.log("destination.index:", destination.index);
};

// const onLeave = (origin, destination, direction) => {
//   console.log("onLeave", { origin, destination, direction });
// };

const onLeave = (origin, destination, direction) => {
  console.log("onLeave", { origin, destination, direction });

  // Define an array of colors for each section
  const colors = ["#040302", "#e74c3c", "#2ecc71"];

  // Get the color based on the destination index, falling back to a default if needed
  const newColor = colors[destination.index % colors.length] || "#ffffff";

  // Target the bokeh background and apply the new background color
  const bokehBackground = document.querySelector(".bokeh-background");
  gsap.to(bokehBackground, { backgroundColor: newColor, duration: 1 });
};

const Fullpage = () => (
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
          <div className="section">
            <Hero />
          </div>
          <div className="section">
            <Kajabi />
          </div>
          <div className="section">
            <Hooky />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
