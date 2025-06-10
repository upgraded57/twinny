// shadcn ui component
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { hotelsData } from "@/assets/temp/Data";
import { useState } from "react";

export default function Hero() {
  const [booking, setBooking] = useState({
    apartment: "",
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

  return (
    <div className="hero w-full pt-[150px] pb-[50px] md:pb-0 md:pt-0 min-h-screen relative flex items-center justify-center flex-col gap-4 text-white px-[4vw] lg:px-[12vw]">
      <h1 className="h-text text-4xl lg:text-6xl text-center">
        Welcome to Twinny Hotel & Suites
      </h1>
      <p className="p-text text-center max-w-[850px] text-md lg:text-2xl">
        Twinny Hotel and Suites is a comfortable and affordable hotel located in
        Ejigbo, close to Ajao Estate, Oshodi-Isolo, Lagos, offering modern and
        high-quality accommodations for both business and leisure travellers. We
        provide affordable luxury, making us a top choice for travellers looking
        for hotels close to Lagos airport.
      </p>

      <div className="p-7 bg-white bg-opacity-75 backdrop-blur-sm block w-full">
        <div className="w-full text-black mb-5">
          <p className="h-text text-lg md:text-xl mb-2">Apartment Option</p>
          <Select
            className="w-full flex items-center p-1 bg-white"
            onValueChange={(value) =>
              setBooking((prev) => ({
                ...prev,
                apartment: value,
              }))
            }
          >
            <SelectTrigger className="bg-white rounded-none">
              <SelectValue placeholder="Choose an apartment option" />
            </SelectTrigger>

            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Apartments</SelectLabel>

                {hotelsData.map((hotel, idx) => (
                  <SelectItem
                    key={idx}
                    value={hotel.title}
                    className="hover:bg-gray-100"
                  >
                    <p className="p-text uppercase">
                      {hotel.title} {`(${hotel.type})`} - NGN{hotel.price}
                    </p>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

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
                className="w-full flex items-center p-1 bg-white"
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

                    {[1, 2, 3, 4].map((num, idx) => (
                      <SelectItem
                        key={idx}
                        value={num}
                        className="hover:bg-gray-100"
                      >
                        <p className="p-text uppercase">{num}</p>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <button
            className="basis-2/12 pry-bg h-text p-3 md:p-5"
            onClick={handleBooking}
            id={`Apartment - ${booking.apartment} check in - ${booking.checkIn} checkout - ${booking.checkOut} guests - ${booking.guests}`}
          >
            Book Reservations
          </button>
        </div>
      </div>
    </div>
  );
}
