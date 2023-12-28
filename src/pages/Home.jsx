import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <motion.div
      initial={{ x: 0, y: -500 }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-[800px] py-[200px] text-center">
      <button
        onClick={handleClick}
        className="rounded-full px-[90px] py-[20px] active:bg-amber-300 shadow-2xl font-bold text-3xl bg-black text-white hover:bg-amber-400 hover:text-black transition-transform duration-100 hover:scale-[0.9]">
        SHOP NOW
      </button>
    </motion.div>
  );
};

export default Home;
