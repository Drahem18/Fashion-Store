"use client";
import React from "react";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4");
  const data = await res.json();

  return data;
}

function NewArrival() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="new-arrival my-20 ">
        <h2 className="text-center md:text-5xl font-bold text-3xl  mb-32">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-24">
          {" "}
          {data.map((item) => {
            return (
              <Card
                rating={item.rating.rate}
                key={item.id}
                img={item.image}
                price={item.price}
                id={item.id}
                title={item.title}
              />
            );
          })}
        </div>
        <div className="w-full flex justify-center">
          <Link href={"../newarrival"} passHref>
            {" "}
            <button className="white text-black p-5 rounded-full px-24   hover:scale-110 text-xl transform transition duration-300 border mt-12 ">
              view all
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
