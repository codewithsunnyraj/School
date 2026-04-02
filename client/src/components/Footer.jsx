import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { assets } from "../constant/constant";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="">
        <div className="bg-footer_img py-8  px-4 md:px-8 lg:px-16 md:py-10">
          <div className="grid text-white md:grid-cols-2 lg:grid-cols-3 pt-5 md:pt-14">
            <div className="">
              <div>
                <img
                  src={assets.logo}
                  className="h-14 w-14 rounded-full"
                  alt=""
                />
                <p className="text-justify mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, corporis? Veniam adipisci doloremque quod odio
                  ipsam? Dicta, soluta sapiente. Quibusdam odit tempore
                  voluptatem commodi minus cum laudantium est molestiae ratione.
                </p>
                <div>
                  <div className="flex mt-5 gap-4">
                    <div className="h-10 group w-10 cursor-pointer hover:bg-yellow-600 duration-300 ease-in-out transition-all rounded-full flex items-center border border-white justify-center">
                      <FaTwitter className="text-white cursor-pointer text-xl" />
                    </div>
                    <div className="h-10 group w-10 cursor-pointer hover:bg-yellow-600 duration-300 ease-in-out transition-all rounded-full flex items-center border border-white justify-center">
                      <FaLinkedinIn className="text-white cursor-pointer text-xl" />
                    </div>
                    <div className="h-10 group w-10 cursor-pointer hover:bg-yellow-600 duration-300 ease-in-out transition-all rounded-full flex items-center border border-white justify-center">
                      <FaInstagram className="text-white cursor-pointer text-xl" />
                    </div>
                    <div className="h-10 group w-10 cursor-pointer hover:bg-yellow-600 duration-300 ease-in-out transition-all rounded-full flex items-center border border-white justify-center">
                      <FaFacebook className="text-white cursor-pointer text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex mt-8 md:mt-0 justify-center">
              <div>
                <div className="mb-5">
                  <h4 className="font-bold mb-2 text-2xl">Quick Links</h4>
                  <p className="underline-line w-20 bg-yellow-500 rounded-full"></p>
                </div>
                <ul className="">
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/about" className="my-1 inline-block">
                    <li>About Us</li>
                  </Link>
                  <Link to="/event">
                    <li>Our Event</li>
                  </Link>
                  <Link to="/contact" className="my-1 inline-block">
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div>
              <div className="md:flex mt-8 lg:mt-0 justify-center">
                <div>
                  <div className="mb-5">
                    <h4 className="font-bold mb-2 text-2xl">Contact Us</h4>
                    <p className="underline-line w-24 bg-yellow-500 rounded-full"></p>
                  </div>
                  <div>
                    <ul>
                      <a href="#">
                        <li className="flex ">
                          <FaLocationDot />
                          <span className="ml-3">
                            H. No 60/1, Road No 6, Aditya Garden, Jamshedpur,
                            Jharkhand
                          </span>
                        </li>
                      </a>
                      <a
                        href="mailto:email@gmail.com"
                        className="my-4 inline-block"
                      >
                        <li className="flex ">
                          <MdEmail className="text-xl" />
                          <span className="ml-3">email@gmail.com</span>
                        </li>
                      </a>
                      <a href="tel: +91 xxxxxxxxxx">
                        <li className="flex ">
                          <IoCallSharp className="text-xl" />
                          <span className="ml-3">+91 xxxxxxxxxx</span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 py-3">
          <p className="text-slate-200 text-center">
            Copyright © 2026 Inspire Education. All rights reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
