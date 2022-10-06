import React from "react";
import Nav from "./Nav";
import Typewriter from "typewriter-effect";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import Pritom from "../assets/img/pritom.png";
import Social from "./Social";

const Hero = () => {
  return (
    <div className="container">
      <Nav />
      <div className="hidden xl:block fixed xl:right-4 2xl:right-16 top-[50%] -translate-y-[50%] z-50">
        <Social />
      </div>
      <div className="h-[70px] md:hidden"></div>
      <div className=" grid min-h-screen place-items-center px-6">
        <div className="grid md:grid-cols-2 items-center gap-6 xl:gap-14">
          <div className="md:hidden">
            <img className="max-w-[250px] mx-auto" src={Pritom} alt="" />
          </div>
          <div className="text-white flex flex-col gap-6 pb-6 md:pb-0">
            <h3 className="text-xl">
              Hi, I’m <span className="text-sky-400">Pritom Sarker</span>.
            </h3>
            <h1 className="text-7xl">
              I’m a Blockchain
              <Typewriter
                options={{
                  strings: ["Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-gray-300 text-lg">
              As a researcher and developer, I am particularly interested in
              blockchain, data science, and computer algorithms. I've been
              working on the blockchain smart contract since 2020, utilizing
              Solidarity, Rust, Haskell, and other programming languages. I've
              worked on various NFT, DAO, DEFI, and Metaverse projects with
              satisfactory services
            </p>
            <button className="w-fit">Download My CV</button>
            <div className="flex pt-6 gap-4 text-xl">
              <a
                className="text-white hover:text-sky-400 duration-200"
                href="https://wa.me/+8801750352163"
                target="_blank"
              >
                <BsWhatsapp />
              </a>
              <a
                className="text-white hover:text-sky-400 duration-200 text-2xl -mt-[2px]"
                href="https://share.streak.com/BlBBkOevxGmgGuobOXUGxI"
                target="_blank"
              >
                <HiMail />
              </a>
              <a
                className="text-white hover:text-sky-400 duration-200"
                href="https://t.me/iampritom"
                target="_blank"
              >
                <BsTelegram />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img className="w-full md:max-w-[450px]" src={Pritom} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
