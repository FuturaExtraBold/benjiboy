import React from "react";
import KajabiSamples from "./KajabiSamples";
import "./Kajabi.scss";

function Kajabi() {
  return (
    <section className="kajabi">
      <div className="display--1">Business in the front</div>
      <p>
        For the last 11+ years, I worked at a SaaS company in Southern
        California. I wore many hats in my time there. Here are my favortie
        accoplishments:
      </p>
      <KajabiSamples />
    </section>
  );
}

export default Kajabi;
