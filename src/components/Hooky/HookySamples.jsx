import React, { useEffect, useState } from "react";
import Sample from "../Sample/Sample";
import "./HookySamples.scss";
import kajabiSampleData from "../../data/kajabiSamples";

function HookySamples() {
  // console.log("kajabiSampleData:", kajabiSampleData);
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    setSamples(kajabiSampleData);
  }, []);

  return (
    <div className="hooky-samples">
      {samples.map((sample, index) => (
        <Sample
          className="sample--askew"
          key={index}
          title={sample.title}
          image={sample.image}
          description={sample.description}
        />
      ))}
    </div>
  );
}

export default HookySamples;
