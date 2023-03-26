import { useState, useEffect } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const getPageRange = () => {
      let startPage = currentPage - 2;
      let endPage = currentPage + 2;

      if (startPage < 1) {
        endPage += Math.abs(startPage) + 1;
        startPage = 1;
      }

      if (endPage > totalPages) {
        startPage -= endPage - totalPages;
        endPage = totalPages;
      }

      const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => i + startPage
      );
      setPages(pages);
    };

    getPageRange();
  }, [currentPage, totalPages]);

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const buttons = pages.map((page) => (
    <button
      key={page}
      onClick={() => handlePageClick(page)}
      className={`border rounded-md px-3 py-1 ${
        currentPage === page
          ? "bg-blue-500 text-white"
          : "bg-white text-gray-700"
      }`}
    >
      {page}
    </button>
  ));

  return (
    <div className="flex justify-center space-x-2">
      {currentPage !== 1 && (
        <button
          className="border rounded-md px-3 py-1 bg-white text-gray-700"
          onClick={() => handlePageClick(currentPage - 1)}
        >
          Previous
        </button>
      )}
      {buttons}
      {currentPage !== totalPages && (
        <button
          className="border rounded-md px-3 py-1 bg-white text-gray-700"
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
