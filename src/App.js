import React from "react";
import Bokeh from "./components/Bokeh/Bokeh";
import Fullpage from "./components/FullPage/FullPage";
import "./assets/stylesheets/all.scss";

function App() {
  return (
    <div className="App">
      <Bokeh />
      <Fullpage />
    </div>
  );
}

export default App;
