import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import TrendingMovies from "./Components/TrendingMovies";
import TrendingTVShows from "./Components/TrendingTVShows";
import DetailsPage from "./Components/DetailsPage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/trending-movies" element={<TrendingMovies />} />
        <Route path="/trending-tv-shows" element={<TrendingTVShows />} />
        <Route path="/details/:type/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
