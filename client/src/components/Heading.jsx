import React from "react";
import { motion } from "framer-motion";

const Heading = ({ title, subtitle, layout }) => {
  return (
    <div className={layout}>
      <div>
        <motion.h5
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-xl text-slate-500"
        >
          {subtitle}
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-2xl md:text-3xl lg:text-5xl"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};

export default Heading;
