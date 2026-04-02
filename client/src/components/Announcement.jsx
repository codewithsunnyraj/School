import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Announcement = () => {
  const data = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore veritatis consectetur asperiores id deleniti cum tenetur placeat eligendi dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore veritatis consectetur asperiores id deleniti cum tenetur placeat eligendi dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore veritatis consectetur asperiores id deleniti cum tenetur placeat eligendi dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore veritatis consectetur asperiores id deleniti cum tenetur placeat eligendi dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore veritatis consectetur asperiores id deleniti cum tenetur placeat eligendi dolor.",
      name: "Sunny Raj",
      role: "Designation",
    },
    {
      text: "Totam ipsum laudantium ad nisi quisquam enim magni eos rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Rahul Kumar",
      role: "Manager",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore veritatis consectetur asperiores id deleniti.",
      name: "Amit Singh",
      role: "Developer",
    },
  ];

  return (
    <div className="mt-8 w-full ">
      {/* Container with fixed height */}
      <div className="max-h-36 h-28 overflow-hidden border-b pb-2">
        <Swiper
            modules={[Autoplay]}
          direction="vertical"
          slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500, // ruk ke slide change hoga (better UX)
              disableOnInteraction: false,
            }}
          speed={600}
          className="h-full"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-20 flex flex-col justify-between px-2">
                {/* Text */}
                <p className="text-justify text-sm line-clamp-3">{item.text}</p>

                {/* Author */}
                <div className="flex justify-end">
                  <div className="text-right">
                    <h5 className="font-semibold text-sm">{item.name}</h5>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Announcement;
