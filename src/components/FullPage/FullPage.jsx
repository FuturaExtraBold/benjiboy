import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "../Hero/Hero";
import Hooky from "../Hooky/Hooky";
import Kajabi from "../Kajabi/Kajabi";
import "./FullPage.scss";

const afterLoad = (origin, destination, direction, trigger) => {
  console.log("afterLoad", { origin, destination, direction, trigger });
  console.log("destination.index:", destination.index);
};

const onLeave = (origin, destination, direction) => {
  console.log("onLeave", { origin, destination, direction });
};

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    afterLoad={afterLoad}
    licenseKey={"36BNK-WTI58-HN0Y6-BIC27-WHNUM"}
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
