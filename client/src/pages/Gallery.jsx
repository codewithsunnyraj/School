import React from "react";
import Image_grid from "../components/Image_grid";
import Heading from "../components/Heading";
import Breadcrumb from "../components/Breadcrumb";
import { assets } from "../constant/constant";

const Gallery = () => {
  return (
    <div className="">
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="Our Gallery"
      />
      <div className="my-4 md:my-10 lg:my-16 container mx-auto px-4 md:px-10">
        <Heading subtitle="School Gallery" title="Our Gallery For Kids" />
        <Image_grid />
      </div>
    </div>
  );
};

export default Gallery;
