import "./hero.css";

import arrow from "../../assets/images/arrow.svg";

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

import { PiForkKnifeBold, PiHandSoapBold } from "react-icons/pi";
import { GiWaxTablet } from "react-icons/gi";
import { RiParkingLine } from "react-icons/ri";

export default function Hero() {
  return (
    <div className="hero w-full pt-[150px] pb-[50px] md:pb-0 md:pt-0 min-h-screen relative flex items-center justify-center flex-col gap-4 text-white px-[4vw] lg:px-[12vw]">
      <h1 className="h-text text-4xl lg:text-6xl text-center">
        Welcome to Twinny Hotel & Suites
      </h1>
      <p className="p-text text-center max-w-[850px] text-md lg:text-2xl">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo con Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo con
      </p>

      <div className="p-7 bg-white bg-opacity-75 backdrop-blur-sm block w-full">
        <div className="w-full text-black mb-5">
          <p className="h-text text-lg md:text-xl mb-2">Apartment Option</p>
          <Select className="w-full flex items-center p-1  bg-white">
            <SelectTrigger className="bg-white rounded-none">
              <SelectValue placeholder="Choose an apartment option" />
            </SelectTrigger>

            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Apartments</SelectLabel>
                <SelectItem
                  value="outdoor_dining"
                  className="hover:bg-gray-100"
                >
                  <span className="flex items-center gap-3">
                    <PiForkKnifeBold />
                    <p className="p-text uppercase">outdoor dining</p>
                  </span>
                </SelectItem>
                <SelectItem value="tuft" className="hover:bg-gray-100">
                  <span className="flex items-center gap-3">
                    <GiWaxTablet />
                    <p className="p-text uppercase">tuft & needle mattresses</p>
                  </span>
                </SelectItem>
                <SelectItem value="malin" className="hover:bg-gray-100">
                  <span className="flex items-center gap-3">
                    <PiHandSoapBold />
                    <p className="p-text uppercase">
                      malin + goetz bath products
                    </p>
                  </span>
                </SelectItem>
                <SelectItem value="parking" className="hover:bg-gray-100">
                  <span className="flex items-center gap-3">
                    <RiParkingLine />
                    <p className="p-text uppercase">parking</p>
                  </span>
                </SelectItem>
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
  );
}
