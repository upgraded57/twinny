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
      <div className="bg-black py-12">
        <div className="max-w-[850px] px-[4vw] flex items-center text-center mx-auto flex-col gap-5">
          <h1 className="h-text text-3xl lg:text-5xl text-white">
            About Twinny Hotel & Suites
          </h1>
          <p className="p-text text-white text-md lg:text-2xl">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </p>

          <Link
            to="/about"
            type="button"
            className="w-full max-w-[600px] p-3 border border-[#f38120] text-[#f38120] hover:bg-[#f38120] hover:text-black transition-colors"
          >
            Know More
          </Link>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center h-text text-3xl lg:text-6xl mb-10">
          Our Hotels/Shortlets
        </h1>
        {hotelsData.map((hotel) => (
          <Link to={`/hotel/${hotel.id}`}>
            <Hotel hotel={hotel} key={hotel.id} />
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
