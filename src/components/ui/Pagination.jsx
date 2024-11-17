import { PaginationButton, PaginationContainer } from "./ui.style";

const Pagination = ({ paginate, currentPage, filteredData, itemsPerPage }) => {
  return (
    <PaginationContainer>
      {Array.from({
        length: Math.ceil(filteredData.length / itemsPerPage),
      }).map((_, index) => (
        <PaginationButton
          key={index + 1}
          onClick={() => paginate(index + 1)}
          active={currentPage === index + 1}
        >
          {index + 1}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
