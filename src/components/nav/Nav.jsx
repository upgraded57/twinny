import logo from "../../assets/images/logo.svg";
import fb_icon from "../../assets/images/fb_white.svg";
import x_icon from "../../assets/images/x_white.svg";
import tt_icon from "../../assets/images/tt_white.svg";
import ig_icon from "../../assets/images/ig_white.svg";

export default function Nav() {
  return (
    <header className="absolute w-full h-[100px] left-0 top-0 flex items-center justify-center md:justify-between px-[4vw] py-5 z-50">
      <div className="w-[120px] md:w-[180px]">
        <img src={logo} alt="logo" className="w-full h-full object-cover" />
      </div>

      <nav className="hidden md:flex gap-6 items-center">
        <img src={ig_icon} alt="Instagram" />
        <img src={x_icon} alt="X - Twitter" />
        <img src={fb_icon} alt="Facebook" />
        <img src={tt_icon} alt="Tiktok" />
      </nav>
    </header>
  );
}
