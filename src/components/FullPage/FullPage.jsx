import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "../Hero/Hero";
import Hooky from "../Hooky/Hooky";
import Kajabi from "../Kajabi/Kajabi";
import "./FullPage.scss";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    easing={"easeInOutExpo"}
    easingcss3={"ease"}
    licenseKey={"36BNK-WTI58-HN0Y6-BIC27-WHNUM"}
    navigation={true}
    navigationPosition={"right"}
    navigationTooltips={["firstSlide", "secondSlide"]}
    scrollingSpeed={500}
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
