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
      <div className=" p-4 gap-4 bg-primary rounded-full inline-flex mt-8">
        <button onClick={handleDecrement} className="text-3xl px-4">
          -
        </button>
        <span className="text-3xl w-3">{counter}</span>
        <button onClick={handleIncrement} className="text-3xl px-4">
          +
        </button>
      </div>
      <button
        onClick={handleOnClick}
        className=" ml-12 font-bold bg-black text-white rounded-full p-4 w-2/3"
      >
        Add To Cart
      </button>
    </>
  );
}

export default Counter;
