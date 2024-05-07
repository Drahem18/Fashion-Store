import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function truncateTitle(title, maxLength) {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
}

function Card({ img, price, id, title, href = "#", sale, rating }) {
  return (
    <Link
      passHref
      href={"/product/" + id}
      className="w-full relative"
      key={id}
      style={{ position: "relative" }}
    >
      <div className="relative h-72 inheritt mb-10 w-full">
        <Image
          src={img}
          className="card-img"
          alt="image"
          fill
          sizes="100%"
          priority={true}
        />
      </div>
      <h3 className="px-4 text-xl font-bold ">{truncateTitle(title, 20)}</h3>
      <div className="flex gap-4 pl-4 mt-4">
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.1}
          readOnly
        />
        <span className="font-semibold">{rating} / 5</span>
      </div>
      <h3 className="px-4 text-2xl font-bold mt-4">
        {sale ? (
          <>
            <span>{Number(price - (price * sale) / 100).toFixed(2)}</span>
            <del className="text-gray-400 ml-8">{"$" + price}</del>
          </>
        ) : (
          "$" + price
        )}
      </h3>
    </Link>
  );
}

export default Card;
