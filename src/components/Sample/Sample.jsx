import React, { useContext } from "react";
import "./Sample.scss";
import { SampleModalContext } from "../../context/SampleModalContext";

function Sample({ title, image, className }) {
  const { toggleModal } = useContext(SampleModalContext);

  return (
    <div
      className={`sample ${className}`}
      onClick={() => {
        console.log("Sample component clicked");
        toggleModal();
      }}
    >
      <img src={image} alt={title} className="sample__image" />
      <div className="sample__content">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Sample;
