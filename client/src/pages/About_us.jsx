import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { assets } from "../constant/constant";
import { motion } from "framer-motion";
import About from "../components/About";
import Image_grid from "../components/Image_grid";
import Why_choose_us from "../components/Why_choose_us";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
const About_us = () => {
  const sections = [
    {
      title: "Our Mission",
      desc: "To empower students with quality education and foster lifelong learning habits.",
      icon: assets.missionIcon, // replace with your icon
    },
    {
      title: "Our Vision",
      desc: "To create a nurturing environment that prepares students for global challenges.",
      icon: assets.visionIcon,
    },
    {
      title: "Our Values",
      desc: "Integrity, creativity, and excellence guide everything we do.",
      icon: assets.valuesIcon,
    },
  ];

  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="About Us"
      />
      <div>
        <About heading="About Our School" />
      </div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-gray-600 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our school has been shaping young minds since 2007, offering a
            dynamic learning environment where students grow academically,
            socially, and creatively.
          </motion.p>

          {/* Dynamic sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl cursor-pointer transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={section.icon}
                    alt={section.title}
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default About_us;
