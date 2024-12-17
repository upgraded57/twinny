import { Link } from "react-router-dom";
import mapImg from "@/assets/images/svgs/map.svg";
import moneyImg from "@/assets/images/svgs/money.svg";

export default function Hotel({ hotel }) {
  return (
    <div className="my-12">
      <div
        className={`px-[4vw] flex flex-col md:flex-row items-stretch gap-8 ${
          hotel.layout === "alt" && "md:flex-row-reverse"
        }`}
      >
        <div className="flex-1 md:basis-1/2 min-h-[full] max-h-[250px] md:max-h-[400px] overflow-hidden relative">
          <img src={hotel.img} alt="" className="w-full h-full object-cover" />
          {hotel.type === "shortlet" && (
            <span className="absolute top-5 right-5 px-2 py-1 rounded-lg border-[1px] border-white bg-pry-clr text-white text-sm">
              Short Let
            </span>
          )}
        </div>
        <div className="flex-1 md:basis-1/2">
          <h2 className="h-text text-3xl lg:text-5xl overflow-hidden text-ellipsis text-nowrap">
            {hotel.title}
          </h2>
          <div className="flex items-center gap-3 my-2">
            <span className="aspect-square w-[32px] md:w-[42px]">
              <img src={mapImg} alt="" className="w-full h-full object-cover" />
            </span>
            <p className="p-text text-[16px] md:text-[24px]">
              {hotel.location}
            </p>
          </div>
          <div className="flex items-center gap-3 my-4">
            <span className="aspect-square w-[32px] md:w-[42px]">
              <img
                src={moneyImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </span>
            <span className="flex items-end">
              <h3 className="h-text border-b-2 text-5xl">{`NGN${hotel.price}`}</h3>
              <h3 className="h-text text-5xl">/</h3>
              <p className="h-text text-lg">Night</p>
            </span>
          </div>

          <Link to={`/hotel/${hotel.id}`}>
            <button type="button" className="py-3 px-6 p-text my-4 bg-pry-clr">
              Book Reservation
            </button>
          </Link>
        </div>
      </div>

      <div
        className={`w-full flex ${
          hotel.layout === "normal" ? "justify-end" : "justify-start"
        } px-[4vw]`}
      >
        <div className="w-full lg:w-[85%] bg-opacity-75 backdrop-blur-md relative lg:-top-[25px] xl:-top-[100px] bg-gray-300 p-4">
          <h2 className="h-text bg-[#5F462C] w-full max-w-[421px] px-4 py-2 text-white text-2xl md:text-3xl">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-4 gap-x-2">
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
    </div>
  );
}
