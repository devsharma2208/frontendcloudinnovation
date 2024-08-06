import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LogIn from "./LogIn";
import MovieDetail from "./MovieDetail";
import "../App.css";
// import PrivateRoute from '../Components/PrivateRoute';

const MainRoutes = () => {
  return (
    <div>
      <div className="header">
        <h2>Movie Library</h2>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/movie/:id"
          element={
            //   <PrivateRoute>
            <MovieDetail />
            //   </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
