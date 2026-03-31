import React from "react";
import Heading from "./Heading";
import { blog_data } from "../constant/constant";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <div>
        <Heading title="Our News & Article" subtitle="Our News" />
      </div>
      <div className="grid my-4 md:my-8 lg:grid-cols-3 gap-3 md:gap-8">
        {blog_data.map((items, index) => (
          <div
            key={index}
            className="bg-yellow-50  custom-shadow border border-dashed border-slate-500 rounded-3xl md:p-3 p-2 lg:p-5"
          >
            <div>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={items.img}
                  className="rounded-3xl hover:scale-125 duration-500 transition-all "
                  alt=""
                />
              </div>
              <div className="my-4 p-2">
                <div className=" flex items-center gap-2">
                  <FaCalendarAlt className="text-slate-500" />
                  <span>{items.date}</span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl my-2">{items.title}</h4>
                  <p className="text-justify">{items.desc}</p>
                </div>
                <div className="flex mt-3 md:mt-5 hover:ml-2 transition-all duration-300 items-center gap-2">
                  <Link to="/blog">Read More</Link>
                  <FaArrowRightFromBracket />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
