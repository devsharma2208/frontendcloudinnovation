import React from "react";
import MovieList from "../Components/MovieList";
import SideBar from "../Components/SideBar";
import "../App.css";

const HomePage = () => {
  return (
    <div className="home">
      <SideBar />
      <MovieList />
    </div>
  );
};

export default HomePage;
