import moneyImg from "@/assets/images/svgs/money.svg";
import mapImg from "@/assets/images/svgs/map.svg";
import { Link } from "react-router-dom";

export default function HotelCard({ hotel }) {
  return (
    <div className="block w-full">
      <div className="w-full max-h-[290px] overflow-hidden relative">
        <img
          src={hotel.img}
          alt={hotel.title}
          className="w-full h-full object-cover"
        />
        {hotel.type === "shortlet" && (
          <span className="absolute top-5 right-5 px-2 py-1 rounded-lg border-[1px] border-white bg-pry-clr text-white text-sm">
            Short Let
          </span>
        )}
      </div>
      <h1 className="h-text text-2xl my-4 md:text-4xl">{hotel.title}</h1>
      <div className="flex items-center gap-3 my-2">
        <span className="aspect-square w-[32px] md:w-[42px]">
          <img src={mapImg} alt="" className="w-full h-full object-cover" />
        </span>
        <p className="p-text text-[16px] md:text-[24px]">{hotel.location}</p>
      </div>
      <div className="flex items-center gap-3 my-4">
        <span className="aspect-square w-[32px] md:w-[42px]">
          <img src={moneyImg} alt="" className="w-full h-full object-cover" />
        </span>
        <h3 className="h-text border-b-2 text-3xl">{`NGN${hotel.price}`}</h3>
      </div>
      <Link to={`/hotel/${hotel.id}`} id={"similar hotel - " + hotel.title}>
        <button className="w-3/4 my-4 bg-pry-clr h-text p-3 text-black text-2xl">
          Book Now
        </button>
      </Link>
    </div>
  );
}
