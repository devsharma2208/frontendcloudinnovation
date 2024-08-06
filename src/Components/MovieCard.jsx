import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  // const  token  = useSelector((state) => state.token);
  const token = sessionStorage.getItem("token");
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`${token ? `/movie/${movie.id}` : "/login"}`);
      }}
    >
      <img src={movie.Poster} alt="" />
      <h3>{movie.Title}</h3>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
      <p className="movie-rating">{movie.rating}</p>
    </div>
  );
};

export default MovieCard;
