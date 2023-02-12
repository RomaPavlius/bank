import React, { useState } from "react";
import "./styles.css";

export const ModalForTable = ({ dataToModal, setShowModal, clickBtn }) => {
  const [data, setData] = useState(dataToModal);
  console.log(Object.entries(data));

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
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
        <div className="InputContainerTable">
          <input
            className="Input"
            type="text"
            required
            value={data.accountNumber}
            onChange={(e) => handleInputChange("accountNumber", e.target.value)}
          />
          <label className="Label">Account Number</label>
        </div>
        <div className="InputContainerTable">
          <input
            className="Input"
            type="text"
            required
            value={data.ownerId}
            onChange={(e) => handleInputChange("ownerId", e.target.value)}
          />
          <label className="Label">Owner ID</label>
        </div>
        <div className="InputContainerTable">
          <input
            className="Input"
            type="text"
            required
            value={data.accountType}
            onChange={(e) => handleInputChange("accountType", e.target.value)}
          />
          <label className="Label">Account Type</label>
        </div>

        <button className="ButtonSubmit" onClick={() => submitChange()}>
          Submit
        </button>
      </div>
    </div>
  );
};
