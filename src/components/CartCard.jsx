import React, { useContext } from "react";
import data from "../data";
import { ShopContext } from "../context/ShopContextProvider";
import CartItem from "../pages/cartItem";
import { useNavigate } from "react-router-dom";

const CartCard = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="ml-[10%] mt-5 max-w-[1500px] border border-black rounded-xl p-5 shadow-inner sm:mr-5">
      <div>
        <h1 className="text-black font-bold text-5xl flex justify-center mt-2 mb-2 ">Your Items</h1>
      </div>
      <div className="px-10">
        {data.map((data) => {
          if (cartItems[data.id] !== 0) {
            return <CartItem key={data.id} id={data.id} {...data} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="ml-10">
          <p className="font-mono text-3xl mt-5">SubTotal: ${totalAmount.toFixed(2)}</p>
          <button
            onClick={() => navigate("/products")}
            className="border border-solid border-black px-5
           py-2 rounded-xl bg-black text-white hover:bg-amber-400 hover:text-black transition-transform duration-100 mt-5 mr-[80%]
            hover:scale-[0.9] sm:mb-3">
            Continue
          </button>
          <button
            className="border border-solid border-black px-5
           py-2 rounded-xl bg-black text-white hover:bg-amber-400 hover:text-black transition-transform duration-100 hover:scale-[0.9]">
            Checkout
          </button>
        </div>
      ) : (
        <h1 className="font-mono font-bold text-3xl flex justify-center mt-5">
          Your Cart is Empty...
        </h1>
      )}
    </div>
  );
};

export default CartCard;
