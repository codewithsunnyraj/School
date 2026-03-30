import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Topbar = () => {
  return (
    <div className="bg-black py-4 px-2 md:px-6">
      <div className="md:flex justify-between items-center">
        <div className="md:flex  items-center gap-2 md:gap-4">
          <div className="flex justify-center items-center text-white">
            <IoMdCall className="text-lg mr-3" />
            <a href="tel:+91 8936811660">+91 8936811660</a>
          </div>
          <div className="flex my-2 md:my-0 justify-center items-center text-white">
            <FaClockRotateLeft className="text-lg mr-3" />
            <a className="cursor-none" href="javascript:void(0)">
              9:30am - 5-30pm
            </a>
          </div>
        </div>
        <div>
          <div className="flex  justify-center items-center gap-4">
            <FaTwitter className="text-white cursor-pointer text-xl" />
            <FaLinkedinIn className="text-white cursor-pointer text-xl" />
            <FaInstagram className="text-white cursor-pointer text-xl" />
            <FaFacebook className="text-white  cursor-pointertext-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
