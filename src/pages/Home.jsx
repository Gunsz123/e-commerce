import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div className="px-[800px] py-[200px] text-center">
      <button
        onClick={handleClick}
        className="bg-amber-400 rounded-full px-[90px] py-[20px] hover:bg-amber-500 active:bg-amber-300 shadow-lg font-bold text-3xl">
        SHOP NOW
      </button>
    </div>
  );
};

export default Home;
