import React from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-[#262626] text-white text-xl p-5 justify-center space-x-[400px] font-semibold sm:space-x-[100px]">
        <h1 className="hover:text-amber-400 cursor-pointer">ShoeStop</h1>
        <Link to="/" className="hover:text-amber-400">
          Home
        </Link>
        <Link to="/products" className="hover:text-amber-400">
          Products
        </Link>
        <Link to="/cart" className="hover:text-amber-400 flex items-center">
          Cart
          <GrCart className="ml-5" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
