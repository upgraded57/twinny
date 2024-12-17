import logo from "@/assets/images/svgs/logo.svg";
import fb_logo from "@/assets/images/svgs/fb_white.svg";
import ig_logo from "@/assets/images/svgs/ig_white.svg";

import logo_gold from "@/assets/images/svgs/logo_alt.svg";
import ig_logo_gold from "@/assets/images/svgs/ig_gold.svg";
import fb_logo_gold from "@/assets/images/svgs/fb_gold.svg";
import { Link } from "react-router-dom";

export default function Nav({ type }) {
  return (
    <header className="absolute w-full h-[100px] left-0 top-0 flex items-center justify-center md:justify-between px-[4vw] py-5 z-50">
      <Link to="/" className="w-[120px] md:w-[180px]">
        <img
          src={type === 1 ? logo : logo_gold}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </Link>

      <nav className="hidden md:flex gap-6 items-center">
        <Link
          to="https://www.instagram.com/twinny_hotel_and_suites/"
          target="_blank"
        >
          <img
            src={type === 1 ? ig_logo : ig_logo_gold}
            alt="Instagram"
            className="w-[26px]"
          />
        </Link>
        {/* <img
          src={type === 1 ? x_logo : x_logo_gold}
          alt="X - Twitter"
          className="w-[26px]"
        /> */}
        <Link
          to="https://web.facebook.com/profile.php?id=61564680452916"
          target="_blank"
        >
          <img
            src={type === 1 ? fb_logo : fb_logo_gold}
            alt="Facebook"
            className="w-[26px]"
          />
        </Link>
        {/* <img
          src={type === 1 ? tt_logo : tt_logo_gold}
          alt="Tiktok"
          className="w-[26px]"
        /> */}
      </nav>
    </header>
  );
}
