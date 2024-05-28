// we will import from the index.jsx for reusable compoenents
import React, { useState } from "react";
import Pagination from "./Pagination";
import "./Pagination.css";
export default function PaginationTest() {
  // The Array.from() method returns an array from any object with a length property.
  // The Array.from() method returns an array from any iterable object.
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `product ${index + 1}`,
  }));
  console.log(dummyData, "dummyData");

  // how many items we want to display
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };
  // calculate some of things
  const indexofLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexofLastItems - itemsPerPage;
  const currentListOfItems = dummyData.slice(
    indexOfFirstItems,
    indexofLastItems
  );
  console.log(
    currentListOfItems,
    "currentListOfItems",
    indexOfFirstItems,
    "indexOfFirstItems",
    indexofLastItems,
    "indexofLastItems"
  );
  return (
    <>
      <h1 className="Pagination-header">Pagination</h1>
      <ul className="list-items">
        {currentListOfItems.map((listItem) => (
          <li key={listItem.id}>{listItem.name}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </>
  );
}
