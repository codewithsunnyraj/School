import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { assets } from "../constant/constant";

const Admission = () => {
  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="Admission"
      />
    </div>
  );
};

export default Admission;
