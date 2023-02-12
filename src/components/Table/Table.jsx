import { useState } from "react";
import { ModalForTable } from "../../modals/ModalForTable/ModalForTable";
import "./styles.css";

export const Table = ({ data }) => {
  const dataTable = data;
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClickEdit = (index) => {
    setIndex(index);
    setShowModal(true);
  };

  const changeData = (data) => {
    return (dataTable[index] = data);
  };
  return (
    <>
      <table className="DataTable">
        <thead className="DataTableHeader">
          <tr className="DataTableHeaderRow">
            {Object.keys(data[0]).map((key) => (
              <th className="DataTableHeaderCell">
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
        <ModalForTable
          dataToModal={data[index]}
          setShowModal={setShowModal}
          clickBtn={changeData}
        />
      )}
    </>
  );
};
