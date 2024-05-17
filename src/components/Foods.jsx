import React, { useState, useEffect } from "react";
import { getFoodByName } from "./APIManeger";

export default function Foods() {
  const [searchQuery, setSearchQuery] = useState("");
  const [food, setFood] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      if (!searchQuery) return; 
      setLoading(true);
      const result = await getFoodByName(searchQuery);
      const parsedResult = JSON.parse(result);
      setFood(parsedResult.results);
      setCurrentPage(1);
      console.log(parsedResult);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching food data:", error);
    } finally {
      setLoading(false);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = food.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return (
      <div className="fixed inset-0 text-6xl text-white font-bold bg-black bg-opacity-50 z-50 flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-5xl mt-2 font-bold text-center">Search for Food</h1>
        <div className="flex items-center justify-center gap-2 mb-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter food name..."
            className="my-10 text-white bg-gray-800 border-gray-600 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-400 px-4 py-2"
          />
          <button
            onClick={handleSearch}
            disabled={!searchQuery}
            className="my-10 text-white bg-gray-800 border-gray-600 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-400 px-4 py-2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {currentItems &&
          currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border text-center rounded-md"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="ease-in-out duration-300 hover:scale-110 object-cover h-full w-full"
                />
              </div>
              <h2 className="text-2xl my-1 font-bold mb-2 text-black">
                {item.title}
              </h2>
            </div>
          ))}
      </div>
      {food.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <ul className="flex space-x-2">
            {Array.from(
              { length: Math.ceil(food.length / itemsPerPage) },
              (_, i) => i + 1
            ).map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  className={`px-3 py-1 rounded-md ${
                    pageNumber === currentPage
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800 text-gray-700"
                  }`}
                  onClick={() => paginate(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
