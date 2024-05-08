"use client";
import { useShoppingCart } from "@/app/context/ShoppingCartProvider";
import React, { useState } from "react";

function Counter({ id }) {
  const { addToCart, cartItems } = useShoppingCart();
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(() => counter + 1);
  };
  const handleDecrement = () => {
    setCounter(() => (counter > 0 ? counter - 1 : 0));
  };

  const handleOnClick = () => {
    addToCart(id, counter);
    console.log(cartItems);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row mt-8 justify-around">
        <div className=" md:p-4 gap-4 bg-primary rounded-full flex justify-around ">
          <button onClick={handleDecrement} className="text-3xl px-4">
            -
          </button>
          <span className="text-3xl ">{counter}</span>
          <button onClick={handleIncrement} className="text-3xl px-4">
            +
          </button>
        </div>
        <button
          onClick={handleOnClick}
          className="  font-bold bg-black py-2 text-white rounded-full md:px-4 md:w-3/5 mt-4 "
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default Counter;
