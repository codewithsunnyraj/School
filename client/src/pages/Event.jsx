import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { assets } from "../constant/constant";

const Event = () => {
  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="Our Event"
      />
    </div>
  );
};

export default Event;
