import { useState } from "react";
import "./styles.css";
import { Table } from "../../components/Table/Table";
import { ModalForTable } from "../../modals/ModalForTable/ModalForTable";

export const AccountOwners = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    {
      accountId: "adafafadfsdgdsgdsggdfds1",
      accountNumber: "adafafadfsdgdsgdsggds1",
      lastTransactionId: "adafafadfsdgdsgdsggds1",
      ownerId: "adafafadfsdgdsgdsggds1",
      accountType: "adafafadfsdgdsgdsggds1",
    },
    {
      accountId: "adafafadfsdgdsgdsggds2",
      accountNumber: "adafafadfsdgdsgdsggds",
      lastTransactionId: "adafafadfsdgdsgdsggds2",
      ownerId: "adafafadfsdgdsgdsggds",
      accountType: "adafafadfsdgdsgdsggds",
    },
    {
      accountId: "adafafadfsdgdsgdsggds2",
      accountNumber: "adafafadfsdgdsgdsggds2",
      lastTransactionId: "adafafadfsdgdsgdsggds2",
      ownerId: "adafafadfsdgdsgdsggds2",
      accountType: "adafafadfsdgdsgdsggds2",
    },
  ]);
  const dataToModal = {
    accountNumber: "",
    ownerId: "",
    accountType: "",
  };

  const changeData = (newData) => {
    return setData([...data, newData]);
  };
  return (
    <div className="Container">
      <input className="Search" type="text" placeholder="Search..." />
      <Table data={data} />
      <button className="ButtonAdd" onClick={() => setShowModal(true)}>
        ADD
      </button>
      {showModal && (
        <ModalForTable
          dataToModal={dataToModal}
          setShowModal={setShowModal}
          clickBtn={changeData}
        />
      )}
    </div>
  );
};
