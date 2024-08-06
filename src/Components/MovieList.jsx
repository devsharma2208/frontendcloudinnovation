import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Redux/MovieReducer/action";
import MovieCard from "./MovieCard";
import "../App.css";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, isError } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movies. Please try again later.</div>;
  }

  return (
    <div data-testid="movie-list" className="cards">
      {movies && movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default MovieList;
