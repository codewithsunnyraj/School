import React from "react";
import { assets } from "../constant/constant";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaRegCalendarAlt, FaUser, FaComments } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Blog = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    x.set(e.clientX - rect.left - midX);
    y.set(e.clientY - rect.top - midY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="Our Blog"
      />

      <div className="my-5 lg:my-10 md:px-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white rounded-t-3xl shadow-lg cursor-pointer overflow-hidden"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <motion.img
                src={assets.bb}
                alt=""
                className="w-full rounded-t-3xl"
                style={{ transform: "translateZ(40px)" }}
                // whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-5" style={{ transform: "translateZ(30px)" }}>
              <div className="pb-4 flex flex-wrap gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt />
                  <span>22 Jan 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>Admin</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaComments />
                  <span>3 Comments</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3">
                Global Business Goal Make Life Easy From Tech
              </h3>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-2 text-blue-600 cursor-pointer"
              >
                <Link to="/blog">Read More</Link>
                <FaArrowRightFromBracket />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
