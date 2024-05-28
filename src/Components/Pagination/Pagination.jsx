// this is basically logic relative to that compoenent
import "./Pagination.css";
export default function Pagination({
  currentPage,
  totalPages = 10,
  onPageChange,
}) {
  function generateNoOfPages() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  return (
    <>
      <div className="Pagination">
        <button
          className="Pagination-btn"
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
        >
          Prev
        </button>
        {/* below is a single pageNo */}
        {generateNoOfPages().map((pageNo) => (
          <button
            className={`Pagination-btn ${
              currentPage === pageNo ? "active" : ""
            }`}
            key={pageNo}
            onClick={() => {
              onPageChange(pageNo);
            }}
            disabled={currentPage === 1}
          >
            {pageNo}
          </button>
        ))}
        <button
          className="Pagination-btn"
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}
