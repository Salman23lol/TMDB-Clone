import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LoadingPage from './LoadingPage';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      let TMDBAPIKEY = '410cd1de96c4951f3a870c63bf7be8ad';
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDBAPIKEY}`);
      setMovies(response.data.results);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div className="p-6">
      <div className="flex gap-6 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            className="min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y:-40 }}
            whileInView={{ opacity: 1, y:-0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <p className="text-gray-600">{movie.release_date}</p>
              <p className="mt-2">{movie.overview.substring(0, 100)}...</p>
              <Link to={`/details/movie/${movie.id}`} className="text-green-500 hover:underline mt-2 block">View Details</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
