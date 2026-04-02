import React from "react";
import Carousel from "../components/Carousel";
import { slider } from "../constant/constant";
import Why_choose_us from "../components/Why_choose_us";
import Image_grid from "../components/Image_grid";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Grade from "../components/Grade";
import News from "../components/News";
import Facilities from "../components/Facilities";
import Feedbacks from "../components/Feedbacks";
import Announcement from "../components/Announcement";
import About from "../components/About";
const Home = () => {
  return (
    <div>
      <Carousel images={slider} />
      <About subtitle="" heading="About Us" />
      <Why_choose_us />
      <div className="my-4 md:my-10 lg:my-16 container mx-auto px-4 md:px-10">
        <Heading subtitle="School Gallery" title="Our Gallery For Kids" />
        <div>
          <Image_grid />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <Link
              to="/gallery"
              className="my-2 bg-amber-300 py-4 px-10 rounded-full"
            >
              View More
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="">
        <Grade />

        <Facilities />
      </div>
      <div>
        <Feedbacks />
      </div>
      <div className="container mx-auto px-6 md:px-8 lg:px-16 my-6 md:my-10 lg:my-28">
        <News />
        <div className="my-6 md:my-12 lg:my-24">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold border-b pb-3 border-red-600">
            Annoucement
          </h2>
          <Announcement />
        </div>
      </div>
    </div>
  );
};

export default Home;
