import React, { useState } from "react";
import "./styles.css";

export const ModalForTable = ({ dataToModal, setShowModal, clickBtn }) => {
  const [data, setData] = useState(dataToModal);

  const handleInputChange = (key) => (e) => {
    setData({ ...data, [key]: e.target.value });
  };
  const submitChange = () => {
    const values = Object.values(data);
    if (values.some((value) => value === "")) {
      return;
    }
    console.log(data);
    setShowModal(false);
    clickBtn(data);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Modal" onClick={closeModal}>
      <div
        className="ModalContent"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {Object.keys(data).map((key) => (
          <div className="InputContainerTable" key={key}>
            <input
              className="Input"
              type="text"
              required
              value={data[key]}
              onChange={handleInputChange(key)}
            />
            <label className="Label">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
          </div>
        ))}
        <button className="ButtonSubmit" onClick={() => submitChange()}>
          Submit
        </button>
      </div>
    </div>
  );
};
