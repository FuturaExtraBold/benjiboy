import React, { createContext, useState } from "react";

export const SampleModalContext = createContext();

export const SampleModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <SampleModalContext.Provider value={{ showModal, toggleModal }}>
      {children}
    </SampleModalContext.Provider>
  );
};
