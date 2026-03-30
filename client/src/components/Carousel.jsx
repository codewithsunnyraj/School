import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
const Carousel = ({ images }) => {
  return (
    <div>
      <Swiper
        modules={[EffectCreative, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="creative"
        speed={500}
        grabCursor={true}
        creativeEffect={{
          prev: { shadow: true, translate: ["-200%", 0, -200] },
          next: { translate: ["200%", 0, -200] },
        }}
        pagination={{ clickable: true }}
        loop={true} // autoplay only works if loop is true
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 lg:h-120">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-bold">{img.title}</h2>
                <p className="mt-1 text-lg">{img.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
