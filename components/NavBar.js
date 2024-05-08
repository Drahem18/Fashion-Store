"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useShoppingCart } from "@/app/context/ShoppingCartProvider";

function NavBar() {
  const { cartItems } = useShoppingCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-white flex items-center justify-end fixed right-0 left-0 -top-1 z-40 px-4 md:px-0 ">
        <IoIosMenu
          size={25}
          className="mr-4 md:hidden cursor-pointer"
          onClick={toggleMenu}
        />

        <h3 className="uppercase flex-1 font-extrabold text-2xl cursor-pointer mr-auto lg:ml-10 lg:pl-16 md:pl-7 ">
          <Link passHref href={"/"}>
            shop.co
          </Link>
        </h3>
        <div className="flex ml-3 p-8 pl-0 flex-grow-3 md:items-center md:justify-between justify-end">
          <ul
            className={`gap-8 lg:gap-10 md:flex ${
              menuOpen
                ? "flex flex-col bg-black text-white fixed top-20 left-0 w-full p-4"
                : "hidden"
            }`}
          >
            <li className="font-semibold cursor-pointer hover:text-gray-500">
              <div className="categories-content">
                <button className="flex items-center gap-2">
                  Category {menuOpen ? "" : <FaAngleDown />}
                </button>
                <div
                  className={`${
                    menuOpen ? "pt-0 text-white pl-4" : "categories-childrens"
                  } pt-10`}
                >
                  <Link passHref className="links" href="/categories/men">
                    <div
                      className={`${
                        menuOpen
                          ? "py-4 text-white"
                          : "px-10 py-4 hover:bg-primary"
                      }`}
                      onClick={() => setMenuOpen((prev) => !prev)}
                    >
                      Men
                    </div>
                  </Link>
                  <Link passHref className="links" href="/categories/women">
                    <div
                      className={`${
                        menuOpen
                          ? "pt-4 text-white"
                          : "px-10 py-4 hover:bg-primary"
                      }`}
                      onClick={() => setMenuOpen((prev) => !prev)}
                    >
                      Women
                    </div>
                  </Link>
                </div>
              </div>
            </li>
            <li className="font-semibold cursor-pointer hover:text-gray-500">
              <Link
                passHref
                href={"/onsale"}
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                On Sale
              </Link>
            </li>
            <li className="font-semibold cursor-pointer hover:text-gray-500">
              <Link
                passHref
                href={"/newarrival"}
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                New Arrival
              </Link>
            </li>
          </ul>
          <form
            action="#"
            className="hidden md:block md:w-2/5 lg:w-1-2 lg:w-1/2 justify-center relative"
          >
            <IoMdSearch
              size={25}
              className="absolute top-2 left-2 cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-200 w-full rounded-3xl p-2 outline-none pl-12"
            />
          </form>
          <div className="flex">
            <IoMdSearch size={25} className="md:hidden cursor-pointer" />

            <Link href={"../addToCart"}>
              <span className="position-relative relativee ">
                <LuShoppingCart size={25} className="mx-4 cursor-pointer" />
                <div className="position-absolute -top-4 -left-2 bg-red-600 rounded-full w-6 h-6 cart font-bold flex items-center justify-center text-white">
                  {cartItems.length}
                </div>
              </span>
            </Link>
            <IoPersonCircleOutline size={25} className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="bg-gray-700 fixed top-24 left-0 w-full p-4">
          {/* Additional menu items can be placed here */}
        </div>
      )}
    </>
  );
}

export default NavBar;
