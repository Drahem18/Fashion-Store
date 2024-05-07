import Counter from "@/components/Counter";
import Image from "next/image";

import { FaStar } from "react-icons/fa";

import * as React from "react";
import * as ReactDOM from "react-dom";
import Rating from "@mui/material/Rating";
import { useShoppingCart } from "@/app/context/ShoppingCartProvider";

async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }) {
  const { id } = params;
  const data = await getData(id);
  console.log(data);

  return (
    <div className="flex mt-28 px-28 gap-4">
      <div className="w-1/2 h-80 relative">
        <Image
          className="object-contain"
          src={data.image}
          fill
          alt="Picture"
          priority
          sizes="100%"
        />
      </div>
      <div className="pt-12">
        <h2 className="font-bold text-4xl">{data.title}</h2>
        <div className="flex gap-4">
          <Rating
            name="half-rating-read"
            defaultValue={data.rating.rate}
            precision={0.1}
            readOnly
          />
          <span className="font-semibold">{data.rating.rate} / 5</span>
        </div>
        {/* <div>
          rating: {data.rating.rate}{" "}
          <FaStar className="text-yellow-400 inline" /> */}
        {/* </div> */}
        <div className="text-3xl font-bold mt-4">{"$" + data.price}</div>
        <div className="mt-4">{data.description}</div>
        <Counter id={data.id} />
      </div>
    </div>
  );
}
