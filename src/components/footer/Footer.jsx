import logo from "../../assets/images/svgs/logo_black.svg";
import callImg from "../../assets/images/svgs/call.svg";
import mailImg from "../../assets/images/svgs/mail.svg";
import pinImg from "../../assets/images/svgs/pin.svg";
import { Link } from "react-router-dom";

import fb_logo from "@/assets/images/svgs/fb_black.svg";
import ig_logo from "@/assets/images/svgs/ig_black.svg";

export default function Footer({ address, number }) {
  return (
    <footer className="px-[4vw] bg-pry-clr text-black py-10">
      <div className="flex justify-center border-b-[1px] border-black pb-8">
        <img src={logo} alt="" className="w-[170px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-10 text-center md:text-left  border-b-[1px] border-black">
        <div className="flex gap-2 flex-col items-center md:items-start">
          <img src={callImg} alt="Call" className="h-[28px]" />
          <Link to={`tel:${number || "2348140778877"}`} className="p-text">
            {number || "0814 077 8877"}
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="https://www.instagram.com/twinny_hotel_and_suites/"
              target="_blank"
            >
              <img src={ig_logo} alt="Instagram" className="w-[26px]" />
            </Link>
            <Link
              to="https://web.facebook.com/profile.php?id=61564680452916"
              target="_blank"
            >
              <img src={fb_logo} alt="Facebook" className="w-[26px]" />
            </Link>
          </div>
        </div>
        <div className="flex gap-2 flex-col items-center md:items-start">
          <img src={mailImg} alt="Call" className="h-[28px]" />
          <p className="p-text">hello@twinnyhotelandsuites.com</p>
          <p className="p-text">abiodun@twinnyhotelandsuites.com</p>
        </div>
        <div className="flex gap-2 flex-col items-center md:items-start">
          <img src={pinImg} alt="Call" className="h-[28px]" />
          <p className="p-text max-w-[300px]">
            {address ||
              "Ramoni Jimoh St, beside Bokku Mart, Ejigbo, Ikeja 100264, Lagos"}
          </p>
        </div>
      </div>
      <p className="h-text text-center pt-8">
        Twinny Suites - © 2024 All Rights Reserved. Official Website of Twinny
        Suites.
      </p>
    </footer>
  );
}
