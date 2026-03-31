import React from "react";
import { assets } from "../constant/constant";
import { motion } from "framer-motion";
const Image_grid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="my-10 lg:px-10"
    >
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              class="relative overflow-hidden group rounded-2xl"
            >
              <img
                src={assets.g1}
                className="w-full h-56 object-cover absolute transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black/40 transition-all duration-300 group-hover:h-full"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              class="relative overflow-hidden group rounded-2xl"
            >
              <img
                src={assets.g1}
                className="w-full rounded-2xl h-56 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black/40 transition-all duration-300 group-hover:h-full"></div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="my-4 relative overflow-hidden group rounded-2xl"
          >
            <img
              src={assets.g3}
              className="w-full rounded-2xl h-80 object-cover"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full h-0 bg-black/40 transition-all duration-300 group-hover:h-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="grid lg:grid-cols-2 gap-6"
          >
            <div class="relative overflow-hidden group rounded-2xl">
              <img
                src={assets.g1}
                className="w-full h-56 object-cover rounded-2xl"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black/40 transition-all duration-300 group-hover:h-full"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              class="relative overflow-hidden group rounded-2xl"
            >
              <img
                src={assets.g1}
                className="w-full rounded-2xl h-56 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black/40 transition-all duration-300 group-hover:h-full"></div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          class="w-full relative overflow-hidden group rounded-2xl"
        >
          <img src={assets.g4} className="w-full  rounded-2xl" alt="" />
          <div className="absolute bottom-0 left-0 w-full h-0 bg-black/40 transition-all duration-300 group-hover:h-full"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Image_grid;
