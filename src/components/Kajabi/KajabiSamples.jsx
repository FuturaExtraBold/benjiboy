import React, { useEffect, useState } from "react";
import Sample from "../Sample/Sample";
import "./KajabiSamples.scss";
import kajabiSampleData from "../../data/kajabiSamples";

function KajabiSamples() {
  console.log("kajabiSampleData:", kajabiSampleData);
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    setSamples(kajabiSampleData);
  }, []);

  return (
    <div className="kajabi-samples">
      {samples.map((sample, index) => (
        <Sample
          key={index}
          title={sample.title}
          image={sample.image}
          description={sample.description}
        />
      ))}
    </div>
  );
}

export default KajabiSamples;
