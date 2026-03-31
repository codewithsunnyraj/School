import React from "react";
import Heading from "./Heading";
import Image_slider from "./Image_slider";
import { grade_level } from "../constant/constant";

const Grade = () => {
  return (
    <div className="bg-grade py-6 px-4 md:px-6 lg:px-10 md:py-10 lg:py-24">
      <div className="grid lg:grid-cols-2">
        <div>
          <Heading
            title="Grade Program"
            subtitle="Grade Level"
            layout="text-white font-bold"
          />
          <div>
            <p className="text-white py-3 md:py-8">
              work and play come together ?
            </p>
          </div>
        </div>
        <div className="">
          <Image_slider data={grade_level} type="grade" />
        </div>
      </div>
    </div>
  );
};

export default Grade;
