"use client";
import Image from "next/image";
import windowSize from "../Functions/windowSize";

export default function Hero() {
  const isSmallScreen = windowSize();
  return (
    <>
      <div className="flex  md:px-24 md:pr-1  md:py-0 pt-12 bg-photo flex-wrap md:flex-nowrap ">
        <div className="flex flex-col px-4 justify-center w-full">
          <h2 className="md:text-6xl text-4xl font-bold w-5/6  ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>

          <p className="mt-5 text-black-rgba">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="flex justify-center">
            <button className="bg-gray-950 text-white md:px-5 p-4 rounded-full  mt-5 hover:scale-110 text-xl transform transition duration-300 w-1/2">
              Shop Now
            </button>
          </div>

          <div className=" flex  flex-wrap justify-around">
            <div className="mt-10  relative ">
              <p className="text-4xl font-semibold ">200+</p>
              <p className="text-base line  text-black-rgba ">
                International Brands
              </p>
            </div>

            <div className=" mt-10  relative  self-end ">
              <p className="text-4xl font-semibold">2,000+</p>
              <p
                className={
                  "text-base  " +
                  (isSmallScreen ? "" : "line") +
                  " text-black-rgba "
                }
              >
                High-Quality Products
              </p>
            </div>

            <div className="mt-10  relative  ">
              <p className="text-4xl font-semibold">30,000+</p>
              <p className="text-base text-black-rgba ">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative ">
          <Image
            className="z-10  absolute star-2 "
            src={"/Vector.png"}
            alt="Star image"
            width={isSmallScreen ? 76 : 104}
            height={isSmallScreen ? 76 : 104}
          />

          <Image
            className="z-10  absolute star-1 "
            src={"/Vector.png"}
            alt="Star image"
            width={isSmallScreen ? 44 : 56}
            height={isSmallScreen ? 44 : 56}
          />

          <div className="relative rectangle h-screen">
            <Image
              priority={true}
              className=" object-cover  -left-8"
              src={"/Rectangle 2 (2).jpg"}
              alt="Hero image"
              fill={true}
              sizes="100vw, (min-width: 768px) 200px"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-black relative flex flex-wrap gap-5 justify-around  p-6  ">
        <div
          className={"relative   " + (isSmallScreen ? "w-16 h-7" : "w-40 h-14")}
        >
          <Image src={"/Group (1).svg"} alt="group" fill className="z-30" />
        </div>
        <div
          className={"relative   " + (isSmallScreen ? "w-16 h-7" : "w-40 h-14")}
        >
          <Image src={"/Group.svg"} alt="group" fill className="z-30" />
        </div>
        <div
          className={"relative   " + (isSmallScreen ? "w-16 h-7" : "w-40 h-14")}
        >
          <Image
            src={"/gucci-logo-1 1.svg"}
            alt="group"
            fill
            className="z-30 text-center"
          />
        </div>
        <div
          className={"relative   " + (isSmallScreen ? "w-16 h-7" : "w-40 h-14")}
        >
          <Image
            src={"/prada-logo-1 1.svg"}
            alt="group"
            fill
            className="z-30"
          />
        </div>
        <div
          className={"relative   " + (isSmallScreen ? "w-16 h-7" : "w-40 h-14")}
        >
          <Image src={"/zara-logo-1 1.svg"} alt="group" fill className="z-30" />
        </div>
      </div>
    </>
  );
}
