"use client";
import React, { useContext, useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

function Page() {
  const [data, setData] = useState(null);
  const { cartItems, increaseQuantity, decreaseQuantity } = useShoppingCart();
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  const handleIncrement = (id) => {
    increaseQuantity(id);
  };

  const handleDecrement = (id) => {
    decreaseQuantity(id);
  };

  const filteredData = data?.filter((item) =>
    cartItems.some((cartItem) => cartItem.id === item.id)
  );

  // Calculate the total price
  useEffect(() => {
    let totalPrice = 0;
    if (data) {
      // Check if data exists
      cartItems.forEach((item) => {
        const product = data.find((product) => product.id === item.id);
        if (product) {
          totalPrice += product.price * item.quantity;
        }
      });
    }
    setTotalPrice(totalPrice);
  }, [cartItems, data]);

  return (
    <div className="mt-36 flex flex-col md:flex-row gap-4 px-24">
      <div className="md:w-7/12 border-gray-200 rounded-2xl border p-7 px-0">
        {cartItems.length === 0 && (
          <h3 className="ml-8 text-4xl font-bold ">Cart Is Empty!</h3>
        )}
        {filteredData ? (
          filteredData.map((item) => {
            const quantity = cartItems.find(
              (cartItem) => cartItem.id === item.id
            );
            return (
              <div
                key={item.id}
                className="flex  flex-col md:flex-row mt-8 items-center"
              >
                <div className="md:w-2/12 h-20 relative w-full mb-8">
                  <Image
                    src={item.image}
                    className="object-contain"
                    alt="image"
                    fill
                    sizes="100%"
                    priority={true}
                  />
                </div>
                <div className="pl-4 md:pl-0">
                  <p>{item.title}</p>
                  <p className="mt-3">${item.price}</p>
                </div>
                <div className=" md:flex-1 md:relative bottom-0">
                  <div className=" p-1 gap-4 bg-primary rounded-full inline-flex mt-8 md:absolute md:right-8 md:bottom-2 ">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="text-3xl px-4"
                    >
                      -
                    </button>
                    <span className="text-3xl w-3">{quantity.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="text-3xl px-4"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className="md:w-5/12 border-gray-200 rounded-2xl border p-7 px-0">
        <h3 className="ml-8 text-2xl font-bold">Order Summary</h3>

        <div className="flex justify-between items-center mt-4">
          <h3 className="ml-8 text-xl font-medium colorr">Subtotal</h3>
          <p className="mr-8 text-xl font-bold">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="ml-8 text-xl font-medium colorr">Discount (-30%)</h3>
          <p className="mr-8 text-xl font-bold text-red-500">
            -${((totalPrice * 30) / 100).toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h3 className="ml-8 text-xl font-medium colorr">Delivery Fees</h3>
          <p className="mr-8 text-xl font-bold">$15</p>
        </div>
        <div className="flex justify-center mt-5">
          <div className="bg-slate-300 w-11/12 heightt "></div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="ml-8 text-xl font-medium colorr">Total</h3>
          <p className="mr-8 text-xl font-bold">
            $
            {(
              totalPrice.toFixed(2) -
              ((totalPrice * 30) / 100).toFixed(2) +
              15
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
