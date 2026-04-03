import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { assets } from "../constant/constant";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="Contact Now"
      />
      <div className="md:mx-8  mx-3">
        <div className="grid mt-8 md:mt-14 md:grid-cols-2 gap-4">
          <div className="px-2 md:px-6">
            <img src={assets.feed} className="w-full" alt="" />
          </div>
          <div className="flex items-center w-full">
            <div className="border w-full p-2 md:p-6 rounded-t-lg rounded-bl-lg">
              <h3 className="font-bold mb-6 text-2xl md:text-3xl">
                Let's Get In Touch
              </h3>
              <form
                action=""
                method="post"
                className="grid gap-4 md:grid-cols-2"
              >
                <div>
                  <label htmlFor="name">Full Name</label> <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Full Name"
                    className="focus:outline-none w-full border px-2 focus:border-amber-400 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="name">Full Name</label> <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Full Name"
                    className="focus:outline-none w-full border px-2 focus:border-amber-400 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="name">Full Name</label> <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Full Name"
                    className="focus:outline-none w-full border px-2 focus:border-amber-400 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="name">Full Name</label> <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Full Name"
                    className="focus:outline-none w-full border px-2 focus:border-amber-400 py-2"
                  />
                </div>
              </form>
              <div className="my-4">
                <label htmlFor="name">Message</label> <br />
                <textarea
                  name="message"
                  id="message"
                  className="border w-full px-2 py-2 focus-within:outline-none focus:border-yellow-500"
                  rows={5}
                ></textarea>
              </div>
              <div className="border  hover:border-red-500 duration-300 transition-all p-1 rounded-full">
                <button className="bg-yellow-300 cursor-pointer  py-2 rounded-full w-full">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 grid md:grid-cols-2 gap-3 md:gap-8 p-2 md:p-6 lg:grid-cols-3">
          <div className="border border-slate-400 rounded-b-2xl hover:border-slate-600 duration-300 border-dashed shadow p-6">
            <div className="h-16 w-16 bg-indigo-50 border-slate-300 rounded-full border flex justify-center items-center">
              <MdMessage className="text-yellow-400 text-3xl" />
            </div>
            <div className="my-4 border-t border-dashed pt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                accusamus.
              </p>
              <div className="flex justify-end">
                <a
                  href="sms:+91 8936811660"
                  className="text-blue-500 hover:text-red-500 duration-300 transition-all text-2xl"
                >
                  Text Us
                </a>
              </div>
            </div>
          </div>
          <div className="border border-slate-400 rounded-b-2xl hover:border-slate-600 duration-300 border-dashed shadow p-6">
            <div className="h-16 w-16 bg-indigo-50 border-slate-300 rounded-full border flex justify-center items-center">
              <IoLocationSharp className="text-yellow-400 text-3xl" />
            </div>
            <div className="mt-4 border-t border-dashed pt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                accusamus.
              </p>
              <div className="flex justify-end">
                <a
                  href="https://maps.app.goo.gl/NFCCtKeWR5hqphjt9"
                  target="_blank"
                  className="text-blue-500 hover:text-red-500 duration-300 transition-all text-2xl"
                >
                  Visit Our Office
                </a>
              </div>
            </div>
          </div>
          <div className="border border-slate-400 rounded-b-2xl hover:border-slate-600 duration-300 border-dashed shadow px-6 py-3">
            <div className="h-16 w-16 bg-indigo-50 border-slate-300 rounded-full border flex justify-center items-center">
              <IoIosCall className="text-yellow-400 text-3xl" />
            </div>
            <div className="mt-4 border-t border-dashed pt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                accusamus.
              </p>
              <div className="flex justify-end">
                <a
                  href="tel:+91 8936811660"
                  className="text-blue-500 pt-2 hover:text-red-500 duration-300 transition-all text-2xl"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.2021653678567!2d85.17325417517735!3d25.596937177455725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58bb264f6047%3A0x83acba1bff63c626!2sBahadurpur%20Housing%20Colony%2C%20Mahatma%20Gandhi%20Nagar%2C%20Chitragupta%20Nagar%2C%20Patna%2C%20Bihar%20800026!5e1!3m2!1sen!2sin!4v1775233668796!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
