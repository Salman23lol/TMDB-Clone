// LoadingPage.jsx
import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="w-16 h-16 bg-green-500 rounded-full"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
      <h2 className="text-2xl font-bold text-green-500 ml-4">Loading...</h2>
    </div>
  );
};

export default LoadingPage;
