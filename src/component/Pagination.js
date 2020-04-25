import React, { useContext } from "react";
import globalContext from "../context/global/globalContext";
const Pagination = ({ totalPages }) => {
  // pull the context values
  const { setCurrentPage, currentPage } = useContext(globalContext);
  // the return array that we should map through in the dom
  const pagination = [];
  let i;
  // chek if the number total pages that's api return set pagination as max pages to 10
  if (totalPages < 10) {
    //if total pages less then 10 set the pagination arr lengh to totalPages number
    for (i = 1; i <= totalPages; i++) {
      pagination.push(i);
    }
  } else {
    // if the totalPages more then 10 pages set pagintion just to 10
    for (i = 1; i <= 10; i++) {
      pagination.push(i);
    }
  }
  return (
    <div className='pagination'>
      <div
        className='prev'
        style={{ cursor: "pointer" }}
        onClick={() =>
          currentPage !== 1 ? setCurrentPage(currentPage - 1) : "disabled"
        }
      >
        <i className='fa fa-arrow-left'></i>
      </div>
      {pagination
        ? pagination.map((item) => (
            <div
              key={item}
              onClick={() => setCurrentPage(item)}
              style={
                item === currentPage
                  ? { color: "#ffb100", cursor: "pointer" }
                  : null
              }
            >
              {item}
            </div>
          ))
        : null}
      <div
        className='next'
        style={{ cursor: "pointer" }}
        onClick={() =>
          currentPage !== pagination.length
            ? setCurrentPage(currentPage + 1)
            : null
        }
      >
        <i className='fa fa-arrow-right'></i>
      </div>
    </div>
  );
};

export default Pagination;
