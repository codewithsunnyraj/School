import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Breadcrumb = ({ heading, desc, bg_img }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_img})` }}
      className="bg-cover relative px-8 h-96"
    >
      <div className="flex items-center w-full h-full justify-center">
        <div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-white">
            {heading}
          </h3>
          <p className="text-center text-white my-4">{desc}</p>
          <div className="flex justify-center my-2">
            <div className="border-2 inline-flex items-center gap-5 justify-center border-slate-500 p-2 rounded-full">
              <div className="inline-flex text-white items-center gap-3 bg-blue-400 px-4 py-2 rounded-full">
                <IoHome />
                <Link to="/">Home</Link>
              </div>
              <div>
                <p className="text-white py-2 rounded-full inline px-4 bg-orange-600">
                  {heading}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
