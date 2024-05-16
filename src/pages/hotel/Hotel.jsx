import "./hotel.css";
import Footer from "@/components/footer/Footer";
import { hotelsData } from "@/assets/temp/Data";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Nav from "@/components/nav/Nav";

import mapImg from "@/assets/images/map.svg";
import callImg from "@/assets/images/reserve.svg";

import arrow from "@/assets/images/arrow.svg";

import HotelCard from "@/components/hotelcard/HotelCard";
import { useParams } from "react-router-dom";

export default function Hotel() {
  const { hotel_id } = useParams();
  const hotel = hotelsData[hotel_id - 1];

  const hotelCards = [hotelsData[1], hotelsData[2]];

  console.log(hotel);

  const breadcrumbLinks = [
    { id: 1, location: "/", text: "Home" },
    { id: 2, location: window.location.pathname, text: hotel.title },
  ];

  return (
    <>
      <Nav type={2} />
      <div className="header w-full h-[288px] md:h-[300px] px-[4vw] py-[60px] flex items-end justify-center h-text">
        <h1 className="text-4xl md:text-6xl">{hotel.title}</h1>
      </div>
      <div className="px-[4vw] mt-4 mb-12">
        <Breadcrumb links={breadcrumbLinks} />
      </div>

      <div className="px-[4vw] md:flex gap-8 items-start">
        <div className="basis-1/2">
          <div className="w-full">
            <img
              src={hotel.images[0]}
              alt="Image"
              className="min-w-full object-cover"
            />
          </div>
        </div>

        <div className="basis-1/2 mt-2 md:mt-0">
          <h1 className="w-full p-3 mb-3 md:mb-6 h-text text-left md:text-center text-xl md:text-3xl bg-[#5F462C] text-white">
            {hotel.title}
          </h1>
          <h1 className="h-text text-3xl md:text-5xl w-max border-b-2 border-black">{`NGN${hotel.price}`}</h1>
          <div className="flex items-center gap-3 my-4">
            <span className="aspect-square min-w-[32px] md:min-w-[42px]">
              <img src={mapImg} alt="" className="w-full h-full object-cover" />
            </span>
            <p className="p-text text-[16px] md:text-[24px]">
              {hotel.location}
            </p>
          </div>
          <div className="flex items-center gap-3 my-4">
            <span className="aspect-square min-w-[32px] md:min-w-[42px]">
              <img
                src={callImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </span>
            <p className="p-text text-[16px] md:text-[24px]">07042607645</p>
          </div>
          <button
            type="button"
            className="w-3/4 my-4 bg-[#F38120] h-text p-3 text-black text-2xl"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="my-10 md:py-10 px-[4vw]">
        <div className="bg-gray-200 md:bg-transparent px-[4vw] py-[4vw] md:py-0">
          <h1 className="h-text text-2xl md:text-3xl text-white bg-[#5F462C] text-left md:text-center max-w-[420px] mx-auto p-3">
            Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-4">
            {hotel.features.map((feature, idx) => (
              <div key={idx} className="flex gap-3 items-center my-2">
                <span className="aspect-square w-[32px] md:w-[42px]">
                  <img src={feature.icon} alt={feature.text} />
                </span>
                <p className="p-text text-[16px] md:text-2xl">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-[4vw] md:px-[8vw]">
        <div className="p-7 bg-gray-200 bg-opacity-75 backdrop-blur-sm block w-full">
          <div className="w-full flex flex-col md:flex-row md:items-end gap-4 text-black">
            <div className="basis-4/12">
              <p className="h-text text-lg md:text-xl mb-2">Check In</p>
              <div className="w-full flex p-2  bg-white">
                <span className="w-full">
                  <input
                    type="date"
                    name="check_in"
                    className="w-full p-text outline-none bg-white"
                  />
                </span>
              </div>
            </div>
            <div className="basis-4/12">
              <p className="h-text text-lg md:text-xl mb-2">Check Out</p>
              <div className="w-full p-2 bg-white">
                <span className="w-full">
                  <input
                    type="date"
                    name="check_out"
                    className="w-full p-text outline-none bg-white"
                  />
                </span>
              </div>
            </div>
            <div className="basis-2/12">
              <p className="h-text text-lg md:text-xl mb-2">No of Guests</p>
              <div className="w-full flex items-center p-1 justify-between bg-white">
                <span></span>
                <span className="flex items-center justify-center border-l-2 border-gray-300 w-[32px] aspect-square">
                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>

            <button className="basis-2/12 pry-bg h-text p-3 md:p-5">
              Book Reservations
            </button>
          </div>
        </div>
      </div>

      <div className="px-[4vw] my-10 pb-10">
        <h1 className="h-text text-3xl md:text-4xl text-center py-10">
          View Others
        </h1>
        <div className="flex flex-col md:flex-row gap-10 md:items-center">
          {hotelCards.map((hotel) => (
            <HotelCard hotel={hotel} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
