import React from "react";
import Image_slider from "./Image_slider";
import { facilities_data } from "../constant/constant";
import Heading from "./Heading";

const Facilities = () => {
  return (
    <div className="class_bg py-6 md:py-8 px-4 md:px-6 lg:px-14 lg:py-12">
      <div className="my-6 md:my-8">
        <Heading
          subtitle="School Facilities"
          title="Engaging & Spacious School"
        />
      </div>
      <Image_slider type="Facility" data={facilities_data} />
    </div>
  );
};

export default Facilities;
