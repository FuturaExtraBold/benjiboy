import React from 'react';
import BokehBackground from './components/Bokeh/BokehBackground/BokehBackground';
import Hero from './components/Hero/Hero';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BokehBackground />
      <Hero />
    </div>
  );
}

export default App;
