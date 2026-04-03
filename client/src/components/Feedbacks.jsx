import React from "react";
import { assets, feedbacks } from "../constant/constant";
import Image_slider from "./Image_slider";

const Feedbacks = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-2">
        <div>
          <img src={assets.feed} className="w-full" alt="" />
        </div>
        <div className="bg-slate-900 min-h-120 p-3 w-full md:p-8 ">
          <div>
            <div className="text-white ">
              <h5 className="text-slate-300 mt-5">feedback</h5>
              <h3 className="md:text-3xl lg:text-5xl my-5 lg:mb-32 text-2xl">
                Customer <span className="text-yellow-600">Feedback</span> For
                school
              </h3>
            </div>
            <div>
              <Image_slider type="feedbacks" data={feedbacks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
