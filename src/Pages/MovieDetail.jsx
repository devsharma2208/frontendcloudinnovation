import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Redux/MovieReducer/action";
import { useParams } from "react-router-dom";
import "../App.css";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movies, isLoading, isError } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

 
  const movie = movies.find((movie) => movie.id === parseInt(id));
  console.log(movie);

  if (isLoading) {
    return <div className="singleCard">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="singleCard">
        Error loading movie details. Please try again later.
      </div>
    );
  }

  if (!movie) {
    return <div className="singleCard">Movie not found.</div>;
  }

  return (
    <div className="singleCard">
      <img src={movie.Poster} alt={movie.title} className="movie-image" />
      <h1 className="movie-name">{movie.Title}</h1>
      <p className="movie-year">Release Year: {movie.Year}</p>
      <p className="movie-type">Type: {movie.Type}</p>
      <p className="movie-rating"> Rating: 
        {Array.from({ length: movie.rating }).map((item) => (
          <>★</>
        ))}
      </p>
    </div>
  );
};

export default MovieDetail;
