import React from "react";
import { assets, why_choose_us } from "../constant/constant";
import Heading from "./Heading";
import Image_slider from "./Image_slider";

const Why_choose_us = () => {
  return (
    <div
      className="min-h-64 pb-8 w-full bg-cover"
      style={{ backgroundImage: `url(${assets.kids_bg})` }}
    >
      <div className="flex justify-center text-center py-6 md:py-8 lg:py-14">
        <Heading title="Education For Kids" subtitle="why choose Us" />
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <Image_slider data={why_choose_us} type="kids" />
      </div>
    </div>
  );
};

export default Why_choose_us;
