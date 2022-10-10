import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BsStopwatchFill, BsGithub, BsLinkedin, BsSkype } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#01000c]">
      <div className="container py-6 px-6 mt-36">
        <div className="max-w-[800px] mx-auto grid  md:grid-cols-3 py-6 gap-6">
          <div className="text-gray-200 flex gap-6 py-4">
            <p className="text-4xl">
              <BiPhoneCall />
            </p>
            <div>
              <h4>CALL ME</h4>
              <p className="text-gray-400">Cell : +8801750352163</p>
            </div>
          </div>
          <div className="text-gray-200 flex gap-4 py-4">
            <p className="text-4xl">
              <BsStopwatchFill />
            </p>
            <div>
              <h4>WORK HOURS</h4>
              <p className="text-gray-400">
                Monday - Friday : 09am - 18pm Saturday : 09am - 1pm
              </p>
            </div>
          </div>
          <div className="text-gray-200 flex gap-6 py-4">
            <p className="text-4xl">
              <GoLocation />
            </p>
            <div>
              <h4>ADDRESS</h4>
              <p className="text-gray-400">Alupotty, Rajshahi, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="max-w-[400px] mx-auto flex">
          <a
            href="https://github.com/Pritom-sarker"
            className="flex items-center gap-3 p-6 text-gray-400 hover:text-sky-400 duration-300"
          >
            <BsGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/me-pritom/"
            className="flex items-center gap-3 p-6 text-gray-400 hover:text-sky-400 duration-300"
          >
            <BsLinkedin />
            Linkedin
          </a>
          <a
            href="skype:+8801750352163"
            className="flex items-center gap-3 p-6 text-gray-400 hover:text-sky-400 duration-300"
          >
            <BsSkype />
            Skype
          </a>
        </div>
        <div className="text-gray-500 border-t border-gray-500/50 pt-6 text-center">
          &copy; 2022 me.pritom@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
