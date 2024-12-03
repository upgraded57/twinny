import Footer from "@/components/footer/Footer";
import { hotelsData } from "@/assets/temp/Data";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Nav from "@/components/nav/Nav";

import mapImg from "@/assets/images/svgs/map.svg";
import callImg from "@/assets/images/svgs/reserve.svg";
import Viewer from "react-viewer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import HotelCard from "@/components/hotelcard/HotelCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { images } from "@/assets/images/images";
import { Button } from "@/components/ui/button";

export default function Hotel() {
  const { hotel_id } = useParams();
  const hotel = hotelsData[hotel_id - 1];

  const [visible, setVisible] = useState(false);

  const hotelCards = [
    hotelsData[Math.floor(Math.random() * 5)],
    hotelsData[Math.floor(Math.random() * 5)],
  ];

  const breadcrumbLinks = [
    { id: 1, location: "/", text: "Home" },
    { id: 2, location: window.location.pathname, text: hotel.title },
  ];

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hotel_id]);

  const [booking, setBooking] = useState({
    apartment: hotel.title,
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleBooking = () => {
    if (
      booking.apartment &&
      booking.checkIn &&
      booking.checkOut &&
      booking.guests
    ) {
      const text = `Hi, I want to book a reservation for the apartment - *${booking.apartment}*. 
      I will be checking in on - *${booking.checkIn}* and checking out on - *${booking.checkOut}*. 
      Number of guests is - *${booking.guests}*`;
      window.location = `https://wa.me/2348140778877?text=${text}`;
    } else {
      alert("Please fill in all the reservation data to book a reservation");
    }
  };

  const imagesArray = images.filter((img) => img.id === hotel.id);
  const viewerImgs = imagesArray[0].items.map((img) => ({
    src: img,
    alt: "",
  }));

  const scrollToBookNow = () => {
    const bookNowDiv = document.getElementById("book_now");
    if (bookNowDiv) {
      bookNowDiv.scrollIntoView();
    }
  };

  return (
    <>
      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        images={viewerImgs}
        rotatable={false}
        defaultScale={1.5}
        noImgDetails={true}
        zoomSpeed={0.5}
        drag={true}
      />
      <Nav type={2} />
      <div className="header w-full h-auto md:h-[300px] px-[4vw] py-10 flex items-end justify-center h-text">
        <h1 className="text-4xl pt-16 md:text-6xl">{hotel.title}</h1>
      </div>
      <div className="px-[4vw] mt-4 mb-12">
        <Breadcrumb links={breadcrumbLinks} />
      </div>

      <div className="px-[4vw] md:flex gap-8 items-start">
        <div className="basis-1/2">
          <div className="w-full overflow-hidden">
            <div className="md:hidden">
              <Carousel>
                <CarouselContent className="w-full h-full gap-2">
                  {hotel.images.slice(0, 4).map((image, idx) => (
                    <CarouselItem className="basis-[93%]" key={idx}>
                      <img
                        src={image}
                        alt="Image"
                        className="min-w-full h-[290px] object-cover cursor-pointer"
                        onClick={() => setVisible(true)}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
              <CarouselNext /> */}
              </Carousel>
            </div>

            <div className="hidden w-full md:grid grid-cols-2 gap-5">
              {hotel.images.slice(0, 4).map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt="Image"
                  className={`min-w-full min-h-full object-cover cursor-pointer grid-${
                    idx + 1
                  }`}
                  onClick={() => setVisible(true)}
                />
              ))}
            </div>
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
            <p className="p-text text-[16px] md:text-[24px]">0814 077 8877</p>
          </div>

          <Button
            type="button"
            className="w-3/4 my-4 bg-pry-clr h-text p-3 rounded-none h-[60px] text-center text-black text-2xl"
            onClick={scrollToBookNow}
          >
            Book Now
          </Button>
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

      <div className="px-[4vw] md:px-[8vw]" id="book_now">
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
                    min={today}
                    onChange={(e) =>
                      setBooking((prev) => ({
                        ...prev,
                        checkIn: e.target.value,
                      }))
                    }
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
                    min={today}
                    onChange={(e) =>
                      setBooking((prev) => ({
                        ...prev,
                        checkOut: e.target.value,
                      }))
                    }
                  />
                </span>
              </div>
            </div>
            <div className="basis-2/12">
              <p className="h-text text-lg md:text-xl mb-2">No of Guests</p>
              <div className="w-full bg-white">
                <Select
                  className="w-full flex items-center bg-white"
                  onValueChange={(value) =>
                    setBooking((prev) => ({
                      ...prev,
                      guests: value.toString(),
                    }))
                  }
                >
                  <SelectTrigger className="bg-white rounded-none">
                    <SelectValue placeholder="" />
                  </SelectTrigger>

                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectLabel>Guests</SelectLabel>

                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                        (num, idx) => (
                          <SelectItem
                            key={idx}
                            value={num}
                            className="hover:bg-gray-100"
                          >
                            <p className="p-text uppercase">{num}</p>
                          </SelectItem>
                        )
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <button
              className="basis-2/12 pry-bg h-text p-3 md:p-5"
              onClick={handleBooking}
            >
              Book Reservations
            </button>
          </div>
        </div>
      </div>

      <div className="px-[4vw] my-10 pb-10">
        <h1 className="h-text text-3xl md:text-4xl text-center py-10">
          View Others
        </h1>
        <div className="flex flex-col md:flex-row gap-10 md:items-stretch">
          {hotelCards.map((hotel, idx) => (
            <div className="basis-1/2 w-full" key={idx}>
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
