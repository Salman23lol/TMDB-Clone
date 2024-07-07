// DetailsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoadingPage from './LoadingPage';

const DetailsPage = () => {
  const { type, id } = useParams(); 
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
          params: { api_key: '410cd1de96c4951f3a870c63bf7be8ad' },
        });
        setDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [type, id]);

  if (!details) return <LoadingPage />

  return (
    <motion.div
      className="w-full h-auto p-6 py-10 bg-white rounded-lg flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[80%] flex flex-col lg:flex-row items-center justify-center">
        <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title || details.name} className="w-full lg:w-1/2 h-auto object-cover rounded-md" />
        <div className="mt-6 lg:mt-0 lg:ml-6">
          <h1 className="text-3xl font-bold">{details.title || details.name}</h1>
          <p className="text-gray-600 mt-2">{details.release_date || details.first_air_date}</p>
          <p className="mt-4">{details.overview}</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Details</h2>
            <p><strong>Status:</strong> {details.status}</p>
            <p><strong>Runtime:</strong> {details.runtime || details.episode_run_time?.[0]} minutes</p>
            <p><strong>Genres:</strong> {details.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Languages:</strong> {details.spoken_languages.map(lang => lang.english_name).join(', ')}</p>
            <p><strong>Production Companies:</strong> {details.production_companies.map(company => company.name).join(', ')}</p>
            <p><strong>Vote Average:</strong> {details.vote_average}</p>
            <p><strong>Vote Count:</strong> {details.vote_count}</p>
            {details.budget && <p><strong>Budget:</strong> ${details.budget.toLocaleString()}</p>}
            {details.revenue && <p><strong>Revenue:</strong> ${details.revenue.toLocaleString()}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailsPage;
