import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";

const ProductCard = ({ name, price, img, id }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="text-center ">
      <div className="text-black border-solid border-amber-400 rounded-xl bg-amber-400 font-bold border-2 p-4 max-w-[275px] mb-10  ml-[190px] mt-8">
        <img src={img} alt="shoe" />
        <p className="mb-3">{name}</p>
        <h1 className="mb-3">${price}</h1>
        <button
          className="border border-solid border-black px-5 py-2 rounded-xl bg-black text-white font-bold hover:bg-stone-900 active:bg-stone-800"
          onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
