import React, { useContext } from "react";
import { SampleModalContext } from "../../context/SampleModalContext";
import "./SampleModal.scss";

function SampleModal() {
  const { showModal, toggleModal } = useContext(SampleModalContext);

  if (!showModal) return null;

  return (
    <div className="sample-modal">
      <div className="sample-modal__content">
        <button onClick={toggleModal}>Close</button>
        <p>Sample Modal Content</p>
      </div>
    </div>
  );
}

export default SampleModal;
