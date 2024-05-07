"use client";

import windowSize from "../Functions/windowSize";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";

function HappyCustomers() {
  const isSmallScreen = windowSize();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: 1,
  };
  return (
    <div className=" mx-24 mb-40 ">
      <h2 className="md:text-5xl font-bold text-3xl ">OUR HAPPY CUSTOMERS</h2>
      <Slider {...settings} className="flex gap-5">
        <div className=" rounded-lg border p-4 mt-10 ">
          <div className="flex my-5">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <h2 className="text-xl font-bold">Alex K.</h2>
          <p className=" font-normal">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
        <div className=" rounded-lg border p-4 mt-10 ">
          <div className="flex my-5">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <h2 className="text-xl font-bold">James L.</h2>
          <p className=" font-normal">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
        <div className=" rounded-lg border p-4 mt-10 ">
          <div className="flex my-5">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <h2 className="text-xl font-bold">Mooen</h2>
          <p className=" font-normal">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
        <div className=" rounded-lg border p-4 mt-10 ">
          <div className="flex my-5">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
          <h2 className="text-xl font-bold">Sarah M.</h2>
          <p className=" font-normal">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default HappyCustomers;
