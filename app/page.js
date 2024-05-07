import Hero from "@/components/Hero";
import Image from "next/image";

import HappyCustomers from "@/components/HappyCustomers";
import NewArrival from "@/components/NewArrival";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function Home() {
  // console.log("ahmed");
  return (
    // <Provider store={store}>
    <main className=" mt-24 ">
      <Hero />
      <NewArrival />

      <h2 className="md:text-5xl  font- font-bold text-3xl -bold text-center mb-8">
        BROWSE BY dress STYLE
      </h2>

      <div className=" flex md:flex-row flex-col  p-5 md:px-16  flex-nowrap  gap-5 justify-center bg-primary mx-8 rounded-xl md:p-10 mb-44 ">
        <Link
          className="text-4xl font-bold md:w-2/5 overflow-hidden relative rounded-xl h-72 bg-white p-4"
          href={"/categories/women"}
        >
          <div>
            <h2 className="text-4xl font-bold z-10 absolute">Men </h2>
            <Image
              fill
              alt="men image"
              className="object-cover right-6 absolute"
              src={"/image 11.svg"}
            />
          </div>
        </Link>
        <Link
          className="md:w-3/5 rounded-xl bg-white p-4  h-72 relative overflow-hidden"
          href={"/categories/women"}
        >
          <div>
            <h2 className="text-4xl font-bold z-10 absolute ">Women</h2>
            <Image
              fill
              alt="men image"
              className="object-cover right-6 absolute"
              src={"/image 12.svg"}
            />
          </div>
        </Link>
      </div>

      <HappyCustomers />
    </main>
    // </Provider>
  );
}
