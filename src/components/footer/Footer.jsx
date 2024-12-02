import logo from "../../assets/images/logo_black.svg";
import callImg from "../../assets/images/call.svg";
import mailImg from "../../assets/images/mail.svg";
import pinImg from "../../assets/images/pin.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-[4vw] bg-pry-clr text-black py-10">
      <div className="flex justify-center border-b-[1px] border-black pb-8">
        <img src={logo} alt="" className="w-[170px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-10 text-center md:text-left  border-b-[1px] border-black">
        <div className="flex gap-2 flex-col items-center md:items-start">
          <img src={callImg} alt="Call" className="h-[28px]" />
          <Link to="tel:2348140778877" className="p-text">
            0814 077 8877
          </Link>
          <p className="p-text">+234 8101 234 567</p>
        </div>
        <div className="flex gap-2 flex-col items-center md:items-start">
          <img src={mailImg} alt="Call" className="h-[28px]" />
          <p className="p-text">useremail@gmail.com</p>
          <p className="p-text">useremail@gmail.com</p>
        </div>
        <div className="flex gap-2 flex-col items-center md:items-start">
          <img src={pinImg} alt="Call" className="h-[28px]" />
          <p className="p-text max-w-[300px]">
            Ramoni Jimoh St, beside Bokku Mart, Ejigbo, Ikeja 100264, Lagos
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
