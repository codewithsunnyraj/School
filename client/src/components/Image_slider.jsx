import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

import "swiper/css";
import "swiper/css/navigation";
import { assets } from "../constant/constant";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Image_slider = ({
  data,
  slider_view = 3,
  layout = "",
  type = "card",
}) => {
  // console.log("team_view", data);
  return (
    <div className={layout}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={false}
        spaceBetween={20}
        slidesPerView={slider_view}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: slider_view },
        }}
      >
        {data.map((items, index) => (
          <SwiperSlide key={index}>
            {type === "kids" && (
              <div className="my-10 lg:my-6">
                <div className="border-dashed border-2 relative  rounded-t-2xl  p-2">
                  <img
                    src={items.img}
                    className="h-96 w-full object-cover rounded-xl"
                    alt=""
                  />
                  <div className="bg-white py-2 w-full -bottom-6 border  left-0 right-0 rounded-full absolute">
                    <h5 className="text-xl font-semibold text-center ">
                      {items.title}
                    </h5>
                  </div>
                </div>
              </div>
            )}

            {type === "team" && (
              <div className="relative rounded-2xl ">
                <img src={items.img} alt="" className="rounded-t-3xl" />
                <div className="absolute w-full xl:w-96 z-20 -bottom-12 left-1/2 h-48 -translate-x-1/2">
                  <img src={assets.polygon} className="w-full h-full" alt="" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                    <h5 className="text-2xl  font-bold text-center">
                      {items.name}
                    </h5>
                    <h5 className="text-lg text-center">{items.phone_no}</h5>
                    <div className="flex gap-4">
                      <FaTwitter className="text-black text-xl" />
                      <FaLinkedinIn className="text-black text-xl" />
                      <FaInstagram className="text-black text-xl" />
                      <FaFacebook className="text-black text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {type === "feedbacks" && (
              <div className="py-10 px-8 ">
                <div>
                  <div className="text-white flex gap-2" key={index}>
                    <div className="w-[20%]">
                      <img
                        src={items.img}
                        className="rounded-full h-28 w-28"
                        alt=""
                      />
                    </div>
                    <div className="w-[80%]">
                      <h3 className="mb-4 text-2xl lg:text-3xl font-bold text-yellow-400">
                        {items.name}
                      </h3>
                      {items.rating.map((Icon, index) => (
                        <div
                          key={index}
                          className="text-yellow-400 px-1 inline-block"
                        >
                          <Icon />
                        </div>
                      ))}
                      <p className="text-justify text-xl mt-5 text-white">
                        {items.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {type === "apartment" && (
              <div className="relative">
                <Link
                  to={items.path}
                  className=" border-slate-700 rounded-sm p-10"
                >
                  <div className="flex justify-center items-center">
                    <div className="border border-slate-700 rounded-sm h-20 flex justify-center items-center w-20">
                      <items.icon className="text-white text-5xl" />
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <h5 className="text-white text-center text-2xl">
                      {items.heading}
                    </h5>
                    <h5 className="text-white text-center text-xl">
                      {items.subTitle}
                    </h5>
                  </div>
                </Link>
              </div>
            )}

            {type === "grade" && (
              <div className="relative p-1 h-52 w-52 border flex items-center justify-center border-white border-dashed rounded-full">
                <div className="h-48 w-48 flex flex-col justify-center rounded-full  bg-white p-2">
                  <div className="flex items-center justify-center">
                    <div className="bg-green-500 flex items-center justify-center h-20 w-20 rounded-full p-3 text-center">
                      {items.title}
                    </div>
                  </div>
                  <div>
                    <p className="text-center mt-3 font-bold">
                      {items.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {type === "Facility" && (
              <div
                key={index}
                className="bg-white my-4 lg:max-w-105  custom-shadow border border-dashed border-slate-500 rounded-3xl md:p-3 p-2 lg:p-5"
              >
                <div>
                  <div className=" relative rounded-3xl">
                    <img src={items.img} className="rounded-3xl " alt="" />
                    <div className=" flex absolute left-1/2 -translate-x-1/2 -bottom-12 items-center gap-2">
                      <span className="text-4xl h-20 w-20 bg-white flex items-center justify-center rounded-full">
                        <p className=" h-16 w-16 bg-green-50 border-dashed border flex items-center justify-center rounded-full">
                          {<items.icon />}
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="mt-12 mb-4 p-2">
                    <div>
                      <h4 className="font-bold text-2xl my-2">{items.title}</h4>
                      <p className="text-justify">{items.desc}</p>
                    </div>
                    <div className="flex mt-3 md:mt-5 hover:ml-2 transition-all duration-300 items-center gap-2">
                      <Link to="/blog">Read More</Link>
                      {/* <FaArrowRightFromBracket /> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Image_slider;
