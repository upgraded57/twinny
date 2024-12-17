import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Nav from "@/components/nav/Nav";

import ig_logo_gold from "@/assets/images/svgs/ig_gold.svg";
import x_logo_gold from "@/assets/images/svgs/x_gold.svg";
import fb_logo_gold from "@/assets/images/svgs/fb_gold.svg";
import tt_logo_gold from "@/assets/images/svgs/tt_gold.svg";
import Footer from "@/components/footer/Footer";
import { Link } from "react-router-dom";

export default function About() {
  const breadcrumbLinks = [
    { id: 1, location: "/", text: "Home" },
    { id: 2, location: window.location.pathname, text: "About us" },
  ];

  const contactUs = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Nav type={2} />
      <div className="header w-full h-[288px] md:h-[300px] px-[4vw] py-[60px] flex items-end justify-center h-text">
        <h1 className="text-4xl md:text-6xl">About Us</h1>
      </div>
      <div className="px-[4vw] mt-4 mb-12">
        <Breadcrumb links={breadcrumbLinks} />
      </div>

      <div className="block md:flex gap-10 px-[4vw] mb-[100px]">
        <div className="basis-1/2">
          <h1 className="w-full p-3 mb-3 md:mb-6 h-text text-xl md:text-3xl bg-[#5F462C] text-white">
            About Twinny Suites
          </h1>
          <p className="p-text">
            Twinny Hotel and Suites is a comfortable and affordable hotel
            located in Ejigbo, close to Ajao Estate, Oshodi-Isolo, Lagos,
            offering modern and high-quality accommodations for both business
            and leisure travellers. We provide affordable luxury, making us a
            top choice for travellers looking for hotels close to Lagos airport.
            Being one of the finest hotels in Oshodi-Isolo, our well-furnished
            rooms, excellent customer service, and relaxing atmosphere make us
            one of the best and most affordable hotels in Ajao Estate. If you're
            searching for hotels near Murtala Muhammed International Airport
            Lagos, our hotel and restaurant is just 15 minutes away
          </p>

          <div className="mt-[100px]">
            <h5 className="h-text">To reach us</h5>
            <div className="flex gap-6 mt-4 items-center">
              <Link to="https://www.instagram.com/twinny_hotel_and_suites/">
                <img
                  src={ig_logo_gold}
                  alt="Instagram"
                  className="w-[26px] md:w-[54px]"
                />
              </Link>

              <Link to="https://web.facebook.com/profile.php?id=61564680452916">
                <img
                  src={fb_logo_gold}
                  alt="Facebook"
                  className="w-[26px] md:w-[54px]"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="my-10 md:mt-0 basis-1/2 p-5 bg-gray-200">
          <h1 className="h-text text-center text-2xl md:text-4xl mb-4">
            Contact Us
          </h1>

          <form onSubmit={contactUs}>
            <div className="my-8">
              <label htmlFor="full_name">
                <p className="h-text text-lg md:text-xl">Full Name</p>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  required
                  className="w-full p-3 bg-white p-text"
                />
              </label>
            </div>
            <div className="my-8">
              <label htmlFor="email">
                <p className="h-text text-lg md:text-xl">Email</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full p-3 bg-white p-text"
                />
              </label>
            </div>
            <div className="mt-8 mb-4">
              <label htmlFor="message">
                <p className="h-text text-lg md:text-xl">Message</p>
                <textarea
                  rows={6}
                  name="message"
                  id="message"
                  required
                  className="w-full p-3 bg-white p-text resize-none"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-pry-clr p-text text-black text-lg p-3"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
