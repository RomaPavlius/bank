import { useState } from "react";
import { ModalForAccountsTable } from "../../modals/ModalForAccountsTable/ModalForAccountsTable";
import "./styles.css";

export const TableForAccounts = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClickEdit = (index) => {
    setIndex(index);
    setShowModal(true);
  };

  const changeData = (dataModal) => {
    return (data[index] = dataModal);
  };
  return (
    <>
      <table className="DataTable">
        <thead className="DataTableHeader">
          <tr className="DataTableHeaderRow">
            {Object.keys(data[0]).map((key,index) => (
              <th className="DataTableHeaderCell" key={index}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className="DataTableRow" key={row.accountId}>
              <td className="DataTableCell">{row.accountId}</td>
              <td className="DataTableCell">{row.firstName}</td>
              <td className="DataTableCell">{row.lastName}</td>
              <td className="DataTableCell">{row.age}</td>
              <td className="DataTableCell">
                {row.address.country},{row.address.city},{row.address.street} ,
                {row.address.number}
                <button
                  className="EditButton"
                  onClick={() => handleClickEdit(index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <ModalForAccountsTable
          dataToModal={data[index]}
          setShowModal={setShowModal}
          clickBtn={changeData}
        />
      )}
    </>
  );
};
