import React, { useState } from "react";
import { Input } from "../../components/Input/Input";
import "./styles.css";

export const ModalForAccounts = ({ dataToModal, setShowModal, clickBtn }) => {
  const [data, setData] = useState(dataToModal);
  const [error, setError] = useState(false);

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };
  const submitChange = () => {
    const values = Object.values(data);
    if (values.some((value) => value === "")) {
      setError(true)
      return;
    }
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
        <Input value={data.accountNumber} handleInputChange={handleInputChange} params={'accountNumber'} labelValue={"Account Number"}/>
        <Input value={data.ownerId} handleInputChange={handleInputChange} params={'ownerId'} labelValue={"Owner ID"}/>
        <Input value={data.accountType} handleInputChange={handleInputChange} params={'accountType'} labelValue={"Account Type"}/>
        
        <div className="ModalInput">
          <input
            className="Input"
            type="text"
            required
            value={data.accountType}
            onChange={(e) => handleInputChange("accountType", e.target.value)}
          />
          <label className="Label">Account Type</label>
        </div>
        {error&&<div style={{color:'red'}}>Input all form</div>}

        <button className="ButtonSubmit" onClick={() => submitChange()}>
          Submit
        </button>
      </div>
    </div>
  );
};
