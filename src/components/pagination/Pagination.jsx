import ReactPaginate from "react-paginate";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const Pagination = ({ setPage, totalPages }) => {
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel=""
      onPageChange={handlePageClick}
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={0}
      nextLabel={<FiArrowRight />}
      previousLabel={<FiArrowLeft />}
      containerClassName="flex select-none items-center justify-center gap-2 pt-10"
      pageLinkClassName="flex h-10 min-w-[40px] items-center justify-center rounded border border-slate-800 bg-slate-800 transition-all duration-300 hover:border-sky-500"
      activeLinkClassName="!border !border-sky-500"
      previousLinkClassName="flex h-10 min-w-[40px] items-center justify-center"
      nextLinkClassName="flex h-10 min-w-[40px] items-center justify-center"
    />
  );
};
