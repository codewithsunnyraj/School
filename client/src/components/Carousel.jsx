import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const Carousel = ({ images }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[EffectCreative, Pagination, Autoplay]}
        // autoplay={{ delay: 3500, disableOnInteraction: false }}
        // loop={true}
        grabCursor={true}
        // speed={800}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-180%", 0, -300],
            rotate: [0, -15, 0], // slight rotate for prev slide
            scale: 0.9, // smaller prev slide
          },
          next: {
            translate: ["180%", 0, -300],
            rotate: [0, 15, 0], // slight rotate for next slide
            scale: 0.9, // smaller next slide
          },
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 lg:h-120 overflow-hidden ">
              <div className="before:content-[''] before:bg-[#00000045] before:absolute  before:inset-0  before:z-40  before:w-full before:h-full">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full  object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Text overlay with fade-in animation */}
              <div className="absolute max-w-[75%] z-40 bottom-16 left-6  space-y-1">
                <h2 className="text-2xl md:text-3xl lg:text-6xl text-white font-bold  animate-fadeIn">
                  {img.title}
                </h2>
                <p className="text-lg lg:text-xl animate-fadeIn text-white delay-200">
                  {img.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
