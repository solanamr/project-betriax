import { useState } from "react";
import ArrowLeft from "../../icons/arrowLeft";
import ArrowRight from "../../icons/arrowRight";

export default function Pagination({ currentPage, setCurrentPage, maxPage }) {
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function previousPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="flex justify-center mt-5 py-5">
      <button
        disabled={currentPage === 1 || currentPage < 1}
        className="disabled:opacity-60 "
        onClick={previousPage}
      >
        <ArrowLeft />
      </button>
      <div className="flex items-center px-2">
        <p className="text-greyText text-lg sm:text-xl font-bold px-1">{currentPage}</p>
        <span className="text-greyText text-lg sm:text-xl font-bold px-1">-</span>
        <p className="text-greyText text-lg sm:text-xl font-bold px-1">
          {Math.ceil(maxPage)}
        </p>
      </div>
      <button
        className="disabled:opacity-60"
        onClick={nextPage}
        disabled={currentPage === maxPage || currentPage > maxPage}
      >
        <ArrowRight />
      </button>
    </div>
  );
}
