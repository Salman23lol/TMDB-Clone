// Navbar.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.div
      className="w-full h-auto bg-white shadow-md p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
        <Link
          to="/"
          className="text-lg font-semibold text-green-500 hover:text-green-700 transition duration-300"
        >
          TMDB-Clone
        </Link>
        <div className="w-auto flex items-center justify-center gap-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-sm bg-green-500 text-white hover:bg-green-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/trending-movies"
            className="px-4 py-2 rounded-sm bg-green-500 text-white hover:bg-green-700 transition duration-300"
          >
            Trending Movies
          </Link>
          <Link
            to="/trending-tv-shows"
            className="px-4 py-2 rounded-sm bg-green-500 text-white hover:bg-green-700 transition duration-300"
          >
            Trending TV Shows
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
