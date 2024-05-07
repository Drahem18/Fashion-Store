import React from "react";
import { FaFacebook } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <>
      <footer className="relative mt-52">
        <div className="grid md:grid-cols-2 grid-cols-1 w-5/6   absolute  bg-black text-white rounded-lg p-7 items-center footer-black">
          <h2 className="text-white md:text-4xl text-3xl mb-2">
            STAY UPTODATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col relative md:ml-36  items-center">
            <CiMail size={20} className="absolute text-black iconne left-3" />

            <input
              type="text"
              placeholder="Enter your email address"
              className=" rounded-full pl-10  bg-white text-black w-full p-2 mb-4 "
            />
            <button className="border rounded-full bg-white text-black w-full p-2">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
        <div className="pb-8 px-20 bg-primary pt-60 md:pt-40  border-b w-full linee">
          <div className="grid md:grid-cols-6 grid-cols-2  gap-8 ">
            <div className="flex flex-col flex-wrap col-span-2">
              {" "}
              <h2 className="text-2xl font-bold mb-6">SHOP.CO</h2>
              <p className="w-64 text-black-rgba">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex mt-10 gap-3">
                <a href="#">
                  <FaFacebook size={30} />
                </a>
                <a href="#">
                  <AiFillTwitterCircle size={30} />
                </a>
                <a href="#">
                  <FaInstagram size={30} />
                </a>{" "}
                <a href="#">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between ">
              <h2 className="font-bold text-base mb-6">Company</h2>

              <p className="mb-6 text-black-rgba">
                <a href="#">about</a>
              </p>

              <p className="mb-6 text-black-rgba">
                <a href="#">features</a>
              </p>

              <p className="mb-6 text-black-rgba">
                <a href="#">work</a>
              </p>

              <p className="mb-6 text-black-rgba">
                <a href="#">career </a>
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-base mb-6">Help</h2>

              <p className="mb-6 text-black-rgba">
                <a href="#">Customer Support</a>
              </p>

              <p className="mb-6 text-black-rgba">
                <a href="#">Delivery Details</a>
              </p>

              <p className="mb-6 text-black-rgba">
                <a href="#">Terms & Conditions</a>
              </p>

              <p className="mb-6 text-black-rgba">
                <a href="#">Privacy Policy</a>
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-base mb-6">
                <a href="#">FAQ</a>
              </h2>

              <p className="mb-6 text-black-rgba">
                <a href="#">Account </a>
              </p>

              <p className="mb-6 text-black-rgba">
                <a href="#">Manage Deliveries</a>
              </p>

              <p className="mb-6 text-black-rgba">
                {" "}
                <a href="#"> Orders </a>
              </p>

              <p className="mb-6 text-black-rgba">
                {" "}
                <a href="#">Payments</a>
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-base mb-6">Resources</h2>

              <p className="mb-6 text-black-rgba">
                {" "}
                <a href="#">Free eBooks </a>
              </p>

              <p className="mb-6 text-black-rgba">
                {" "}
                <a href="#">Development Tutorial</a>
              </p>

              <p className="mb-6 text-black-rgba">
                {" "}
                <a href="#">How to - Blog </a>
              </p>

              <p className="mb-6 text-black-rgba">
                {" "}
                <a href="#">Youtube Playlist </a>
              </p>
            </div>
          </div>

          <div className="linee"></div>
        </div>
      </footer>{" "}
    </>
  );
}

export default Footer;
