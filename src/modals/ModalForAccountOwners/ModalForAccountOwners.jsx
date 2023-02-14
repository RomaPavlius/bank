import React, { useState } from "react";
import { Input } from "../../components/Input/Input";
import "./styles.css";

export const ModalForAccountOwners = ({
  dataToModal,
  setShowModal,
  clickBtn,
}) => {
  const [data, setData] = useState(dataToModal);
  const [error, setError] = useState(false);

  
  const handleInputChange = (field,value) => {
    setData({ ...data, [field]: value });
  };

  const handleAddressInputChange = (field,value) => {
    setData({ ...data, address: { ...data.address, [field]: value } });
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
        <Input value={data.firstName} handleInputChange={handleInputChange} params={'firstName'} labelValue={"First Name"}/>
        <Input value={data.lastName} handleInputChange={handleInputChange} params={'lastName'} labelValue={"Last Name"}/>
        <Input value={data.age} handleInputChange={handleInputChange} params={'age'} labelValue={"Age"}/>
        <Input value={data.address.country} handleInputChange={handleAddressInputChange} params={'country'} labelValue={"Country"}/>
        <Input value={data.address.city} handleInputChange={handleAddressInputChange} params={'city'} labelValue={"City"}/>
        <Input value={data.address.street} handleInputChange={handleAddressInputChange} params={'street'} labelValue={"Street"}/>
        <Input value={data.address.number} handleInputChange={handleAddressInputChange} params={'number'} labelValue={"Number"}/>
        {error&&<div style={{color:'red'}}>Input all form</div>}
        <button className="ButtonSubmit" onClick={() => submitChange()}>
          Submit
        </button>
      </div>
    </div>
  );
};
