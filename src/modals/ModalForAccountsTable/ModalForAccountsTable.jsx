import React, { useState } from "react";
import "./styles.css";

export const ModalForAccountsTable = ({
  dataToModal,
  setShowModal,
  clickBtn,
}) => {
  const [data, setData] = useState(dataToModal);

  const handleInputChange = (key) => (e) => {
    setData({ ...data, [key]: e.target.value });
  };

  const handleAddressInputChange = (key) => (e) => {
    setData({ ...data, address: { ...data.address, [key]: e.target.value } });
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
        {Object.keys(data).map((key) =>
          key === "address" ? (
            key === "accountId" ? (
              <div key={key}>
                {Object.keys(data[key]).map((addressKey) => (
                  <div className="InputContainer" key={addressKey}>
                    <input
                      className="Input"
                      type="text"
                      required
                      value={data.address[addressKey]}
                      onChange={handleAddressInputChange(addressKey)}
                    />
                    <label className="Label">
                      {addressKey.charAt(0).toUpperCase() + addressKey.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )
          ) : (
            <div className="InputContainer" key={key}>
              <input
                className="Input"
                type="text"
                required
                value={data[key]}
                onChange={handleInputChange(key)}
              />
              <label className="Label">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            </div>
          )
        )}
        <button className="ButtonSubmit" onClick={() => submitChange()}>
          Submit
        </button>
      </div>
    </div>
  );
};
