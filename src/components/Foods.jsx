import React, { useState, useEffect } from "react";
import { getFoodByName } from "./APIManeger";
import FoodCard from "./FoodCard";

export default function Foods() {
  const [searchQuery, setSearchQuery] = useState("");
  const [food, setFood] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    cuisineType: "",
    dietaryPreferences: "",
    priceRange: "",
    popularity: "",
  });
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = async () => {
    try {
      if (!searchQuery) return;
      setLoading(true);
      const result = await getFoodByName(searchQuery);
      const parsedResult = JSON.parse(result);
      setFood(parsedResult.results);
      setLoading(false);
      setCurrentPage(1);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [food, filters]);

  const applyFilters = () => {
    const filtered = food.filter(
      (item) =>
        (!filters.cuisineType || item.cuisineType === filters.cuisineType) &&
        (!filters.dietaryPreferences ||
          item.dietaryPreferences.includes(filters.dietaryPreferences)) &&
        (!filters.priceRange || item.priceRange === filters.priceRange) &&
        (!filters.popularity || item.popularity === filters.popularity)
    );
    setFilteredData(filtered);
  };

  const handleFilterChange = (filterName) => (event) => {
    setFilters({
      ...filters,
      [filterName]: event.target.value,
    });
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return (
      <div className="fixed inset-0 text-6xl text-white font-bold bg-black bg-opacity-50 z-50 flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-center">Search for Food</h1>
        <div className="flex items-center justify-center gap-2 mb-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter food name..."
            className="my-10 text-white  bg-gray-800 border-gray-600 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-400 px-4 py-2"
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
      <div className="flex gap-4 mb-4">
     

<div className="flex gap-4 mb-4">
  <select
    value={filters.cuisineType}
    onChange={handleFilterChange("cuisineType")}
    className="text-white bg-gray-800 border-gray-600 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-400 px-4 py-2"
  >
    <option value="">All Cuisines</option>
    <option value="Italian">Italian</option>
    <option value="Chinese">Chinese</option>
    <option value="Mexican">Mexican</option>
    <option value="Indian">Indian</option>
  </select>
  <select
    value={filters.dietaryPreferences}
    onChange={handleFilterChange("dietaryPreferences")}
    className="text-white bg-gray-800 border-gray-600 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-400 px-4 py-2"
  >
    <option value="">All Dietary Preferences</option>
    <option value="Vegetarian">Vegetarian</option>
    <option value="Vegan">Vegan</option>
    <option value="Gluten-Free">Gluten-Free</option>
    <option value="Keto">Keto</option>
  </select>
  <select
    value={filters.priceRange}
    onChange={handleFilterChange("priceRange")}
    className="text-white bg-gray-800 border-gray-600 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-400 px-4 py-2"
  >
    <option value="">All Price Ranges</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
  <select
    value={filters.popularity}
    onChange={handleFilterChange("popularity")}
    className="text-white bg-gray-800 border-gray-600 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-400 px-4 py-2"
  >
    <option value="">All Popularity Levels</option>
    <option value="Popular">Popular</option>
    <option value="New">New</option>
  </select>
</div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {currentItems &&
          currentItems.map((item) => <FoodCard key={item.id} item={item} />)}
      </div>
      {filteredData.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <ul className="flex space-x-2">
            {Array.from(
              { length: Math.ceil(filteredData.length / itemsPerPage) },
              (_, i) => i + 1
            ).map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  className={`px-3 py-1 rounded-md ${
                    pageNumber === currentPage
                      ? "bg-gray-900 text-white"
                      : "bg-gray-300 text-gray-700"
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
