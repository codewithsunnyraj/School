import React from "react";
import Image_slider from "../components/Image_slider";
import { facilities_data } from "../constant/constant";

const Blog = () => {
  return (
    <div>
      <Image_slider type="Facility" data={facilities_data} />
    </div>
  );
};

export default Blog;
