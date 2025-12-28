import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-red-400 text-white py-1 px-1">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="hidden md:flex gap-3 items-center">
          <li>
            <a href="#">
              <TbBrandMeta className="h-7 w-7" />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoInstagram className="h-7 w-7" />
            </a>
          </li>
          <li>
            <a href="#">
              <RiTwitterXLine className="h-6 w-6" />
            </a>
          </li>
        </ul>
        <div className="text-md text-center grow">
          <span>We ship worldwide - Fast and Reliable shipping!</span>
        </div>
        <div className="hidden md:block text-md">
          <a href="tel:+1234567890">+1234567890</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
