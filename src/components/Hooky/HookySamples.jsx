import React, { useEffect, useState } from "react";
import Sample from "../Sample/Sample";
import "./HookySamples.scss";
import kajabiSampleData from "../../data/kajabiSamples";

function HookySamples() {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    setSamples(kajabiSampleData);
  }, []);

  return (
    <>
      <div className="hooky-samples">
        {samples.map((sample, index) => (
          <Sample
            key={index}
            title={sample.title}
            image={sample.image}
            description={sample.description}
          />
        ))}
      </div>
    </>
  );
}

export default HookySamples;
