import React from "react";
import "./Sample.scss";

function Sample() {
  return (
    <div
      className="sample"
      onClick={() => console.log("Sample component clicked")}
    >
      <div>Sample</div>
    </div>
  );
}

export default Sample;
