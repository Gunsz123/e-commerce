import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";

const CartItem = ({ name, price, img, id }) => {
  const { cartItems, addToCart, removeFromCart, removeItem } = useContext(ShopContext);
  return (
    <>
      <div className="text-black flex items-center font-bold">
        <img src={img} alt="image" />
        <div className="flex ml-2">
          <p>
            <b>{name}</b>
          </p>
          <p className="ml-5">${price}</p>
        </div>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <button
          onClick={() => addToCart(id)}
          className="border border-solid border-black px-3
           py-1 rounded-md bg-black text-white hover:bg-amber-400 hover:text-black transition-transform duration-100 hover:scale-[0.9] font-mono">
          +
        </button>
        <button
          onClick={() => removeItem(id)}
          className="border border-solid border-black px-5
           py-1 rounded-md bg-black text-white hover:bg-amber-400 hover:text-black transition-transform duration-100 hover:scale-[0.9] font-mono">
          Remove
        </button>
        <button
          onClick={() => removeFromCart(id)}
          className="border border-solid border-black px-3
           py-1 rounded-md bg-black text-white hover:bg-amber-400 hover:text-black transition-transform duration-100 hover:scale-[0.9] font-mono">
          -
        </button>
      </div>
      <div className="flex justify-center ml-2 font-bold mt-3">
        <h4 className="font-mono">{cartItems[id]}</h4>
        <span className="ml-1 mr-1">x</span>
        <h4 className="font-mono">${price}</h4>
      </div>
      <hr className="border-black mt-5 h-2 border-t-2" />
    </>
  );
};

export default CartItem;
