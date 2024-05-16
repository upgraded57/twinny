import logo from "@/assets/images/logo.svg";
import fb_logo from "@/assets/images/fb_white.svg";
import x_logo from "@/assets/images/x_white.svg";
import tt_logo from "@/assets/images/tt_white.svg";
import ig_logo from "@/assets/images/ig_white.svg";

import logo_gold from "@/assets/images/logo_alt.svg";
import ig_logo_gold from "@/assets/images/ig_gold.svg";
import x_logo_gold from "@/assets/images/x_gold.svg";
import fb_logo_gold from "@/assets/images/fb_gold.svg";
import tt_logo_gold from "@/assets/images/tt_gold.svg";
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
        <img
          src={type === 1 ? ig_logo : ig_logo_gold}
          alt="Instagram"
          className="w-[26px]"
        />
        <img
          src={type === 1 ? x_logo : x_logo_gold}
          alt="X - Twitter"
          className="w-[26px]"
        />
        <img
          src={type === 1 ? fb_logo : fb_logo_gold}
          alt="Facebook"
          className="w-[26px]"
        />
        <img
          src={type === 1 ? tt_logo : tt_logo_gold}
          alt="Tiktok"
          className="w-[26px]"
        />
      </nav>
    </header>
  );
}
