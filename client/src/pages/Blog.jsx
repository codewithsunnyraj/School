import React from "react";
import Image_slider from "../components/Image_slider";
import { assets, facilities_data } from "../constant/constant";
import Breadcrumb from "../components/Breadcrumb";

const Blog = () => {
  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="Our Blog"
      />
      <div className="my-5 lg:my-10">
        <Image_slider type="Facility" data={facilities_data} />
      </div>
    </div>
  );
};

export default Blog;
