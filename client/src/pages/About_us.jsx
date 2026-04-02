import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { assets } from "../constant/constant";

const About_us = () => {
  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="About Us"
      />
    </div>
  );
};

export default About_us;
