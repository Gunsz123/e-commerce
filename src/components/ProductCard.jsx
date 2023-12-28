import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";
import { motion } from "framer-motion";

const ProductCard = ({ name, price, img, id }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, y: -60 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      className="text-center">
      <div className="text-black border-solid border-amber-400 rounded-xl bg-amber-300 font-bold border-2 p-4 max-h-[400px] max-w-[295px] mb-10  ml-[190px] mt-8 shadow-2xl hover:scale-105">
        <img src={img} alt="shoe" className="object-contain" />
        <p className="mb-3 tracking-tighter">{name}</p>
        <h1 className="mb-3">${price}</h1>
        {cartItemAmount > 0 && <h1 className="mb-3">({cartItemAmount})</h1>}
        <button
          className="border border-solid border-black px-5
           py-2 rounded-xl bg-black text-white hover:bg-amber-400 hover:text-black transition-transform duration-100 
            hover:scale-[0.9]"
          onClick={() => addToCart(id)}>
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
