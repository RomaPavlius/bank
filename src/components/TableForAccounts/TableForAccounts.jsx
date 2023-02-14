import { useState } from "react";
import { ModalForAccounts } from "../../modals/ModalForAccounts/ModalForAccounts";
import "./styles.css";

export const TableForAccounts = ({ data, clickBtn, setAccountId }) => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClickEdit = (index) => {
    setIndex(index);
    setAccountId(data[index].accountId);
    setShowModal(true);
  };

  const changeData = (newData) => {
    clickBtn(newData);
  };
  return (
    <>
      <table className="DataTable">
        <thead className="DataTableHeader">
          <tr className="DataTableHeaderRow">
            {Object.keys(data[0]).map((key) => (
              <th className="DataTableHeaderCell" key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className="DataTableRow" key={index}>
              {Object.keys(row).map((key, innerIndex) => (
                <td className="DataTableCell" key={row[key] + innerIndex}>
                  {row[key]}
                  {innerIndex === Object.keys(row).length - 1 && (
                    <button
                      className="EditButton"
                      onClick={() => handleClickEdit(index)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <ModalForAccounts
          dataToModal={data[index]}
          setShowModal={setShowModal}
          clickBtn={changeData}
        />
      )}
    </>
  );
};

