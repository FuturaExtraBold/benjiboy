import React from "react";
import Bokeh from "./components/Bokeh/Bokeh";
import Fullpage from "./components/FullPage/FullPage";
import SampleModal from "./components/SampleModal/SampleModal";
import { SampleModalProvider } from "./context/SampleModalContext";

function App() {
  return (
    <SampleModalProvider>
      <div className="App">
        <Bokeh />
        <Fullpage />
        <SampleModal />
      </div>
    </SampleModalProvider>
  );
}

export default App;
