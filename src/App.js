import React from "react";
import BokehBackground from "./components/Bokeh/BokehBackground/BokehBackground";
import Fullpage from "./components/FullPage/FullPage";
import "./assets/stylesheets/all.scss";

function App() {
  return (
    <div className="App">
      <BokehBackground />
      <Fullpage />
    </div>
  );
}

export default App;
