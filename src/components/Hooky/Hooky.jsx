import React from "react";
import HookySamples from "./HookySamples";
import "./Hooky.scss";

function Hooky() {
  return (
    <section className="hooky">
      <div className="display--1">Party in the back</div>
      <p>
        For the last 11+ years, I worked at a SaaS company in Southern
        California. I wore many hats in my time there. Here are my favortie
        accoplishments:
      </p>
      <HookySamples />
    </section>
  );
}

export default Hooky;
