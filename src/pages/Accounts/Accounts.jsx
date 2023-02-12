import { useEffect, useState } from "react";
import "./styles.css";
import { useFetchData } from "../../hooks/useFetchData";

import { TableForAccounts } from "../../components/TableForAccounts/TableForAccounts";
import { ModalForAccountsTable } from "../../modals/ModalForAccountsTable/ModalForAccountsTable";
import ReactPaginate from "react-paginate";

export const Accounts = () => {
  const limit = 10;
  const page = 1;
  const [showModal, setShowModal] = useState(false);
  const [pageCount, setPageCount] = useState();
  const [post, setPost] = useState();

  // const changeData = (newData) => {
  //   return setData([...data, newData]);
  // };
  const handlePageClick = data => {
    setPageCount(data.selected);
  };
  const { data, error } = useFetchData(
    "https://localhost:5287/api/v1/account-owners"
  );
  console.log(data);

  return (
    <div className="Container">
      {error && <h1>{error}</h1>}
      {data&& <><input className="Search" type="text" placeholder="Search..." />
      <TableForAccounts data={data} />
      <button className="ButtonAdd" onClick={() => setShowModal(true)}>
        ADD
      </button> </>}
      {/* {showModal && (
        <ModalForAccountsTable
          dataToModal={dataToModal}
          setShowModal={setShowModal}
          clickBtn={changeData}
        />
      )}  */}
      <ReactPaginate
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"Pagination"}
        activeClassName={"Active"}
      />
    </div>
  );
};
