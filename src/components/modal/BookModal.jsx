import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiWhatsappFill } from "react-icons/ri";

import { useState } from "react";
export default function BookModal({ isOpen, setIsOpen, hotel }) {
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
      window.location = hotel.negotiable
        ? `https://wa.me/2349032303758?text=${text}`
        : hotel.type === "shortlet"
        ? `https://wa.me/2348031557429?text=${text}`
        : `https://wa.me/2348140778877?text=${text}`;
    } else {
      alert("Please fill in all the reservation data to book a reservation");
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild />
      <DialogContent className="bg-white bg-opacity-50 backdrop-blur-md max-w-[380px]">
        <DialogHeader>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>

        <div className="w-full flex flex-col gap-4 text-black">
          <div className="">
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
          <div className="">
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
          <div className="">
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
          id={`book hotel - ${hotel.title}`}
            className=" pry-bg h-text p-3 md:p-5 flex items-center gap-3 justify-center font-semibold"
            onClick={handleBooking}
          >
            <RiWhatsappFill className="text-xl" />
            Book Reservations
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
