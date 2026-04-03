import React from "react";
// import Image_slider from "./Image_slider";
import { CiLocationArrow1 } from "react-icons/ci";
import { assets } from "../constant/constant";

const About = ({ subtitle, heading }) => {
  return (
    <div>
      <div className=" py-8 md:py-16  px-6 md:px-16">
        <div className="lg:grid lg:grid-cols-[70%_30%] gap-6">
          <div>
            <div>
              <h6 className="text-red-500">{subtitle}</h6>
              <h3 className="font-extrabold my-4 text-black text-2xl md:text-3xl lg:text-5xl ">
                {heading}
              </h3>
              <p className="text-black text-xl text-justify mt-4">
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                of using lorem the is Ipsum less normal distribution of letters
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                of using lorem the is Ipsum less normal distribution of letters.
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                of using lorem the is Ipsum less normal distribution of
                letters..
              </p>
              <div className="mt-4 md:pr-14 lg:flex items-center justify-between md:mt-8">
                <div className="flex items-center text-black">
                  <CiLocationArrow1 className="text-orange-400 mr-2 text-2xl" />
                  <span className="text-xl">List your own property</span>
                </div>
                <div className="flex mt-4 lg:mt-0 items-center text-black">
                  <CiLocationArrow1 className="text-orange-400 mr-2 text-2xl" />
                  <span className="text-xl">List your own property</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <img src={assets.about} className="h-96" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
