import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useGetData } from "../../hooks/useGetData";
import useUpdateData from "../../hooks/useChangeData";
import useAddData from "../../hooks/useAddData";
import { NavBar } from "../../components/NavBar/NavBar";
import "./styles.css";
import { ModalForAccountOwners } from "../../modals/ModalForAccountOwners/ModalForAccountOwners";
import { TableForAccountOwners } from "../../components/TableForAccountOwners/TableForAccountOwners";
import { BASE_URL } from "../../utilts/data";

export const AccountOwners = () => {
  
  const limit = 10;
  const [showModal, setShowModal] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [accountId, setAccountId] = useState();
  const [totalPages, setTotalPages] = useState(1);

  const [addData] = useAddData(`${BASE_URL}/api/v1/account-owners`);
  const { getData, data, error } = useGetData(
    `${BASE_URL}/api/v1/account-owners?page=${pageCount}&count=${limit}`
  );
  const [updateData] = useUpdateData(
    `${BASE_URL}/api/v1/account-owners/${accountId}`
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
    firstName: "",
    lastName: "",
    age: "",
    address: { country: "", city: "", street: "", number: "" },
  };

  return (
    <>
      <NavBar />
      <div className="Container">
        {error && <h1>{error}</h1>}
        {data && (
          <>
            <input className="Search" type="text" placeholder="Search..." />
            <TableForAccountOwners
              data={data.data}
              clickBtn={submitEdit}
              setAccountId={setAccountId}
            />
            <button className="ButtonAdd" onClick={() => setShowModal(true)}>
              ADD
            </button>
            {showModal && (
              <ModalForAccountOwners
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
            containerClassName="Pagination"
            activeClassName="Active"
          />
        )}
      </div>
    </>
  );
};
