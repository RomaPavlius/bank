import { useState, useEffect } from "react";
import "./styles.css";
import ReactPaginate from "react-paginate";
import { useGetData } from "../../hooks/useGetData";
import useUpdateData from "../../hooks/useChangeData";
import useAddData from "../../hooks/useAddData";
import { NavBar } from "../../components/NavBar/NavBar";
import { TableForAccounts } from "../../components/TableForAccounts/TableForAccounts";
import { ModalForAccounts } from "../../modals/ModalForAccounts/ModalForAccounts";
import { BASE_URL } from "../../utilts/data";


export const Accounts = () => {
  const limit = 5;
  const [showModal, setShowModal] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [accountId, setAccountId] = useState();
  const [totalPages, setTotalPages] = useState(1);

  const [addData] = useAddData(`${BASE_URL}/api/v1/accounts`);
  const { getData, data, error } = useGetData(
    `${BASE_URL}/api/v1/accounts?page=${pageCount}&count=${limit}`
  );
  const [updateData] = useUpdateData(
    `${BASE_URL}/api/v1/accounts/${accountId}`
  );
  useEffect(() => {
    getData();
  }, [pageCount]);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.total / limit));
    }
  }, [data, limit]);

  const submitAdd = async (newData) => {
    await addData(newData);
    getData();
  };

  const submitEdit = async (newData) => {
    await updateData(newData);
    getData();
  };

  const handlePageClick = ({ selected }) => {
    setPageCount(selected + 1);
  };
  const dataToModal = {
    accountNumber: "",
    ownerId: "",
    accountType: "",
  };
  return (
    <>
      <NavBar /><div className="Container">
        {error && <h1>{error}</h1>}
        {data && (
          <>
            <input className="Search" type="text" placeholder="Search..." />
            <TableForAccounts
              data={data.data}
              clickBtn={submitEdit}
              setAccountId={setAccountId}
            />
            <button className="ButtonAdd" onClick={() => setShowModal(true)}>
              ADD
            </button>
            {showModal && (
              <ModalForAccounts
                dataToModal={dataToModal}
                setShowModal={setShowModal}
                clickBtn={submitAdd}
              />
            )}
          </>
        )}
        {totalPages > 1 && (
          <ReactPaginate
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"Pagination"}
            activeClassName={"Active"}
          />
        )}
      </div>
    </>
  );
};
