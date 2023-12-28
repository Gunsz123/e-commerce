import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-[#262626] text-white text-xl p-5 justify-center space-x-[400px] font-semibold ">
      <Link to="/" className="hover:text-amber-400">
        Home
      </Link>
      <Link to="/products" className="hover:text-amber-400">
        Products
      </Link>
      <Link to="/cart" className="hover:text-amber-400">
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
