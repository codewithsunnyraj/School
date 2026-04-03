import React from "react";
import { assets } from "../constant/constant";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Forget_password = () => {
  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="Forgot Password"
      />
      <div className="md:mx-16 my-6 md:my-16 mx-3 ">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="">
            <form
              action="javascript:void(0)"
              method="post"
              className="border border-red-800 rounded-r-3xl p-3 md:p-8"
            >
              <div>
                <h3 className="text-3xl font-bold">Forgot Password</h3>
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis mollitia illum perspiciatis nisi expedita in deserunt
                  rerum maxime qui aut nam laudantium molestias.
                </p>
              </div>
              <div>
                <label htmlFor="name">Email-Id</label> <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email-Id"
                  className="focus:outline-none w-full border px-2 focus:border-amber-400 py-2"
                />
              </div>
              <div className="my-4">
                <label htmlFor="password">Password</label> <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  className="focus:outline-none w-full border px-2 focus:border-amber-400 py-2"
                />
              </div>
              <div>
                <button className="bg-red-500 cursor-pointer py-3 w-full rounded-full text-white">
                  Login Now
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="w-full flex justify-center items-center">
              <img src={assets.forget} className="w-120" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget_password;
