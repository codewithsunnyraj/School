import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { assets } from "../constant/constant";

const Login = () => {
  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="Login Now"
      />
    </div>
  );
};

export default Login;
