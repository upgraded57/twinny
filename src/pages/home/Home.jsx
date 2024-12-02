import Hotel from "@/Hotel";
import { hotelsData } from "@/assets/temp/Data";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/nav/Nav";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Nav type={1} />
      <Hero />
      <div className="bg-black py-12 mb-10">
        <div className="max-w-[850px] px-[4vw] flex items-center text-center mx-auto flex-col gap-5">
          <h1 className="h-text text-3xl lg:text-5xl text-white">
            About Twinny Hotel & Suites
          </h1>
          <p className="p-text text-white text-md lg:text-2xl">
            We provide affordable luxury, making us a top choice for travellers
            looking for hotels close to Lagos airport. Being one of the finest
            hotels in Oshodi-Isolo, our well-furnished rooms, excellent customer
            service, and relaxing atmosphere make us one of the best and most
            affordable hotels in Ajao Estate.
          </p>

          <Link
            to="/about"
            type="button"
            className="w-full max-w-[600px] p-3 border border-pry-clr text-pry-clr hover:bg-pry-clr hover:text-black transition-colors"
          >
            Know More
          </Link>
        </div>
      </div>

      <div className=" pt-10">
        <h1 className="text-center h-text text-3xl lg:text-6xl my-10">
          Our Hotels/Shortlets
        </h1>
        {hotelsData.map((hotel, idx) => (
          <Hotel hotel={hotel} key={idx} />
        ))}
      </div>

      <Footer />
    </>
  );
}
