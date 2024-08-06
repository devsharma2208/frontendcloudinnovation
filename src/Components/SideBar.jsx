import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../Redux/MovieReducer/action";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    rating: searchParams.get("rating") || "",
    ascending: searchParams.get("order") === "asc" || false,
    descending: searchParams.get("order") === "desc" || false,
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.rating) params.append("rating", filters.rating);
    if (filters.ascending) params.append("order", "asc");
    if (filters.descending) params.append("order", "desc");

    setSearchParams(params);

    dispatch(fetchMovies({ ratings: [filters.rating], order: filters.ascending ? "asc" : filters.descending ? "desc" : "" }));
  }, [filters, setSearchParams, dispatch]);

  const handleRatingChange = (event) => {
    const { id } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: prevFilters.rating === id ? "" : id,
    }));
  };

  const handleSortChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
      ...(name === "ascending" && { descending: false }),
      ...(name === "descending" && { ascending: false }),
    }));
  };

  return (
    <div className="filter">
      <div>
        <h3>Filter by Rating</h3>
        <div className="rating">
          <div>
            <input
              type="checkbox"
              id="1"
              checked={filters.rating === "1"}
              onChange={handleRatingChange}
            />
            <label htmlFor="1">★☆☆☆☆</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="2"
              checked={filters.rating === "2"}
              onChange={handleRatingChange}
            />
            <label htmlFor="2">★★☆☆☆</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="3"
              checked={filters.rating === "3"}
              onChange={handleRatingChange}
            />
            <label htmlFor="3">★★★☆☆</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="4"
              checked={filters.rating === "4"}
              onChange={handleRatingChange}
            />
            <label htmlFor="4">★★★★☆</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="5"
              checked={filters.rating === "5"}
              onChange={handleRatingChange}
            />
            <label htmlFor="5">★★★★★</label>
          </div>
        </div>
      </div>
      <div className="year">
        <h3>Sort By Year</h3>
        <div>
          <input
            type="checkbox"
            name="ascending"
            id="ascending"
            checked={filters.ascending}
            onChange={handleSortChange}
          />
          <label htmlFor="ascending">Ascending</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="descending"
            id="descending"
            checked={filters.descending}
            onChange={handleSortChange}
          />
          <label htmlFor="descending">Descending</label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
