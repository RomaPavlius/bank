import { useEffect, useState } from "react";
import "./styles.css";
import { useGetData } from "../../hooks/useGetData";

import { TableForAccounts } from "../../components/TableForAccounts/TableForAccounts";
import { ModalForAccountsTable } from "../../modals/ModalForAccountsTable/ModalForAccountsTable";
import ReactPaginate from "react-paginate";
import useUpdateData from "../../hooks/useChangeData";
import useAddData from "../../hooks/useAddData";

export const Accounts = () => {
  const limit = 10;
  const [showModal, setShowModal] = useState(false);
  const [pageCount, setPageCount] = useState();
  const [dataFromModal, setDataFromModal] = useState();

  const changeData = (newData) => {};

  const handlePageClick = (data) => {
    setPageCount(data.selected + 1);
  };
  const { data, error } = useGetData(
    "https://localhost:5287/api/v1/account-owners"
  );
  // console.log(data);
  const totalPages = Math.ceil(data.total / limit);
  const dataToModal = {
    accountId: "",
    firstName: "",
    lastName: "",
    age: 0,
    address: { country: "", city: "", street: "", number: 1 },
  };

  // const [updateData] = useUpdateData(
  //   "https://localhost:5287/api/v1/account-owners"
  // );

  // const handleUpdate = () => {
  //   updateData({ name: "new_name", value: "new_value" });
  // };

  // const [addData] = useAddData(
  //   "https://api.example.com/resources"
  // );

  // const handleChange = (event) => {
  //   setData({
  //     ...data,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   addData(data);
  // };

  return (
    <div className="Container">
      {error && <h1>{error}</h1>}
      {data && (
        <>
          <input className="Search" type="text" placeholder="Search..." />
          <TableForAccounts data={data} />
          <button className="ButtonAdd" onClick={() => setShowModal(true)}>
            ADD
          </button>
          {showModal && (
            <ModalForAccountsTable
              dataToModal={dataToModal}
              setShowModal={setShowModal}
              clickBtn={changeData}
            />
          )}
        </>
      )}
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"Pagination"}
        activeClassName={"Active"}
      />
    </div>
  );
};
