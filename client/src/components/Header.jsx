import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import { assets } from "../constant/constant";
import { Link } from "react-router-dom";
import { RiMenuFold4Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  // Motion animation start
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // delay between items
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };
  // Motion animation end

  // Navbar Toggle Part start
  const [toggle, setToggle] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Update isDesktop on window resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navbar Toggle Part end
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50"
    >
      <Topbar />
      <div className="bg-white border py-3  md:px-6 lg:px-10">
        <div className="lg:flex justify-between items-center">
          <div className="flex px-4 py-2 lg:py-0 md:px-0 justify-between items-center">
            <div>
              <img src={assets.logo} className="w-20" alt="" />
            </div>
            <div className="lg:hidden" onClick={handleToggle}>
              <RiMenuFold4Line className="text-3xl cursor-pointer" />
            </div>
          </div>

          <AnimatePresence>
            {(toggle || isDesktop) && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
                className="absolute top-60 left-0 right-0 lg:flex lg:relative md:top-40 lg:top-0 p-6 lg:p-0 bg-red-400 lg:bg-transparent w-full lg:w-auto lg:left-auto lg:right-auto items-center"
              >
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="text-black text-lg flex lg:flex-row flex-col gap-5 w-full"
                >
                  <motion.li variants={itemVariants}>
                    <Link to="/" className="font-semibold">
                      Home
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/about" className="font-semibold">
                      About
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/gallery" className="font-semibold">
                      Gallery
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/blog" className="font-semibold">
                      Blog
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/event" className="font-semibold">
                      Event
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/contact" className="font-semibold">
                      Contact
                    </Link>
                  </motion.li>
                </motion.ul>

                <motion.div
                  variants={itemVariants}
                  className="lg:mx-6 w-full my-6 lg:my-0"
                >
                  <Link
                    to="/login"
                    className="bg-black duration-300 hover:bg-white ease-in-out border border-dashed block text-center lg:inline text-lg w-full border-black hover:text-black text-white py-3 px-12 rounded-full"
                  >
                    Login
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
