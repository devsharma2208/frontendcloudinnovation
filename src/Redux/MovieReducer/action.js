import axios from "axios";
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILURE,
} from "./actionTypes";

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovieDetailsSuccess = (movie) => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  payload: movie,
});

export const fetchMovies = ({ ratings = [], order = "" } = {}) => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest());
    try {
      let query = "";
      if (ratings.length) {
        query += `rating=${ratings.join(",")}`;
      }
      if (order) {
        query += `${query.length ? "&" : ""}order=${order}`;
      }
      const response = await axios.get(
        `https://backendcloudinnovation-zeta.vercel.app/movies?${query}`
      );
      dispatch(fetchMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };
};

export const fetchMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/movies/${id}`);
      const movie = await response.json();
      dispatch(fetchMovieDetailsSuccess(movie));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
};
