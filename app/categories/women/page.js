"use client";
import Card from "@/components/Card";
import Link from "next/link";
import React, { useEffect, useState } from "react";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;
}

function page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const filteredItems = data.filter((el) => el.category === "women's clothing");

  return (
    <div className="px-24 mt-28">
      <h2 className="text-4xl font-bold mb-8">Women's Clothing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredItems.map((item) => {
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
    </div>
  );
}

export default page;
