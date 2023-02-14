import { useState } from "react";
import "./styles.css";
import { ModalForAccountOwners } from "../../modals/ModalForAccountOwners/ModalForAccountOwners";

export const TableForAccountOwners= ({ data,clickBtn,setAccountId}) => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClickEdit = (index) => {
    setIndex(index);
    setAccountId(data[index].accountOwnerId)
    setShowModal(true);
  };

   

  const changeData = (newData) => {
    clickBtn(newData)

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
            <tr className="DataTableRow" key={row.accountOwnerId}>
              <td className="DataTableCell">{row.accountOwnerId}</td>
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
        <ModalForAccountOwners
          dataToModal={data[index]}
          setShowModal={setShowModal}
          clickBtn={changeData}
        />
      )}
    </>
  );
};